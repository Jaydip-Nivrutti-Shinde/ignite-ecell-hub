import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CalendarDaysIcon,
  MapPinIcon,
  UsersIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const events = [
    {
      id: 1,
      title: 'E-Summit 2024: The Future of Entrepreneurship',
      slug: 'e-summit-2024',
      type: 'conference',
      category: 'Major Event',
      status: 'upcoming',
      startDate: '2024-03-15T09:00:00',
      endDate: '2024-03-17T18:00:00',
      venue: 'Main Auditorium',
      capacity: 1000,
      registered: 750,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop',
      description: 'Join us for the biggest entrepreneurship summit of the year featuring keynotes from industry leaders, panel discussions, and networking opportunities.',
      speakers: ['Elon Musk', 'Sundar Pichai', 'Reid Hoffman'],
      tags: ['Conference', 'Networking', 'Keynote'],
      registrationOpen: true,
      featured: true
    },
    {
      id: 2,
      title: 'Startup Pitch Competition 2024',
      slug: 'startup-pitch-2024',
      type: 'competition',
      category: 'Competition',
      status: 'upcoming',
      startDate: '2024-03-20T14:00:00',
      endDate: '2024-03-20T18:00:00',
      venue: 'Innovation Lab',
      capacity: 200,
      registered: 150,
      price: '₹500',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop',
      description: 'Pitch your startup idea to a panel of investors and industry experts. Win seed funding and mentorship opportunities.',
      speakers: ['Venture Capital Panel'],
      tags: ['Pitch', 'Funding', 'Startup'],
      registrationOpen: true,
      featured: false
    },
    {
      id: 3,
      title: 'AI & Machine Learning Workshop',
      slug: 'ai-ml-workshop-2024',
      type: 'workshop',
      category: 'Workshop',
      status: 'upcoming',
      startDate: '2024-03-25T10:00:00',
      endDate: '2024-03-25T16:00:00',
      venue: 'Tech Center Lab 1',
      capacity: 50,
      registered: 45,
      price: '₹1000',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      description: 'Hands-on workshop on building AI applications for business. Learn from industry experts and build your first AI model.',
      speakers: ['Dr. Sarah Johnson', 'Alex Chen'],
      tags: ['AI', 'Machine Learning', 'Hands-on'],
      registrationOpen: true,
      featured: false
    },
    {
      id: 4,
      title: 'Digital Marketing Masterclass',
      slug: 'digital-marketing-masterclass',
      type: 'workshop',
      category: 'Workshop',
      status: 'upcoming',
      startDate: '2024-04-02T11:00:00',
      endDate: '2024-04-02T17:00:00',
      venue: 'Business School Auditorium',
      capacity: 100,
      registered: 67,
      price: '₹750',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      description: 'Master the art of digital marketing with practical strategies for social media, SEO, and content marketing.',
      speakers: ['Marketing Experts Panel'],
      tags: ['Marketing', 'Digital', 'Social Media'],
      registrationOpen: true,
      featured: false
    },
    {
      id: 5,
      title: 'Blockchain & Cryptocurrency Seminar',
      slug: 'blockchain-crypto-seminar',
      type: 'seminar',
      category: 'Seminar',
      status: 'past',
      startDate: '2024-02-15T15:00:00',
      endDate: '2024-02-15T18:00:00',
      venue: 'Engineering Block',
      capacity: 300,
      registered: 285,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
      description: 'Understanding the future of finance through blockchain technology and cryptocurrency innovations.',
      speakers: ['Crypto Industry Leaders'],
      tags: ['Blockchain', 'Cryptocurrency', 'Finance'],
      registrationOpen: false,
      featured: false
    }
  ];

  const categories = ['all', 'Major Event', 'Competition', 'Workshop', 'Seminar'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const EventCard = ({ event, index }: { event: any, index: number }) => {
    const startDate = formatDate(event.startDate);
    const registrationPercentage = (event.registered / event.capacity) * 100;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className={`event-card ${event.featured ? 'border-primary shadow-lg' : ''}`}>
          <div className="relative">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {event.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  <StarIcon className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                {event.category}
              </Badge>
            </div>
            
            {/* Date Badge */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{startDate.day}</div>
                <div className="text-xs text-muted-foreground uppercase">{startDate.month}</div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {event.description}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>{startDate.time}</span>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPinIcon className="w-4 h-4 mr-2" />
                <span>{event.venue}</span>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <UsersIcon className="w-4 h-4 mr-2" />
                <span>{event.registered}/{event.capacity} registered</span>
              </div>
            </div>
            
            {/* Registration Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Registration</span>
                <span>{Math.round(registrationPercentage)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${registrationPercentage}%` }}
                ></div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button className="flex-1" asChild>
                <Link to={`/events/${event.id}`}>
                  View Details
                </Link>
              </Button>
              
              {event.registrationOpen && event.status === 'upcoming' && (
                <Button variant="outline" className="flex-1">
                  Register ({event.price})
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

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
              Events & Workshops
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Discover opportunities to learn, network, and grow your entrepreneurial skills through our carefully curated events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search events, topics, or speakers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <FunnelIcon className="w-5 h-5 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="upcoming" className="flex items-center space-x-2">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>Upcoming ({upcomingEvents.length})</span>
                </TabsTrigger>
                <TabsTrigger value="past" className="flex items-center space-x-2">
                  <span>Past Events ({pastEvents.length})</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming">
              {upcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <CalendarDaysIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No upcoming events found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm || selectedCategory !== 'all' 
                      ? 'Try adjusting your search or filter criteria' 
                      : 'Check back soon for new events'}
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past">
              {pastEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <CalendarDaysIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No past events found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm || selectedCategory !== 'all' 
                      ? 'Try adjusting your search or filter criteria' 
                      : 'Past events will appear here'}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Don't Miss Out on Future Events
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming events, workshops, and exclusive entrepreneurship opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;