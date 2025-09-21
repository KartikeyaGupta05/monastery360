import React from 'react';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Ancient monastery in mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
          Preserving Heritage,
          <span className="block text-primary">Connecting Cultures</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          We are a passionate team of developers, heritage enthusiasts, and cultural preservationists dedicated to making monastery heritage accessible to the world through innovative technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="font-body text-white font-medium">Founded: 2025</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="font-body text-white font-medium">Team: 6 Members</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <span className="font-body text-white font-medium">Mission: Heritage Preservation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;