import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TourPreviewSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            360° Virtual Experience
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Step inside ancient monasteries from anywhere in the world. Explore sacred halls, 
            discover hidden murals, and immerse yourself in centuries of spiritual heritage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview Image/Video */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl spiritual-shadow-lg">
              <Link to="/vr-360">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="360 degree monastery tour preview"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Icon name="Play" size={32} className="text-primary ml-1" />
                </div>
              </div>

              {/* 360° Badge */}
              
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-body font-semibold text-sm">
                360° Tour
              </div>
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Immersive Sacred Spaces
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Navigate through prayer halls, meditation chambers, and ancient libraries. 
                Click on interactive hotspots to uncover the stories behind sacred artifacts, 
                ancient manuscripts, and intricate architectural details.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MousePointer" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Interactive hotspots with cultural insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Volume2" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Guided audio narration by monks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Smartphone" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">VR-ready for immersive experience</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/virtual-tour-experience">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="px-8"
                >
                  Start Virtual Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPreviewSection;