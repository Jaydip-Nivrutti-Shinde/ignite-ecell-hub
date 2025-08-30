import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardCertificates = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <Card>
          <CardHeader>
            <CardTitle>My Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Certificate gallery coming soon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardCertificates;