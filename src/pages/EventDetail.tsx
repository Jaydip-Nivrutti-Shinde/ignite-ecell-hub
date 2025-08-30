import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  CalendarDaysIcon,
  MapPinIcon,
  UsersIcon,
  ClockIcon,
  ShareIcon,
  BookmarkIcon,
  ArrowLeftIcon,
  StarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const EventDetail = () => {
  const { id } = useParams();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    experience: '',
    expectations: ''
  });

  // Mock event data - in real app, this would come from API
  const event = {
    id: 1,
    title: 'E-Summit 2024: The Future of Entrepreneurship',
    slug: 'e-summit-2024',
    type: 'conference',
    category: 'Major Event',
    status: 'upcoming',
    startDate: '2024-03-15T09:00:00',
    endDate: '2024-03-17T18:00:00',
    venue: 'Main Auditorium, University Campus',
    venueAddress: '123 University Avenue, Innovation District',
    capacity: 1000,
    registered: 750,
    price: 'Free',
    registrationDeadline: '2024-03-10T23:59:59',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    description: 'Join us for the biggest entrepreneurship summit of the year featuring keynotes from industry leaders, panel discussions, workshops, and unparalleled networking opportunities. This three-day extravaganza will bring together the brightest minds in entrepreneurship, innovation, and technology.',
    longDescription: `E-Summit 2024 is designed to inspire, educate, and connect the next generation of entrepreneurs. Over three days, participants will have the opportunity to learn from successful entrepreneurs, participate in interactive workshops, pitch their ideas, and network with like-minded individuals.

    The summit features a diverse lineup of speakers from various industries, including technology, healthcare, fintech, and social entrepreneurship. Whether you're a seasoned entrepreneur or just starting your journey, E-Summit 2024 offers something valuable for everyone.

    This year's theme focuses on the future of entrepreneurship in an AI-driven world, sustainable business practices, and the evolving landscape of startup funding.`,
    speakers: [
      {
        id: 1,
        name: 'Sarah Johnson',
        title: 'CEO & Founder',
        company: 'TechInnovate',
        bio: 'Serial entrepreneur with 3 successful exits. Expert in AI and machine learning applications in business.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahj'
      },
      {
        id: 2,
        name: 'Michael Chen',
        title: 'Managing Partner',
        company: 'Venture Capital Fund',
        bio: 'Leading investor with over $500M in successful investments. Focuses on early-stage technology startups.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        linkedin: 'https://linkedin.com/in/michaelchen'
      },
      {
        id: 3,
        name: 'Priya Patel',
        title: 'Founder & CEO',
        company: 'EcoSolutions',
        bio: 'Pioneer in sustainable technology solutions. Leading the charge in clean energy innovation.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        linkedin: 'https://linkedin.com/in/priyapatel'
      }
    ],
    agenda: [
      {
        day: 'Day 1',
        date: '2024-03-15',
        sessions: [
          { time: '09:00 - 10:00', title: 'Registration & Networking Breakfast', speaker: '', type: 'networking' },
          { time: '10:00 - 11:00', title: 'Opening Keynote: The Future of Entrepreneurship', speaker: 'Sarah Johnson', type: 'keynote' },
          { time: '11:15 - 12:15', title: 'Panel: AI in Business - Opportunities and Challenges', speaker: 'Industry Experts', type: 'panel' },
          { time: '13:30 - 14:30', title: 'Workshop: Building Your First MVP', speaker: 'Michael Chen', type: 'workshop' },
          { time: '14:45 - 15:45', title: 'Startup Pitch Sessions - Round 1', speaker: '', type: 'competition' },
          { time: '16:00 - 17:00', title: 'Networking & Investor Meetup', speaker: '', type: 'networking' }
        ]
      },
      {
        day: 'Day 2',
        date: '2024-03-16',
        sessions: [
          { time: '09:00 - 10:00', title: 'Morning Keynote: Sustainable Entrepreneurship', speaker: 'Priya Patel', type: 'keynote' },
          { time: '10:15 - 11:15', title: 'Workshop: Fundraising Strategies for Startups', speaker: 'VC Panel', type: 'workshop' },
          { time: '11:30 - 12:30', title: 'Panel: Women in Entrepreneurship', speaker: 'Female Founders', type: 'panel' },
          { time: '13:30 - 14:30', title: 'Startup Exhibition & Demo Day', speaker: '', type: 'exhibition' },
          { time: '14:45 - 15:45', title: 'Masterclass: Digital Marketing for Startups', speaker: 'Marketing Expert', type: 'workshop' },
          { time: '16:00 - 17:30', title: 'Cultural Evening & Entertainment', speaker: '', type: 'entertainment' }
        ]
      },
      {
        day: 'Day 3',
        date: '2024-03-17',
        sessions: [
          { time: '09:00 - 10:00', title: 'Keynote: Global Entrepreneurship Trends', speaker: 'International Speaker', type: 'keynote' },
          { time: '10:15 - 11:15', title: 'Final Pitch Competition', speaker: '', type: 'competition' },
          { time: '11:30 - 12:30', title: 'Awards Ceremony', speaker: '', type: 'ceremony' },
          { time: '12:30 - 13:30', title: 'Closing Remarks & Networking Lunch', speaker: '', type: 'networking' }
        ]
      }
    ],
    tags: ['Conference', 'Networking', 'Keynote', 'Entrepreneurship', 'Innovation'],
    requirements: [
      'Valid student ID or professional identification',
      'Laptop for workshop sessions',
      'Business cards for networking (optional)',
      'Printed confirmation email'
    ],
    benefits: [
      'Access to all keynote sessions and panels',
      'Networking opportunities with 1000+ entrepreneurs',
      'Workshop materials and resources',
      'Startup exhibition access',
      'Certificate of participation',
      'E-Summit 2024 merchandise kit',
      'Access to exclusive post-event community'
    ],
    sponsors: [
      { name: 'TechCorp', logo: 'https://logo.clearbit.com/techcorp.com', tier: 'title' },
      { name: 'InnovateVC', logo: 'https://logo.clearbit.com/innovatevc.com', tier: 'gold' },
      { name: 'StartupHub', logo: 'https://logo.clearbit.com/startuphub.com', tier: 'silver' }
    ],
    registrationOpen: true,
    featured: true
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Registration submitted successfully! Check your email for confirmation.');
    setIsRegistrationOpen(false);
    setRegistrationForm({
      name: '',
      email: '',
      phone: '',
      college: '',
      year: '',
      experience: '',
      expectations: ''
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Event link copied to clipboard!');
    }
  };

  const registrationPercentage = (event.registered / event.capacity) * 100;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${event.image})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
          
          <div className="relative z-10 container-custom h-full flex items-end pb-12">
            <div className="w-full text-white">
              <div className="flex items-center justify-between mb-6">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" asChild>
                  <Link to="/events">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back to Events
                  </Link>
                </Button>
                
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={handleShare}>
                    <ShareIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <BookmarkIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                {event.featured && (
                  <Badge className="bg-primary text-primary-foreground">
                    <StarIcon className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge variant="outline" className="border-white text-white">
                  {event.category}
                </Badge>
                <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                  {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {event.title}
              </h1>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CalendarDaysIcon className="w-5 h-5" />
                  <span>{formatDate(event.startDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-5 h-5" />
                  <span>{formatTime(event.startDate)} - {formatTime(event.endDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="w-5 h-5" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="w-5 h-5" />
                  <span>{event.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="agenda">Agenda</TabsTrigger>
                  <TabsTrigger value="speakers">Speakers</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">About This Event</h3>
                      <div className="prose prose-lg max-w-none text-muted-foreground">
                        {event.longDescription.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 leading-relaxed">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4">What You'll Get</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {event.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4">Event Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="agenda" className="mt-8">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold">Event Agenda</h3>
                    
                    {event.agenda.map((day, dayIndex) => (
                      <Card key={dayIndex}>
                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold mb-4 flex items-center space-x-3">
                            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {dayIndex + 1}
                            </span>
                            <span>{day.day} - {formatDate(day.date)}</span>
                          </h4>
                          
                          <div className="space-y-4">
                            {day.sessions.map((session, sessionIndex) => (
                              <div key={sessionIndex} className="flex space-x-4 p-4 rounded-lg bg-muted/30">
                                <div className="flex-shrink-0 w-20 text-sm font-medium text-primary">
                                  {session.time}
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold mb-1">{session.title}</h5>
                                  {session.speaker && (
                                    <p className="text-sm text-muted-foreground">
                                      Speaker: {session.speaker}
                                    </p>
                                  )}
                                  <Badge variant="outline" className="mt-2 text-xs">
                                    {session.type}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="speakers" className="mt-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Featured Speakers</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {event.speakers.map((speaker) => (
                        <Card key={speaker.id}>
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <img 
                                src={speaker.image} 
                                alt={speaker.name}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-bold text-lg">{speaker.name}</h4>
                                <p className="text-primary font-medium mb-1">{speaker.title}</p>
                                <p className="text-sm text-muted-foreground mb-3">{speaker.company}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                  {speaker.bio}
                                </p>
                                <div className="flex space-x-2">
                                  {speaker.linkedin && (
                                    <Button size="sm" variant="outline" asChild>
                                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                      </a>
                                    </Button>
                                  )}
                                  {speaker.twitter && (
                                    <Button size="sm" variant="outline" asChild>
                                      <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                                        Twitter
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Event Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-bold mb-4">Requirements</h4>
                            <ul className="space-y-2">
                              {event.requirements.map((req, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-bold mb-4">Venue Information</h4>
                            <div className="space-y-3">
                              <div>
                                <p className="font-medium">{event.venue}</p>
                                <p className="text-sm text-muted-foreground">{event.venueAddress}</p>
                              </div>
                              <Button variant="outline" size="sm" className="w-full">
                                View on Map
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4">Our Sponsors</h4>
                      <div className="flex flex-wrap items-center gap-8">
                        {event.sponsors.map((sponsor, index) => (
                          <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                            <img 
                              src={sponsor.logo} 
                              alt={sponsor.name}
                              className="h-12 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Registration Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">{event.price}</div>
                      <p className="text-muted-foreground">Per Person</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span>Registration Progress</span>
                        <span>{event.registered}/{event.capacity}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${registrationPercentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {Math.round(registrationPercentage)}% registered • {event.capacity - event.registered} seats left
                      </p>
                    </div>

                    {event.registrationOpen ? (
                      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
                        <DialogTrigger asChild>
                          <Button className="w-full mb-4">
                            Register Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Register for {event.title}</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleRegistration} className="space-y-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={registrationForm.name}
                                onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={registrationForm.email}
                                onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                value={registrationForm.phone}
                                onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="college">College/Organization *</Label>
                              <Input
                                id="college"
                                value={registrationForm.college}
                                onChange={(e) => setRegistrationForm({...registrationForm, college: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="year">Year of Study</Label>
                              <Input
                                id="year"
                                value={registrationForm.year}
                                onChange={(e) => setRegistrationForm({...registrationForm, year: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label htmlFor="experience">Previous Entrepreneurship Experience</Label>
                              <Textarea
                                id="experience"
                                value={registrationForm.experience}
                                onChange={(e) => setRegistrationForm({...registrationForm, experience: e.target.value})}
                                placeholder="Brief description of your entrepreneurship background..."
                              />
                            </div>
                            <div>
                              <Label htmlFor="expectations">What do you hope to gain from this event?</Label>
                              <Textarea
                                id="expectations"
                                value={registrationForm.expectations}
                                onChange={(e) => setRegistrationForm({...registrationForm, expectations: e.target.value})}
                                placeholder="Your expectations and goals..."
                              />
                            </div>
                            <div className="flex space-x-3">
                              <Button type="submit" className="flex-1">
                                Submit Registration
                              </Button>
                              <Button type="button" variant="outline" onClick={() => setIsRegistrationOpen(false)}>
                                <XMarkIcon className="w-4 h-4" />
                              </Button>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button disabled className="w-full mb-4">
                        Registration Closed
                      </Button>
                    )}

                    <p className="text-xs text-muted-foreground text-center">
                      Registration deadline: {formatDate(event.registrationDeadline)}
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-4">Quick Information</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span>3 Days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Format</span>
                        <span>In-Person</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Language</span>
                        <span>English</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Certificate</span>
                        <span>Yes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Meals</span>
                        <span>Included</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;