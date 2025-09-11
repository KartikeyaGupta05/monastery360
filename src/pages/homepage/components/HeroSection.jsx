import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/videos/monastery.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Sacred
            <span className="block text-secondary">Heritage</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience ancient monasteries through immersive 360° virtual tours,
            AI-powered cultural storytelling, and connect with authentic
            artisans preserving sacred traditions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/virtual-tour-experience">
            <Button
              variant="default"
              size="lg"
              iconName="Camera"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
            >
              Explore Virtual Tours
            </Button>
          </Link>
          <Link to="/artisan-connect-marketplace">
            <Button
              variant="outline"
              size="lg"
              iconName="ShoppingBag"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary"
            >
              Support Artisans
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
