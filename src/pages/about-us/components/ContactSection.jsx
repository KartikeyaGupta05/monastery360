import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const contactMethods = [
    {
      id: 1,
      title: "General Inquiries",
      description: "Questions about our platform, partnerships, or technical details",
      icon: "Mail",
      contact: "hello@monastery360.com",
      action: "Send Email"
    },
    {
      id: 2,
      title: "Partnership Opportunities",
      description: "Collaborate with us on heritage preservation and cultural projects",
      icon: "Handshake",
      contact: "partnerships@monastery360.com",
      action: "Partner With Us"
    },
    {
      id: 3,
      title: "Technical Support",
      description: "Get help with platform features, VR experiences, or technical issues",
      icon: "HelpCircle",
      contact: "support@monastery360.com",
      action: "Get Support"
    },
    {
      id: 4,
      title: "Media & Press",
      description: "Press inquiries, interviews, and media collaboration requests",
      icon: "Camera",
      contact: "media@monastery360.com",
      action: "Media Kit"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: "Linkedin",
      url: "#",
      description: "Professional updates and company news"
    },
    {
      id: 2,
      name: "Twitter",
      icon: "Twitter",
      url: "#",
      description: "Latest updates and community discussions"
    },
    {
      id: 3,
      name: "Instagram",
      icon: "Instagram",
      url: "#",
      description: "Behind-the-scenes content and monastery visuals"
    },
    {
      id: 4,
      name: "YouTube",
      icon: "Youtube",
      url: "#",
      description: "Virtual tours and educational content"
    },
    {
      id: 5,
      name: "GitHub",
      icon: "Github",
      url: "#",
      description: "Open source contributions and technical resources"
    }
  ];

  const officeLocations = [
    {
      id: 1,
      city: "New Delhi",
      country: "India",
      address: "Tech Hub, Connaught Place\nNew Delhi 110001, India",
      role: "Headquarters & Development Center",
      icon: "Building"
    },
    {
      id: 2,
      city: "Gangtok",
      country: "India",
      address: "Heritage Center, Main Bazaar\nLeh 194101, Gangtok, India",
      role: "Cultural Research & Monastery Liaison",
      icon: "Mountain"
    },
    {
      id: 3,
      city: "Bangalore",
      country: "India",
      address: "Innovation Campus, Koramangala\nBangalore 560034, India",
      role: "AI/ML Development Center",
      icon: "Cpu"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Ready to explore monastery heritage, discuss partnerships, or learn more about our mission? We'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button variant="default" size="lg" iconName="MessageCircle" iconPosition="left">
              Contact Us Now
            </Button>
          </Link>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            How Can We Help?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods?.map((method) => (
              <div key={method?.id} className="breathing-card bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={method?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                      {method?.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                      {method?.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm text-primary font-medium">
                        {method?.contact}
                      </span>
                      <Button variant="outline" size="sm">
                        {method?.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Our Locations
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {officeLocations?.map((location) => (
              <div key={location?.id} className="breathing-card bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={location?.icon} size={32} className="text-accent" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                  {location?.city}, {location?.country}
                </h4>
                <p className="font-body text-sm text-primary font-medium mb-3">
                  {location?.role}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {location?.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Connect With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {socialLinks?.map((social) => (
              <a
                key={social?.id}
                href={social?.url}
                className="breathing-card bg-card rounded-xl p-6 text-center border border-border hover:border-primary/20 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon name={social?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                  {social?.name}
                </h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {social?.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="font-body text-lg mb-6 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest updates on monastery heritage preservation, new virtual tours, and platform developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground font-body focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button variant="secondary" size="default">
                Subscribe
              </Button>
            </div>
            <p className="font-caption text-xs text-white/80 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;