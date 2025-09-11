import React from 'react';
import Icon from '../../../components/AppIcon';

const SIHSection = () => {
  const problemStatements = [
    {
      id: 1,
      title: "Heritage Accessibility Challenge",
      description: "Remote monasteries in Himalayan regions are difficult to access for tourists and researchers, limiting cultural exchange and heritage appreciation.",
      icon: "Mountain",
      impact: "Limited global awareness of monastery heritage"
    },
    {
      id: 2,
      title: "Cultural Preservation Crisis",
      description: "Ancient monastery art, manuscripts, and traditions are at risk of being lost without proper digital documentation and preservation methods.",
      icon: "BookOpen",
      impact: "Potential loss of irreplaceable cultural artifacts"
    },
    {
      id: 3,
      title: "Economic Sustainability",
      description: "Local artisan communities around monasteries lack platforms to showcase and sell their traditional crafts to global audiences.",
      icon: "Users",
      impact: "Declining traditional craft practices and livelihoods"
    },
    {
      id: 4,
      title: "Educational Gap",
      description: "Limited interactive educational resources about monastery culture, philosophy, and artistic traditions for global learners.",
      icon: "GraduationCap",
      impact: "Reduced cultural understanding and appreciation"
    }
  ];

  const solutionApproach = [
    {
      id: 1,
      title: "360° Virtual Tours",
      description: "Immersive VR experiences that allow users to explore monastery interiors, courtyards, and sacred spaces from anywhere in the world.",
      technology: "React 360, Three.js, WebXR"
    },
    {
      id: 2,
      title: "AI Cultural Storytelling",
      description: "Interactive AI system that explains cultural symbols, artwork meanings, and historical context through engaging visual interfaces.",
      technology: "Computer Vision, NLP, React"
    },
    {
      id: 3,
      title: "Artisan Marketplace",
      description: "Digital platform connecting monastery-linked artisans with global customers, featuring authentic crafts and their cultural stories.",
      technology: "E-commerce Integration, Payment Gateway"
    },
    {
      id: 4,
      title: "Heritage Documentation",
      description: "Comprehensive digital archive of monastery artifacts, manuscripts, and traditions with searchable metadata and cultural context.",
      technology: "Database Design, Content Management"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* SIH Problem Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="font-body font-medium text-primary">Smart India Hackathon 2024</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Problem Statement & Solution
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
            Our project addresses the critical challenge of preserving and promoting monastery heritage while supporting local communities through innovative digital solutions.
          </p>
        </div>

        {/* Problem Challenges */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Key Challenges Identified
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemStatements?.map((problem) => (
              <div key={problem?.id} className="breathing-card bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={problem?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                      {problem?.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
                      {problem?.description}
                    </p>
                    <div className="bg-warning/10 rounded-lg px-3 py-2">
                      <p className="font-caption text-xs text-warning font-medium">
                        Impact: {problem?.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Approach */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Our Technical Solution
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {solutionApproach?.map((solution) => (
              <div key={solution?.id} className="breathing-card bg-card rounded-xl p-6 border border-border">
                <div className="mb-4">
                  <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                    {solution?.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                    {solution?.description}
                  </p>
                  <div className="bg-accent/10 rounded-lg px-3 py-2">
                    <p className="font-caption text-xs text-accent font-medium">
                      Tech Stack: {solution?.technology}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Expected Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={32} className="text-success" />
                </div>
                <h4 className="font-body font-semibold text-foreground mb-2">Global Reach</h4>
                <p className="font-caption text-sm text-muted-foreground">
                  Making monastery heritage accessible to millions worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h4 className="font-body font-semibold text-foreground mb-2">Heritage Preservation</h4>
                <p className="font-caption text-sm text-muted-foreground">
                  Digital archiving of irreplaceable cultural artifacts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-secondary" />
                </div>
                <h4 className="font-body font-semibold text-foreground mb-2">Economic Growth</h4>
                <p className="font-caption text-sm text-muted-foreground">
                  Supporting local artisan communities and cultural tourism
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIHSection;