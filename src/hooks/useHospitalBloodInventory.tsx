import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

export interface BloodInventory {
  id: string;
  hospital_id: string;
  blood_group: string;
  units_available: number;
  last_updated: string;
}

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const useHospitalBloodInventory = (hospitalId?: string) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [inventory, setInventory] = useState<BloodInventory[]>([]);
  const [loading, setLoading] = useState(true);

  const effectiveHospitalId = hospitalId || user?.id;

  useEffect(() => {
    if (!effectiveHospitalId) {
      setInventory([]);
      setLoading(false);
      return;
    }

    fetchInventory();

    // Real-time subscription
    const channel = supabase
      .channel(`blood_inventory_${effectiveHospitalId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'hospital_blood_inventory',
          filter: `hospital_id=eq.${effectiveHospitalId}`
        },
        () => {
          fetchInventory();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [effectiveHospitalId]);

  const fetchInventory = async () => {
    if (!effectiveHospitalId) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('hospital_blood_inventory')
        .select('*')
        .eq('hospital_id', effectiveHospitalId)
        .order('blood_group');

      if (error) throw error;

      // Ensure all blood groups exist
      const existingGroups = new Set((data || []).map(item => item.blood_group));
      const allInventory = BLOOD_GROUPS.map(group => {
        const existing = (data || []).find(item => item.blood_group === group);
        return existing || {
          id: `temp-${group}`,
          hospital_id: effectiveHospitalId,
          blood_group: group,
          units_available: 0,
          last_updated: new Date().toISOString(),
        };
      });

      setInventory(allInventory);
    } catch (error) {
      console.error('Error fetching inventory:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch blood inventory',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const updateInventory = async (bloodGroup: string, units: number) => {
    if (!user || !effectiveHospitalId) {
      toast({
        title: 'Error',
        description: 'You must be logged in as a hospital',
        variant: 'destructive',
      });
      return { error: 'Not authenticated' };
    }

    try {
      const { data, error } = await supabase
        .from('hospital_blood_inventory')
        .upsert({
          hospital_id: effectiveHospitalId,
          blood_group: bloodGroup,
          units_available: units,
          last_updated: new Date().toISOString(),
          updated_by: user.id,
        }, {
          onConflict: 'hospital_id,blood_group'
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Success',
        description: `${bloodGroup} inventory updated to ${units} units`,
      });

      fetchInventory();
      return { data, error: null };
    } catch (error: any) {
      console.error('Error updating inventory:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update inventory',
        variant: 'destructive',
      });
      return { data: null, error };
    }
  };

  const getTotalUnits = () => {
    return inventory.reduce((sum, item) => sum + item.units_available, 0);
  };

  return {
    inventory,
    loading,
    updateInventory,
    getTotalUnits,
    refetch: fetchInventory,
  };
};
