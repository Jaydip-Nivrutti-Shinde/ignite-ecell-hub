import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Droplet, Plus, Minus, RefreshCw } from 'lucide-react';
import { useHospitalBloodInventory } from '@/hooks/useHospitalBloodInventory';

export const BloodInventoryManager = () => {
  const { inventory, loading, updateInventory, getTotalUnits, refetch } = useHospitalBloodInventory();
  const [editingGroup, setEditingGroup] = useState<string | null>(null);
  const [newValue, setNewValue] = useState<number>(0);

  const handleEdit = (bloodGroup: string, currentUnits: number) => {
    setEditingGroup(bloodGroup);
    setNewValue(currentUnits);
  };

  const handleSave = async (bloodGroup: string) => {
    await updateInventory(bloodGroup, newValue);
    setEditingGroup(null);
  };

  const handleIncrement = (bloodGroup: string, currentUnits: number) => {
    updateInventory(bloodGroup, currentUnits + 1);
  };

  const handleDecrement = (bloodGroup: string, currentUnits: number) => {
    if (currentUnits > 0) {
      updateInventory(bloodGroup, currentUnits - 1);
    }
  };

  const getStatusColor = (units: number) => {
    if (units === 0) return 'bg-destructive/10 text-destructive border-destructive/20';
    if (units < 10) return 'bg-warning/10 text-warning border-warning/20';
    return 'bg-success/10 text-success border-success/20';
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplet className="h-5 w-5" />
            Blood Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">Loading inventory...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5 text-primary" />
              Blood Inventory Management
            </CardTitle>
            <CardDescription>
              Total Units Available: <span className="font-semibold text-foreground">{getTotalUnits()}</span>
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={refetch}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {inventory.map((item) => (
            <Card key={item.blood_group} className={`${getStatusColor(item.units_available)}`}>
              <CardContent className="p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-lg font-bold">
                      {item.blood_group}
                    </Badge>
                    {item.units_available === 0 && (
                      <Badge variant="destructive" className="text-xs">Empty</Badge>
                    )}
                    {item.units_available > 0 && item.units_available < 10 && (
                      <Badge variant="secondary" className="text-xs bg-warning/20 text-warning">Low</Badge>
                    )}
                  </div>
                  
                  {editingGroup === item.blood_group ? (
                    <div className="space-y-2">
                      <Label htmlFor={`units-${item.blood_group}`} className="text-xs">
                        Units Available
                      </Label>
                      <Input
                        id={`units-${item.blood_group}`}
                        type="number"
                        min="0"
                        value={newValue}
                        onChange={(e) => setNewValue(parseInt(e.target.value) || 0)}
                        className="h-8"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleSave(item.blood_group)}
                          className="flex-1"
                        >
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingGroup(null)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="text-center">
                        <div className="text-3xl font-bold">{item.units_available}</div>
                        <div className="text-xs text-muted-foreground">units</div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDecrement(item.blood_group, item.units_available)}
                          disabled={item.units_available === 0}
                          className="flex-1"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(item.blood_group, item.units_available)}
                          className="flex-1"
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleIncrement(item.blood_group, item.units_available)}
                          className="flex-1"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </>
                  )}
                  
                  <div className="text-xs text-muted-foreground text-center">
                    Last updated: {new Date(item.last_updated).toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
