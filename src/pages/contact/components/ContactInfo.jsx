import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      title: "General Inquiries",
      email: "hello@monastery360.org",
      description: "Questions about our platform, virtual tours, or general information",
      icon: "Mail",
      responseTime: "24-48 hours"
    },
    {
      id: 2,
      title: "Partnership & Collaboration",
      email: "partnerships@monastery360.org",
      description: "Monastery partnerships, cultural institutions, and heritage organizations",
      icon: "Handshake",
      responseTime: "48-72 hours"
    },
    {
      id: 3,
      title: "Technical Support",
      email: "support@monastery360.org",
      description: "Virtual tour issues, platform bugs, or technical assistance",
      icon: "Settings",
      responseTime: "12-24 hours"
    },
    {
      id: 4,
      title: "Media & Press",
      email: "media@monastery360.org",
      description: "Press inquiries, interviews, and media collaboration requests",
      icon: "Camera",
      responseTime: "24-48 hours"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      icon: "Facebook",
      url: "#",
      description: "Follow our heritage preservation journey"
    },
    {
      id: 2,
      name: "Twitter",
      icon: "Twitter",
      url: "#",
      description: "Latest updates and cultural insights"
    },
    {
      id: 3,
      name: "Instagram",
      icon: "Instagram",
      url: "#",
      description: "Visual stories from monasteries worldwide"
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: "Linkedin",
      url: "#",
      description: "Professional network and partnerships"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-card rounded-xl p-8 spiritual-shadow">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            Contact Information
          </h2>
          <p className="text-muted-foreground">
            Choose the best way to reach our team based on your inquiry type.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails?.map((contact) => (
            <div key={contact?.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={contact?.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-body font-semibold text-foreground mb-1">
                  {contact?.title}
                </h3>
                <a 
                  href={`mailto:${contact?.email}`}
                  className="text-primary hover:text-primary/80 font-medium text-sm mb-2 block transition-colors duration-200"
                >
                  {contact?.email}
                </a>
                <p className="text-muted-foreground text-sm mb-2">
                  {contact?.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="Clock" size={12} className="mr-1" />
                  Response time: {contact?.responseTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-card rounded-xl p-8 spiritual-shadow">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            Connect With Us
          </h2>
          <p className="text-muted-foreground">
            Follow our journey and stay updated with the latest heritage preservation efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks?.map((social) => (
            <a
              key={social?.id}
              href={social?.url}
              className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <Icon name={social?.icon} size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-body font-medium text-foreground">
                  {social?.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {social?.description}
                </p>
              </div>
              <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>
      {/* Location & Office */}
      <div className="bg-card rounded-xl p-8 spiritual-shadow">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            Our Presence
          </h2>
          <p className="text-muted-foreground">
            Based in India with partnerships across Himalayan monasteries and cultural heritage sites.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-foreground mb-1">
                Headquarters
              </h3>
              <p className="text-muted-foreground text-sm">
                New Delhi, India
              </p>
              <p className="text-muted-foreground text-sm">
                Digital Heritage Preservation Hub
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Mountain" size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-foreground mb-1">
                Partner Monasteries
              </h3>
              <p className="text-muted-foreground text-sm">
                Ladakh, Sikkim, Himachal Pradesh, Arunachal Pradesh
              </p>
              <p className="text-muted-foreground text-sm">
                15+ monastery partnerships across the Himalayas
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Building2" size={20} className="text-success" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-foreground mb-1">
                Government Collaboration
              </h3>
              <p className="text-muted-foreground text-sm">
                Ministry of Tourism & Ministry of Culture
              </p>
              <p className="text-muted-foreground text-sm">
                Official heritage digitization partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;