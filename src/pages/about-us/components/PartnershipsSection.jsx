import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipsSection = () => {
  const monasteryPartners = [
    {
      id: 1,
      name: "Hemis Monastery",
      location: "Ladakh, India",
      description: "One of the largest and wealthiest monasteries in Ladakh, known for its annual Hemis festival and ancient artifacts.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      partnership: "Digital documentation and virtual tour development"
    },
    {
      id: 2,
      name: "Tashilhunpo Monastery",
      location: "Tibet, China",
      description: "Historic monastery founded in 1447, traditional seat of the Panchen Lama with rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      partnership: "Cultural artifact preservation and AI storytelling integration"
    },
    {
      id: 3,
      name: "Rongbuk Monastery",
      location: "Everest Base Camp, Tibet",
      description: "World's highest monastery at 5,009 meters, offering unique perspectives on mountain monastery life.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      partnership: "Remote accessibility solutions and virtual pilgrimage experiences"
    }
  ];

  const governmentPartners = [
    {
      id: 1,
      name: "Ministry of Tourism",
      role: "Government of India",
      description: "Supporting digital tourism initiatives and heritage preservation projects",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Archaeological Survey of India",
      role: "Heritage Documentation",
      description: "Collaboration on digital archiving and cultural artifact preservation",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Ladakh Tourism Board",
      role: "Regional Partnership",
      description: "Promoting sustainable tourism through digital monastery experiences",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Lama Tenzin Wangyal",
      role: "Head Monk, Hemis Monastery",
      quote: "Monastery360 has helped us share our sacred heritage with the world while maintaining the spiritual essence of our traditions. Their respectful approach to digitization is commendable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Director, Cultural Heritage Division",
      quote: "This innovative platform represents the future of heritage preservation. The team\'s technical expertise combined with cultural sensitivity makes this project exceptional.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Partnerships & Collaborations
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto">
            Working together with monasteries, government institutions, and heritage organizations to create authentic and impactful digital experiences.
          </p>
        </div>

        {/* Monastery Partners */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Monastery Partners
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {monasteryPartners?.map((partner) => (
              <div key={partner?.id} className="breathing-card bg-card rounded-xl overflow-hidden spiritual-shadow">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={partner?.image}
                    alt={partner?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                    {partner?.name}
                  </h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="font-body text-sm text-primary font-medium">
                      {partner?.location}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                    {partner?.description}
                  </p>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="font-caption text-xs text-accent font-medium">
                      Partnership: {partner?.partnership}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Partners */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Government & Institutional Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governmentPartners?.map((partner) => (
              <div key={partner?.id} className="breathing-card bg-card rounded-xl p-6 text-center border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden spiritual-shadow">
                  <Image
                    src={partner?.logo}
                    alt={partner?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                  {partner?.name}
                </h4>
                <p className="font-body text-sm text-primary font-medium mb-3">
                  {partner?.role}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {partner?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            What Our Partners Say
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="breathing-card bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="font-body text-card-foreground mb-4 leading-relaxed italic">
                      "{testimonial?.quote}"
                    </blockquote>
                    <div>
                      <p className="font-heading font-semibold text-card-foreground">
                        {testimonial?.name}
                      </p>
                      <p className="font-body text-sm text-muted-foreground">
                        {testimonial?.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Interested in Partnering With Us?
            </h3>
            <p className="font-body text-lg mb-6 max-w-3xl mx-auto">
              We're always looking to collaborate with monasteries, cultural institutions, and organizations that share our vision of preserving and promoting heritage through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-body font-medium hover:bg-white/90 transition-colors duration-200"
              >
                <Icon name="Mail" size={18} />
                <span>Contact Us</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-lg font-body font-medium hover:bg-white/20 transition-colors duration-200 border border-white/20"
              >
                <Icon name="FileText" size={18} />
                <span>Partnership Proposal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;