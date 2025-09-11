import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MinistryCollaborationSection = () => {
  const partnerships = [
    {
      id: 1,
      name: "Ministry of Tourism",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Official partnership for heritage tourism promotion"
    },
    {
      id: 2,
      name: "Archaeological Survey",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Heritage site documentation and preservation"
    },
    {
      id: 3,
      name: "Cultural Ministry",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Cultural authenticity and artisan certification"
    },
    {
      id: 4,
      name: "Digital India",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Technology innovation and digital accessibility"
    }
  ];

  const certifications = [
    {
      icon: "Shield",
      title: "Heritage Certified",
      description: "Officially recognized heritage documentation"
    },
    {
      icon: "Award",
      title: "Authenticity Verified",
      description: "Verified artisan products and cultural accuracy"
    },
    {
      icon: "CheckCircle",
      title: "Government Approved",
      description: "Approved by relevant cultural authorities"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted Partnerships
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Working with government bodies and cultural institutions to ensure 
            authenticity, preservation standards, and sustainable heritage tourism.
          </p>
        </div>

        {/* Government Partnerships */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Government Collaborations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships?.map((partner) => (
              <div 
                key={partner?.id}
                className="breathing-card bg-card rounded-xl p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={partner?.logo}
                    alt={`${partner?.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {partner?.name}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {partner?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Trust & Authenticity Signals
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} className="text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {cert?.title}
                </h4>
                <p className="font-body text-muted-foreground">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Icon name="Trophy" size={32} className="text-white" />
            <h3 className="font-heading text-2xl font-bold text-white">
              Smart India Hackathon 2024
            </h3>
          </div>
          <p className="font-body text-white/90 text-lg max-w-2xl mx-auto">
            Developed as part of the Smart India Hackathon initiative to promote 
            digital heritage preservation and sustainable cultural tourism through innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MinistryCollaborationSection;