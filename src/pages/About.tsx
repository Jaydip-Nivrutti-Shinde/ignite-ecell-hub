import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import {
  EyeIcon,
  HeartIcon,
  TrophyIcon,
  UsersIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We foster creative thinking and encourage breakthrough solutions to real-world problems.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong networks among entrepreneurs.'
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'We maintain high standards and strive for excellence in everything we do.'
    },
    {
      icon: HeartIcon,
      title: 'Impact',
      description: 'We focus on creating meaningful impact in society through entrepreneurial ventures.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'E-Cell University was established with a vision to create the largest entrepreneurship ecosystem in the region.'
    },
    {
      year: '2019',
      title: 'First E-Summit',
      description: 'Organized our inaugural E-Summit with over 1000 participants and 50+ speakers from industry.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Adapted to virtual format during pandemic, reaching 5000+ students across the globe.'
    },
    {
      year: '2021',
      title: 'Incubation Center',
      description: 'Launched our startup incubation center, providing mentorship and funding to student ventures.'
    },
    {
      year: '2022',
      title: 'National Recognition',
      description: 'Recognized as the Best University E-Cell in the National Entrepreneurship Awards.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Established international partnerships and launched exchange programs with global universities.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Opening our new state-of-the-art Innovation Hub with advanced prototyping facilities.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              About E-Cell University
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Nurturing the entrepreneurial spirit and building tomorrow's business leaders through innovation, collaboration, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section ref={missionRef} className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <RocketLaunchIcon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a vibrant ecosystem that empowers students to transform innovative ideas into successful ventures, 
                    fostering entrepreneurial thinking and providing the resources, mentorship, and network needed to build 
                    sustainable businesses that create positive impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <EyeIcon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as the premier university entrepreneurship cell that produces world-class entrepreneurs 
                    and innovators who lead the transformation of industries and contribute to solving global challenges 
                    through technology and sustainable business practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrophyIcon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Goals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To cultivate entrepreneurial mindset among students, provide practical business experience, 
                    connect students with industry mentors and investors, facilitate startup incubation, 
                    and create a supportive community of aspiring and successful entrepreneurs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our entrepreneurial community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading force in university entrepreneurship
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-px"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full md:transform md:-translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-2xl font-bold text-primary">{item.year}</span>
                          <h4 className="text-xl font-bold">{item.title}</h4>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Join our thriving community of entrepreneurs, innovators, and change-makers. 
              Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join E-Cell
              </button>
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;