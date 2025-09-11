import React from 'react';

const VisionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-6">
          <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
            Preserving the sacred heritage of ancient monasteries through cutting-edge technology,
          </p>
          <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
            making spiritual wisdom accessible to seekers worldwide,
          </p>
          <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
            while empowering local artisan communities to thrive in the digital age.
          </p>
          <p className="font-body text-xl md:text-2xl text-primary font-semibold leading-relaxed">
            Where ancient wisdom meets modern innovation.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;