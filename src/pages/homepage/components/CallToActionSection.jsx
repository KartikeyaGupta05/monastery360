import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            Preserve Heritage,
            <span className="block">Empower Communities</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join our mission to safeguard ancient wisdom for future generations while 
            creating sustainable opportunities for artisan communities worldwide.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="Camera" size={24} className="text-white" />
            </div>
            <div className="font-heading text-3xl font-bold text-white mb-1">50+</div>
            <div className="font-body text-white/80 text-sm">Virtual Tours</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <div className="font-heading text-3xl font-bold text-white mb-1">200+</div>
            <div className="font-body text-white/80 text-sm">Artisans Supported</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="Globe" size={24} className="text-white" />
            </div>
            <div className="font-heading text-3xl font-bold text-white mb-1">25+</div>
            <div className="font-body text-white/80 text-sm">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <div className="font-heading text-3xl font-bold text-white mb-1">10K+</div>
            <div className="font-body text-white/80 text-sm">Lives Touched</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link to="/virtual-tour-experience">
            <Button 
              variant="outline" 
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary"
            >
              Start Your Journey
            </Button>
          </Link>
          <Link to="/artisan-connect-marketplace">
            <Button 
              variant="secondary" 
              size="lg"
              iconName="ShoppingBag"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
            >
              Support Artisans
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant="ghost" 
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white hover:bg-white/10"
            >
              Get Involved
            </Button>
          </Link>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Compass" size={32} className="text-white mr-3" />
            <h3 className="font-heading text-2xl font-bold text-white">
              Our Commitment
            </h3>
          </div>
          <p className="font-body text-lg text-white/90 leading-relaxed">
            Every virtual tour preserves a piece of history. Every artisan purchase 
            sustains a family. Every interaction bridges ancient wisdom with modern hearts. 
            Together, we're not just exploring heritage – we're ensuring it thrives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;