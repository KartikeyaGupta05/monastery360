import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyMattersSection = () => {
  const reasons = [
    {
      id: 1,
      icon: "Shield",
      title: "Heritage Preservation",
      description: "Digitally safeguarding ancient monasteries and their cultural treasures for future generations through immersive documentation and virtual archiving.",
      color: "bg-success/10 text-success"
    },
    {
      id: 2,
      icon: "MapPin",
      title: "Cultural Tourism",
      description: "Promoting sustainable tourism by offering virtual previews that inspire respectful physical visits while reducing environmental impact on sacred sites.",
      color: "bg-accent/10 text-accent"
    },
    {
      id: 3,
      icon: "Users",
      title: "Universal Accessibility",
      description: "Breaking geographical and physical barriers to make monastery heritage accessible to elderly, disabled, and remote communities worldwide.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      id: 4,
      icon: "Briefcase",
      title: "Artisan Empowerment",
      description: "Creating sustainable livelihoods for local craftspeople by connecting them with global audiences seeking authentic monastery-linked products.",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Monastery360 Matters
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform addresses critical challenges in heritage preservation, 
            cultural accessibility, and community empowerment through innovative technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons?.map((reason) => (
            <div 
              key={reason?.id}
              className="breathing-card bg-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${reason?.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={reason?.icon} size={28} />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {reason?.title}
              </h3>
              
              <p className="font-body text-muted-foreground leading-relaxed">
                {reason?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-primary mb-2">50+</div>
            <div className="font-body text-muted-foreground">Monasteries Documented</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-secondary mb-2">10K+</div>
            <div className="font-body text-muted-foreground">Virtual Visitors</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-accent mb-2">200+</div>
            <div className="font-body text-muted-foreground">Artisans Supported</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-success mb-2">25+</div>
            <div className="font-body text-muted-foreground">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;