import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Droplet, Clock, MapPin, Phone, Mail, User, MessageCircle, CheckCircle } from 'lucide-react';
import { BloodRequest } from '@/hooks/useBloodRequests';
import { useBloodRequestResponses } from '@/hooks/useBloodRequestResponses';
import { useAuth } from '@/hooks/useAuth';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface BloodRequestCardProps {
  request: BloodRequest;
  onAccept?: () => void;
}

export const BloodRequestCard = ({ request, onAccept }: BloodRequestCardProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { createResponse, responses } = useBloodRequestResponses(request.id);
  const [unitsOffered, setUnitsOffered] = useState(1);
  const [message, setMessage] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const urgencyColors = {
    normal: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    urgent: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    critical: 'bg-red-500/10 text-red-500 border-red-500/20',
  };

  const statusColors = {
    active: 'bg-green-500/10 text-green-500 border-green-500/20',
    partially_fulfilled: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    fulfilled: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    cancelled: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
    expired: 'bg-red-500/10 text-red-500 border-red-500/20',
  };

  const userResponse = responses.find(r => r.responder_id === user?.id);
  const hasResponded = !!userResponse;

  const handleAccept = async () => {
    const { error } = await createResponse(request.id, unitsOffered, message);
    if (!error) {
      setDialogOpen(false);
      setMessage('');
      setUnitsOffered(1);
      onAccept?.();
    }
  };

  const handleChat = () => {
    navigate('/blood-connect', { state: { requestId: request.id, receiverId: request.requester_id } });
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5 text-primary" />
              {request.blood_group} Blood Needed
            </CardTitle>
            <CardDescription>
              {request.patient_name && `For ${request.patient_name}`}
              {request.patient_age && `, Age: ${request.patient_age}`}
            </CardDescription>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <Badge className={urgencyColors[request.urgency_level]}>
              {request.urgency_level.toUpperCase()}
            </Badge>
            <Badge className={statusColors[request.status]}>
              {request.status.replace('_', ' ').toUpperCase()}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Droplet className="h-4 w-4 text-muted-foreground" />
            <span>
              <span className="font-semibold">{request.units_required}</span> units required
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
            <span>
              <span className="font-semibold">{request.units_received}</span> units received
            </span>
          </div>
        </div>

        {request.patient_condition && (
          <div className="text-sm">
            <span className="font-semibold">Condition:</span> {request.patient_condition}
          </div>
        )}

        {request.description && (
          <div className="text-sm">
            <span className="font-semibold">Details:</span> {request.description}
          </div>
        )}

        <div className="space-y-2 text-sm">
          {request.hospital_name && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{request.hospital_name}</span>
            </div>
          )}
          {request.address && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{request.address}, {request.city}, {request.state} - {request.pincode}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span>{request.contact_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{request.contact_phone}</span>
          </div>
          {request.contact_email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{request.contact_email}</span>
            </div>
          )}
        </div>

        {request.expiry_date && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Expires {formatDistanceToNow(new Date(request.expiry_date), { addSuffix: true })}</span>
          </div>
        )}

        <div className="text-xs text-muted-foreground">
          Posted {formatDistanceToNow(new Date(request.created_at), { addSuffix: true })}
        </div>

        {request.requester_id !== user?.id && (
          <div className="flex gap-2 pt-2">
            {hasResponded ? (
              <>
                <Badge variant="secondary" className="flex-1 justify-center py-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  You Responded
                </Badge>
                <Button onClick={handleChat} variant="outline" className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat
                </Button>
              </>
            ) : (
              request.status === 'active' && (
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Droplet className="h-4 w-4 mr-2" />
                      Accept Request
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Accept Blood Request</DialogTitle>
                      <DialogDescription>
                        Confirm how many units you can provide for {request.blood_group} blood.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="units">Units Available</Label>
                        <Input
                          id="units"
                          type="number"
                          min="1"
                          max={request.units_required - request.units_received}
                          value={unitsOffered}
                          onChange={(e) => setUnitsOffered(parseInt(e.target.value) || 1)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Add any additional information..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                        />
                      </div>
                      <Button onClick={handleAccept} className="w-full">
                        Confirm Response
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
