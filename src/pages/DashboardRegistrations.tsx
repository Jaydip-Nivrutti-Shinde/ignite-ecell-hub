import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardRegistrations = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <Card>
          <CardHeader>
            <CardTitle>My Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Registration history coming soon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardRegistrations;