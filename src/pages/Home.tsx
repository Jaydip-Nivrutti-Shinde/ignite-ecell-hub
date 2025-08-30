import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from '@/components/ui/animated-counter';
import heroBanner from '@/assets/hero-banner.jpg';
import {
  RocketLaunchIcon,
  UsersIcon,
  TrophyIcon,
  LightBulbIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: eventsRef, inView: eventsInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { label: 'Active Members', value: 500, suffix: '+', icon: UsersIcon },
    { label: 'Events Organized', value: 150, suffix: '+', icon: CalendarDaysIcon },
    { label: 'Startups Incubated', value: 75, suffix: '+', icon: RocketLaunchIcon },
    { label: 'Success Stories', value: 25, suffix: '+', icon: TrophyIcon },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'E-Summit 2024',
      date: '2024-03-15',
      time: '9:00 AM',
      location: 'Main Auditorium',
      type: 'Conference',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
      attendees: 500,
      status: 'Early Bird'
    },
    {
      id: 2,
      title: 'Startup Pitch Competition',
      date: '2024-03-20',
      time: '2:00 PM',
      location: 'Innovation Lab',
      type: 'Competition',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop',
      attendees: 150,
      status: 'Open'
    },
    {
      id: 3,
      title: 'AI & Entrepreneurship Workshop',
      date: '2024-03-25',
      time: '10:00 AM',
      location: 'Tech Center',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop',
      attendees: 100,
      status: 'Limited Seats'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'E-Cell provided the foundation and network that helped me launch my first startup. The mentorship and resources are invaluable.',
      company: 'TechStart Inc.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, InnovateLab',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The entrepreneurship ecosystem at university E-Cell is phenomenal. From ideation to execution, they support every step.',
      company: 'InnovateLab'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Co-founder, EcoSolutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Being part of E-Cell taught me that entrepreneurship is not just about business, but about creating impact and solving problems.',
      company: 'EcoSolutions'
    }
  ];

  const partners = [
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
    { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
    { name: 'Meta', logo: 'https://logo.clearbit.com/meta.com' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering the Next Generation of
              <span className="block gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Entrepreneurs
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join University's premier entrepreneurship community. Transform your ideas into reality with mentorship, resources, and a network of innovators.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg" asChild>
                <Link to="/signup">
                  Join E-Cell Today
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg" asChild>
                <Link to="/events">
                  Register for NEC
                  <RocketLaunchIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <LightBulbIcon className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-32 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <TrophyIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a thriving ecosystem of innovation and entrepreneurship
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center stat-card">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        className="gradient-text"
                      />
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section ref={eventsRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these exciting opportunities to learn, network, and grow
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="event-card group">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {event.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <CalendarDaysIcon className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <UsersIcon className="w-4 h-4" />
                        <span>{event.attendees} attendees expected</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to={`/events/${event.id}`}>
                        Learn More & Register
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/events">
                View All Events
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our alumni who turned their dreams into successful ventures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              Collaborating with industry leaders to create opportunities
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 md:h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Join hundreds of ambitious students and alumni who are building the future. 
              Your startup story begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg" asChild>
                <Link to="/signup">
                  <CheckCircleIcon className="mr-2 h-5 w-5" />
                  Join E-Cell Now
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg" asChild>
                <Link to="/about">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;