import React from 'react';
import Icon from '../../../components/AppIcon';

const SIHSection = () => {
  const problemStatements = [
    {
      id: 1,
      title: "Heritage Accessibility Challenge",
      description:
        "High in the Himalayas, over 200 monasteries preserve timeless scriptures, art, and wisdom. Yet their remote locations make them difficult to access, restricting tourism, cultural learning, and global exposure.",
      icon: "Mountain",
      impact: "Limited global awareness and access to monastery heritage"
    },
    {
      id: 2,
      title: "Vanishing Cultural Heritage",
      description:
        "Murals, manuscripts, oral traditions, and rituals face the threat of fading away without systematic preservation and digital documentation.",
      icon: "BookOpen",
      impact: "Risk of losing irreplaceable spiritual and cultural artifacts"
    },
    {
      id: 3,
      title: "Economic Sustainability Gap",
      description:
        "Local artisan communities near monasteries struggle to showcase and sell their crafts to the world due to lack of direct, reliable digital platforms.",
      icon: "Users",
      impact: "Decline in traditional crafts and limited livelihood opportunities"
    },
    {
      id: 4,
      title: "Superficial Tourist Engagement",
      description:
        "Tourists often experience monasteries as passive visitors without access to immersive tools that explain the deeper meaning, rituals, and philosophies.",
      icon: "GraduationCap",
      impact: "Reduced cultural understanding and appreciation"
    }
  ];

  const solutionApproach = [
    {
      id: 1,
      title: "360° Immersive Sanctuaries",
      description:
        "Step inside monasteries, murals, and courtyards anytime, anywhere with high-fidelity virtual tours, bringing sacred spaces to life globally.",
      technology: "A-Frame, WebXR, React"
    },
    {
      id: 2,
      title: "Mandala AI: Intelligent Discovery",
      description:
        "An AI-powered cultural guide that interprets manuscripts, murals, and symbols—unfolding spiritual insights and hidden connections for users.",
      technology: "Computer Vision, NLP, Knowledge Graph"
    },
    {
      id: 3,
      title: "Artisan Connect Marketplace",
      description:
        "A global marketplace enabling monastery-linked artisans to sell their crafts directly, fostering sustainable livelihoods and cultural continuity.",
      technology: "E-commerce APIs, Stripe/Razorpay"
    },
    {
      id: 4,
      title: "Interactive Map & Smart Guide",
      description:
        "A geo-enabled smart planner with offline maps, cultural routes, and an event calendar that keeps visitors connected to monastery festivals.",
      technology: "Geolocation APIs, Mobile Development"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* SIH Problem Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="font-body font-medium text-primary">Smart India Hackathon 2025</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Problem Statement & Solution
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
            Himalayan monasteries embody centuries of wisdom, art, and spirituality. Yet they remain hidden due to remoteness, limited accessibility, and lack of digital preservation. 
            <strong> Monastery360 </strong> bridges this gap—making monasteries globally accessible through immersive technology, while empowering local communities and safeguarding heritage for generations to come.
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
