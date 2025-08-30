import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const programs = [
    { name: 'NEC (National Entrepreneurship Challenge)', href: '/programs/nec' },
    { name: 'E-Summit', href: '/programs/e-summit' },
    { name: 'Eureka! Innovation Challenge', href: '/programs/eureka' },
  ];

  const resources = [
    { name: 'Blog', href: '/resources' },
    { name: 'Startup Guide', href: '/resources/guides' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Downloads', href: '/resources/downloads' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/university-ecell' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/universityecell' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/universityecell' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com/universityecell' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/universityecell' },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg gradient-text">E-Cell</h3>
                <p className="text-sm text-muted-foreground">University</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Empowering the next generation of entrepreneurs through innovation, 
              collaboration, and excellence. Join us in building the future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                <span>University Campus, Innovation Block</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
                <span>hello@universityecell.edu</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-medium text-sm mb-2">Stay Updated</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Get the latest news and updates from E-Cell
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-xs bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button className="px-3 py-2 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
              <p>© {currentYear} University E-Cell. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span>by E-Cell Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;