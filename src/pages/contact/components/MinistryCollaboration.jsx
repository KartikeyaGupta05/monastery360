import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MinistryCollaboration = () => {
  const collaborations = [
    {
      id: 1,
      organization: "Ministry of Tourism",
      department: "Government of India",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop&crop=center",
      description: "Official partnership for digital tourism promotion and heritage site accessibility enhancement across India.",
      contact: "tourism.partnership@monastery360.org",
      projects: [
        "Digital Tourism Infrastructure",
        "Accessibility Enhancement Program",
        "Heritage Site Promotion"
      ],
      status: "Active Partnership"
    },
    {
      id: 2,
      organization: "Ministry of Culture",
      department: "Government of India",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop&crop=center",
      description: "Collaborative efforts in cultural preservation, digitization of heritage artifacts, and promotion of traditional arts.",
      contact: "culture.partnership@monastery360.org",
      projects: [
        "Heritage Digitization Initiative",
        "Cultural Artifact Preservation",
        "Traditional Arts Documentation"
      ],
      status: "Active Partnership"
    },
    {
      id: 3,
      organization: "Archaeological Survey of India",
      department: "ASI",
      logo: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100&h=100&fit=crop&crop=center",
      description: "Technical collaboration for archaeological site documentation and 3D heritage mapping of monastery complexes.",
      contact: "asi.collaboration@monastery360.org",
      projects: [
        "3D Heritage Mapping",
        "Archaeological Documentation",
        "Site Conservation Support"
      ],
      status: "Under Development"
    }
  ];

  const endorsements = [
    {
      id: 1,
      title: "UNESCO Recognition",
      description: "Acknowledged for innovative approach to digital heritage preservation",
      icon: "Award",
      date: "March 2024"
    },
    {
      id: 2,
      title: "Smart India Hackathon Winner",
      description: "First place in Heritage & Culture category for Monastery360 platform",
      icon: "Trophy",
      date: "February 2024"
    },
    {
      id: 3,
      title: "Digital India Initiative",
      description: "Selected as flagship project for cultural digitization efforts",
      icon: "Star",
      date: "January 2024"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Ministry Partnerships */}
      <div className="bg-card rounded-xl p-8 spiritual-shadow">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            Government Partnerships
          </h2>
          <p className="text-muted-foreground">
            Official collaborations with Indian government ministries for heritage preservation and cultural tourism development.
          </p>
        </div>

        <div className="space-y-6">
          {collaborations?.map((collab) => (
            <div key={collab?.id} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-200">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <Image 
                    src={collab?.logo} 
                    alt={`${collab?.organization} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-body font-semibold text-foreground">
                        {collab?.organization}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {collab?.department}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      collab?.status === 'Active Partnership' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                    }`}>
                      {collab?.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {collab?.description}
                  </p>
                  <a 
                    href={`mailto:${collab?.contact}`}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200"
                  >
                    {collab?.contact}
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-body font-medium text-foreground mb-3">
                  Active Projects:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {collab?.projects?.map((project, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Official Endorsements */}
      <div className="bg-card rounded-xl p-8 spiritual-shadow">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            Official Recognition
          </h2>
          <p className="text-muted-foreground">
            Awards and endorsements from prestigious organizations and government bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {endorsements?.map((endorsement) => (
            <div key={endorsement?.id} className="text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={endorsement?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-body font-semibold text-foreground mb-2">
                {endorsement?.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {endorsement?.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {endorsement?.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Institutional Contact */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/20">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Building2" size={24} className="text-primary" />
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
            Institutional Partnerships
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interested in partnering with Monastery360 for heritage preservation, cultural tourism, or educational initiatives? We welcome collaborations with government bodies, cultural institutions, and heritage organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partnerships@monastery360.org"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              Partnership Inquiries
            </a>
            <a 
              href="mailto:government@monastery360.org"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
            >
              <Icon name="Building" size={18} className="mr-2" />
              Government Relations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryCollaboration;