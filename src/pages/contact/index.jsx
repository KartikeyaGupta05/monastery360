import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import MinistryCollaboration from './components/MinistryCollaboration';
import Icon from '../../components/AppIcon';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Monastery360 | Digital Heritage Platform</title>
        <meta name="description" content="Get in touch with Monastery360 for inquiries, partnerships, or heritage preservation collaboration. Connect with our team for virtual tour support and cultural tourism initiatives." />
        <meta name="keywords" content="contact monastery360, heritage preservation contact, virtual tour support, cultural tourism partnership, monastery collaboration" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon name="MessageCircle" size={28} className="text-primary" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Connect With Us
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our mission to preserve and share monastery heritage through digital innovation. 
                We're here to answer your questions and explore collaboration opportunities.
              </p>
            </div>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-card rounded-lg spiritual-shadow">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={20} className="text-success" />
                </div>
                <h3 className="font-body font-semibold text-foreground mb-1">
                  Quick Response
                </h3>
                <p className="text-muted-foreground text-sm">
                  24-48 hour response time
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg spiritual-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={20} className="text-primary" />
                </div>
                <h3 className="font-body font-semibold text-foreground mb-1">
                  Expert Team
                </h3>
                <p className="text-muted-foreground text-sm">
                  Heritage & technology specialists
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg spiritual-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Globe" size={20} className="text-accent" />
                </div>
                <h3 className="font-body font-semibold text-foreground mb-1">
                  Global Reach
                </h3>
                <p className="text-muted-foreground text-sm">
                  Worldwide heritage network
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Ministry Collaboration Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Official Partnerships
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Monastery360 is proud to collaborate with government ministries and heritage organizations 
                to preserve and promote India's rich cultural legacy.
              </p>
            </div>
            
            <MinistryCollaboration />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-card rounded-2xl p-8 spiritual-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Join Our Heritage Preservation Mission
              </h2>
              <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're a monastery, cultural institution, technology partner, or heritage enthusiast, 
                we invite you to be part of our journey to preserve and share the world's monastery heritage 
                for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:partnerships@monastery360.org"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  <Icon name="Handshake" size={18} className="mr-2" />
                  Become a Partner
                </a>
                <a 
                  href="mailto:volunteer@monastery360.org"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
                >
                  <Icon name="Users" size={18} className="mr-2" />
                  Volunteer With Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-6 h-6 text-primary-foreground"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl">Monastery360</h3>
                    <p className="font-caption text-sm opacity-80">Digital Heritage Platform</p>
                  </div>
                </div>
                <p className="text-background/80 mb-4 max-w-md">
                  Preserving monastery heritage through immersive virtual experiences and supporting 
                  local artisan communities worldwide.
                </p>
                <p className="text-background/60 text-sm">
                  © {new Date()?.getFullYear()} Monastery360. Built for Smart India Hackathon 2024.
                </p>
              </div>

              <div>
                <h4 className="font-body font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-background/80">
                  <li><a href="/homepage" className="hover:text-background transition-colors">Home</a></li>
                  <li><a href="/virtual-tour-experience" className="hover:text-background transition-colors">Virtual Tours</a></li>
                  <li><a href="/interactive-mandala-ai" className="hover:text-background transition-colors">Mandala AI</a></li>
                  <li><a href="/artisan-connect-marketplace" className="hover:text-background transition-colors">Artisan Connect</a></li>
                  <li><a href="/about-us" className="hover:text-background transition-colors">About Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-body font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-background/80 text-sm">
                  <li className="flex items-center">
                    <Icon name="Mail" size={14} className="mr-2" />
                    hello@monastery360.org
                  </li>
                  <li className="flex items-center">
                    <Icon name="MapPin" size={14} className="mr-2" />
                    New Delhi, India
                  </li>
                  <li className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-2" />
                    24/7 Digital Access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;