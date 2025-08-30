import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-200">Get in touch with our team</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;