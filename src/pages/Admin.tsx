import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Admin = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Admin panel coming soon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;