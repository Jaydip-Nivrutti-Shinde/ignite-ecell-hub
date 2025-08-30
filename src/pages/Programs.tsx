import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TrophyIcon,
  CalendarDaysIcon,
  UsersIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Programs = () => {
  const { slug } = useParams();
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: programsRef, inView: programsInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const programs = [
    {
      id: 'nec',
      name: 'National Entrepreneurship Challenge',
      slug: 'nec',
      shortName: 'NEC',
      description: 'India\'s largest student-run entrepreneurship competition',
      longDescription: 'The National Entrepreneurship Challenge (NEC) is our flagship program that brings together the brightest minds from across the country to compete in the ultimate test of entrepreneurial skills. Participants pitch their innovative business ideas to a panel of seasoned investors and industry experts.',
      status: 'active',
      registrationOpen: true,
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
      highlights: [
        'Over 10,000 participants from 500+ colleges',
        'Prize pool worth ₹10 Lakhs',
        'Mentorship from industry leaders',
        'Seed funding opportunities for winners',
        'National media coverage'
      ],
      timeline: [
        { phase: 'Registration', date: '1st Feb - 15th Mar', description: 'Submit your business idea and team details' },
        { phase: 'Screening', date: '16th Mar - 30th Mar', description: 'Initial evaluation of submissions' },
        { phase: 'Semi-Finals', date: '1st Apr - 15th Apr', description: 'Virtual pitching rounds' },
        { phase: 'Grand Finale', date: '20th Apr - 22nd Apr', description: 'Final presentations and awards ceremony' }
      ],
      stats: {
        participants: '10,000+',
        colleges: '500+',
        prizePool: '₹10L',
        years: '6th'
      }
    },
    {
      id: 'e-summit',
      name: 'E-Summit',
      slug: 'e-summit',
      shortName: 'E-Summit',
      description: 'Annual flagship entrepreneurship summit with global speakers',
      longDescription: 'E-Summit is our annual entrepreneurship summit that brings together successful entrepreneurs, investors, and thought leaders from around the world. It\'s a three-day extravaganza featuring keynote speeches, panel discussions, workshops, and networking sessions.',
      status: 'upcoming',
      registrationOpen: false,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      highlights: [
        'International speakers and entrepreneurs',
        'Interactive workshops and masterclasses',
        'Startup exhibition and demo day',
        'Investor meetups and networking',
        'Cultural events and entertainment'
      ],
      timeline: [
        { phase: 'Early Bird', date: 'Dec 1st - 31st', description: 'Special pricing for early registrations' },
        { phase: 'General Registration', date: 'Jan 1st - Feb 15th', description: 'Regular ticket sales' },
        { phase: 'Final Week', date: 'Feb 16th - 20th', description: 'Last chance registrations' },
        { phase: 'E-Summit', date: 'Feb 25th - 27th', description: 'Three days of entrepreneurship excellence' }
      ],
      stats: {
        participants: '5,000+',
        speakers: '50+',
        countries: '15+',
        days: '3'
      }
    },
    {
      id: 'eureka',
      name: 'Eureka! Innovation Challenge',
      slug: 'eureka',
      shortName: 'Eureka!',
      description: 'Hackathon-style innovation challenge for tech entrepreneurs',
      longDescription: 'Eureka! is our innovation challenge that combines the excitement of a hackathon with the rigor of business planning. Teams have 48 hours to develop a working prototype and business model for real-world problems.',
      status: 'active',
      registrationOpen: true,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      highlights: [
        '48-hour intensive innovation challenge',
        'Focus on emerging technologies',
        'Industry mentors and technical support',
        'Prototype development and testing',
        'Fast-track incubation for winners'
      ],
      timeline: [
        { phase: 'Registration', date: 'Mar 1st - 20th', description: 'Team registration and problem selection' },
        { phase: 'Preparation', date: 'Mar 21st - 31st', description: 'Research and initial planning' },
        { phase: 'Innovation Weekend', date: 'Apr 5th - 7th', description: '48-hour development sprint' },
        { phase: 'Demo Day', date: 'Apr 12th', description: 'Final presentations and judging' }
      ],
      stats: {
        teams: '200+',
        hours: '48',
        mentors: '30+',
        prizes: '₹5L'
      }
    }
  ];

  // If a specific program is requested, show that program's details
  const specificProgram = slug ? programs.find(p => p.slug === slug) : null;

  if (specificProgram) {
    return (
      <div className="min-h-screen">
        {/* Program Hero */}
        <section 
          className="relative section-padding bg-gradient-hero text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${specificProgram.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {specificProgram.status === 'active' ? 'Registration Open' : 'Coming Soon'}
                </Badge>
                <Badge variant="outline" className="text-white border-white">
                  {specificProgram.shortName}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {specificProgram.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
                {specificProgram.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                {specificProgram.registrationOpen && (
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    Register Now
                  </Button>
                )}
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Stats */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(specificProgram.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {value}
                  </div>
                  <div className="text-muted-foreground capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Timeline */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              Program Timeline
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {specificProgram.timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold">{phase.phase}</h4>
                      <Badge variant="outline">{phase.date}</Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              Program Highlights
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specificProgram.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <StarIcon className="w-4 h-4 text-white" />
                        </div>
                        <p className="font-medium">{highlight}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Main programs page
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Discover our flagship programs designed to nurture entrepreneurial talent and create the next generation of business leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section ref={programsRef} className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-1 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={programsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:from-transparent lg:to-black/50"></div>
                      <div className="absolute top-4 left-4">
                        <Badge variant={program.status === 'active' ? 'default' : 'secondary'}>
                          {program.status === 'active' ? 'Active' : 'Upcoming'}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          {program.id === 'nec' && <TrophyIcon className="w-6 h-6 text-white" />}
                          {program.id === 'e-summit' && <GlobeAltIcon className="w-6 h-6 text-white" />}
                          {program.id === 'eureka' && <LightBulbIcon className="w-6 h-6 text-white" />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold">{program.name}</h3>
                          <p className="text-primary font-medium">{program.shortName}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {program.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(program.stats).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <Button className="flex-1" asChild>
                          <a href={`/programs/${program.slug}`}>
                            Learn More
                          </a>
                        </Button>
                        {program.registrationOpen && (
                          <Button variant="outline" className="flex-1">
                            Register Now
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their entrepreneurial dreams into reality through our programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="px-8">
                <RocketLaunchIcon className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <CalendarDaysIcon className="mr-2 h-5 w-5" />
                View All Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;