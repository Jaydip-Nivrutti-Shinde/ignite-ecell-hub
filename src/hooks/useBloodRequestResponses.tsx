import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

export interface BloodRequestResponse {
  id: string;
  request_id: string;
  responder_id: string;
  responder_type: 'user' | 'hospital';
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  units_offered: number;
  message: string | null;
  created_at: string;
  updated_at: string;
  responder_name?: string;
  responder_phone?: string;
}

export const useBloodRequestResponses = (requestId: string | null) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [responses, setResponses] = useState<BloodRequestResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!requestId) {
      setResponses([]);
      setLoading(false);
      return;
    }

    fetchResponses();

    // Real-time subscription
    const channel = supabase
      .channel(`blood_responses_${requestId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'blood_request_responses',
          filter: `request_id=eq.${requestId}`
        },
        () => {
          fetchResponses();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [requestId]);

  const fetchResponses = async () => {
    if (!requestId) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blood_request_responses')
        .select(`
          *,
          responder:profiles!blood_request_responses_responder_id_fkey(first_name, last_name, phone)
        `)
        .eq('request_id', requestId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formatted = (data || []).map((resp: any) => ({
        ...resp,
        responder_name: resp.responder
          ? `${resp.responder.first_name || ''} ${resp.responder.last_name || ''}`.trim()
          : 'Unknown',
        responder_phone: resp.responder?.phone || null,
      }));

      setResponses(formatted);
    } catch (error) {
      console.error('Error fetching responses:', error);
    } finally {
      setLoading(false);
    }
  };

  const createResponse = async (
    requestId: string,
    unitsOffered: number,
    message?: string
  ) => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'You must be logged in',
        variant: 'destructive',
      });
      return { error: 'Not authenticated' };
    }

    try {
      // Check if already responded
      const { data: existing } = await supabase
        .from('blood_request_responses')
        .select('id')
        .eq('request_id', requestId)
        .eq('responder_id', user.id)
        .single();

      if (existing) {
        toast({
          title: 'Already Responded',
          description: 'You have already responded to this request',
          variant: 'destructive',
        });
        return { error: 'Already responded' };
      }

      // Determine responder type
      const { data: hospitalProfile } = await supabase
        .from('hospital_profiles')
        .select('id')
        .eq('id', user.id)
        .single();

      const responderType = hospitalProfile ? 'hospital' : 'user';

      const { data, error } = await supabase
        .from('blood_request_responses')
        .insert([
          {
            request_id: requestId,
            responder_id: user.id,
            responder_type: responderType,
            status: 'accepted',
            units_offered: unitsOffered,
            message: message || null,
          }
        ])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Your response has been sent',
      });

      fetchResponses();
      return { data, error: null };
    } catch (error: any) {
      console.error('Error creating response:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to send response',
        variant: 'destructive',
      });
      return { data: null, error };
    }
  };

  const updateResponse = async (responseId: string, status: string) => {
    try {
      const { data, error } = await supabase
        .from('blood_request_responses')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', responseId)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Response updated',
      });

      fetchResponses();
      return { data, error: null };
    } catch (error: any) {
      console.error('Error updating response:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update response',
        variant: 'destructive',
      });
      return { data: null, error };
    }
  };

  return {
    responses,
    loading,
    createResponse,
    updateResponse,
    refetch: fetchResponses,
  };
};
