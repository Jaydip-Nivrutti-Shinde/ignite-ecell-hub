import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <motion.div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Resources & Blog</h1>
            <p className="text-xl md:text-2xl text-gray-200">Knowledge hub for entrepreneurs</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">Our comprehensive resource library is being curated</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;