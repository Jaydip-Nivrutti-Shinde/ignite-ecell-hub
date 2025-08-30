import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Team = () => {
  const departments = [
    {
      name: 'Overall Coordination',
      members: [
        {
          id: 1,
          name: 'Alex Johnson',
          role: 'Overall Coordinator',
          headFlag: true,
          photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
          quote: 'Leading innovation through collaboration',
          bio: 'Passionate about building sustainable entrepreneurship ecosystems.',
          email: 'alex@ghrce.edu',
          linkedin: 'https://linkedin.com/in/alexjohnson'
        },
        {
          id: 2,
          name: 'Priya Sharma',
          role: 'Vice Coordinator',
          headFlag: false,
          photoURL: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
          quote: 'Empowering student entrepreneurs',
          bio: 'Focused on creating opportunities for student startups.',
          email: 'priya@ghrce.edu',
          linkedin: 'https://linkedin.com/in/priyasharma'
        }
      ]
    },
    {
      name: 'Technical Department',
      members: [
        {
          id: 3,
          name: 'Rahul Patel',
          role: 'Technical Head',
          headFlag: true,
          photoURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
          quote: 'Building the future with code',
          bio: 'Full-stack developer passionate about entrepreneurial tech solutions.',
          email: 'rahul@ghrce.edu',
          linkedin: 'https://linkedin.com/in/rahulpatel'
        },
        {
          id: 4,
          name: 'Anjali Desai',
          role: 'Technical Co-Head',
          headFlag: false,
          photoURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
          quote: 'Innovation through technology',
          bio: 'AI/ML enthusiast working on startup automation solutions.',
          email: 'anjali@ghrce.edu',
          linkedin: 'https://linkedin.com/in/anjalidesai'
        }
      ]
    },
    {
      name: 'Media & PR',
      members: [
        {
          id: 5,
          name: 'Vikram Singh',
          role: 'Media Head',
          headFlag: true,
          photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
          quote: 'Telling stories that inspire',
          bio: 'Creative storyteller specializing in startup narratives.',
          email: 'vikram@ghrce.edu',
          linkedin: 'https://linkedin.com/in/vikramsingh'
        },
        {
          id: 6,
          name: 'Sneha Kulkarni',
          role: 'PR Manager',
          headFlag: false,
          photoURL: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
          quote: 'Building bridges through communication',
          bio: 'Strategic communications expert with startup ecosystem knowledge.',
          email: 'sneha@ghrce.edu',
          linkedin: 'https://linkedin.com/in/snehakulkarni'
        }
      ]
    },
    {
      name: 'Finance & Operations',
      members: [
        {
          id: 7,
          name: 'Arjun Mehta',
          role: 'Financial Head',
          headFlag: true,
          photoURL: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
          quote: 'Managing resources for maximum impact',
          bio: 'Finance professional with expertise in startup funding strategies.',
          email: 'arjun@ghrce.edu',
          linkedin: 'https://linkedin.com/in/arjunmehta'
        },
        {
          id: 8,
          name: 'Kavya Nair',
          role: 'Operations Head',
          headFlag: true,
          photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
          quote: 'Streamlining processes for efficiency',
          bio: 'Operations specialist focused on scaling entrepreneurial initiatives.',
          email: 'kavya@ghrce.edu',
          linkedin: 'https://linkedin.com/in/kavyanair'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
        <div className="relative section-padding">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground">
                Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Meet the passionate individuals driving innovation and entrepreneurship at GHRCE MJ
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Departments */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {departments.map((department, deptIndex) => (
              <motion.div
                key={department.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    <span className="gradient-text">{department.name}</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {department.members.map((member, memberIndex) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group"
                    >
                      <Card className="team-card bg-card border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                        <CardContent className="p-0">
                          {/* Profile Image */}
                          <div className="relative overflow-hidden bg-gradient-primary/10">
                            <img 
                              src={member.photoURL} 
                              alt={member.name}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                            {member.headFlag && (
                              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0">
                                Head
                              </Badge>
                            )}
                          </div>
                          
                          {/* Content */}
                          <div className="p-6 space-y-3">
                            <div className="text-center">
                              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {member.role}
                              </Badge>
                            </div>
                            
                            <p className="text-muted-foreground italic text-center text-sm">
                              "{member.quote}"
                            </p>
                            
                            <p className="text-xs text-muted-foreground text-center line-clamp-2">
                              {member.bio}
                            </p>
                            
                            <div className="flex justify-center pt-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                              >
                                View Profile
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;