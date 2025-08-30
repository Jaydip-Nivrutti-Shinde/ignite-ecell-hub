import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardProfile = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Profile management coming soon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardProfile;