import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { cn } from '@/lib/utils';

const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin');
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navigation />}
      
      <main className={cn(
        "flex-1",
        !isDashboard && "pt-20" // Account for fixed navigation
      )}>
        <Outlet />
      </main>
      
      {!isDashboard && <Footer />}
    </div>
  );
};

export default Layout;