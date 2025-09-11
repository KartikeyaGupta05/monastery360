import React from 'react';
import Icon from '../../../components/AppIcon';

const VisionSection = () => {
  const visionPoints = [
    {
      id: 1,
      title: "Cultural Preservation",
      description: "Safeguarding monastery heritage through advanced digital documentation and immersive storytelling technologies.",
      icon: "Shield",
      color: "primary"
    },
    {
      id: 2,
      title: "Universal Accessibility",
      description: "Breaking geographical barriers to make monastery experiences available to everyone, regardless of physical limitations.",
      icon: "Globe",
      color: "accent"
    },
    {
      id: 3,
      title: "Artisan Empowerment",
      description: "Creating sustainable economic opportunities for traditional craftspeople through global marketplace integration.",
      icon: "Users",
      color: "secondary"
    },
    {
      id: 4,
      title: "Educational Innovation",
      description: "Transforming cultural education through interactive AI-powered learning experiences and virtual exploration.",
      icon: "GraduationCap",
      color: "success"
    }
  ];

  const coreValues = [
    {
      id: 1,
      value: "Authenticity",
      description: "Maintaining cultural accuracy and respect in all digital representations"
    },
    {
      id: 2,
      value: "Innovation",
      description: "Leveraging cutting-edge technology to solve heritage preservation challenges"
    },
    {
      id: 3,
      value: "Inclusivity",
      description: "Ensuring our platform serves diverse global audiences and communities"
    },
    {
      id: 4,
      value: "Sustainability",
      description: "Building long-term solutions that benefit both heritage and local economies"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision Statement */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Vision & Values
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            We envision a world where ancient monastery wisdom and cultural heritage are preserved, accessible, and celebrated through innovative digital experiences that bridge traditional knowledge with modern technology.
          </p>
          <div className="bg-card rounded-2xl p-8 spiritual-shadow max-w-4xl mx-auto">
            <blockquote className="font-heading text-xl md:text-2xl font-medium text-card-foreground italic text-center">
              "Preserving the past, inspiring the present, and building bridges to the future through technology and cultural understanding."
            </blockquote>
          </div>
        </div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionPoints?.map((point) => (
            <div key={point?.id} className="breathing-card bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-${point?.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={point?.icon} size={24} className={`text-${point?.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">
                    {point?.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {point?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="bg-card rounded-2xl p-8 spiritual-shadow">
          <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-8 text-center">
            Core Values That Guide Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues?.map((item) => (
              <div key={item?.id} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-primary">
                    {item?.value?.charAt(0)}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                  {item?.value}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="font-body text-lg leading-relaxed max-w-4xl mx-auto">
              To democratize access to monastery heritage through innovative digital experiences, preserve cultural treasures for future generations, and create sustainable economic opportunities for traditional artisan communities while fostering global understanding and appreciation of ancient wisdom traditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;