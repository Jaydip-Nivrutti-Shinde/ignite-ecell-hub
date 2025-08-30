import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Overall Coordinator',
      headFlag: true,
      photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      quote: 'Leading innovation through collaboration',
      bio: 'Passionate about building sustainable entrepreneurship ecosystems.',
      email: 'alex@university.edu',
      linkedin: 'https://linkedin.com/in/alexjohnson'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Events & Public Relations Head',
      headFlag: true,
      photoURL: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      quote: 'Creating memorable experiences that inspire',
      bio: 'Expert in event management and strategic communications.',
      email: 'sarah@university.edu',
      linkedin: 'https://linkedin.com/in/sarahchen'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <motion.div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-200">Meet the passionate individuals driving innovation</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="team-card">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.photoURL} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover team-image"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-muted-foreground italic mb-4">"{member.quote}"</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;