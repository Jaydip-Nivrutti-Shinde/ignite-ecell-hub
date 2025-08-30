import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">Your entrepreneurship journey dashboard</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>My Registrations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Active registrations</p>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Events Attended</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Total events</p>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader>
              <CardTitle>Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Earned certificates</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;