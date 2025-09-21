import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

// 1. Narrated Walkthroughs Section
const NarratedWalkthroughsSection = () => {
  return (
    <section className="py-20 bg-background">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
        Narrated Walkthroughs
      </h2>
      <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
        Journey beyond sight. Let the authentic voices of resident monks and cultural historians guide you through sacred halls, revealing the hidden meanings behind the art and rituals.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className="space-y-8">
        <div>
          <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
            An Authentic Auditory Pilgrimage
          </h3>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Choose a guided journey in English, Hindi, Nepali, or local Sikkimese dialects. Each narration is more than a tour; it's a collection of stories, chants, and wisdom passed down through generations, offering a rare glimpse into the monastery's living soul.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Globe" size={16} className="text-primary" />
            </div>
            <span className="font-body text-foreground">Multi-language narrations with authentic pronunciations</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-primary" />
            </div>
            <span className="font-body text-foreground">Voiced by the monks and historians who live the culture</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="BookOpen" size={16} className="text-primary" />
            </div>
            <span className="font-body text-foreground">Context-rich stories about art, philosophy, and daily rituals</span>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link to="/virtual-tour-experience">
            <Button 
              variant="default" 
              size="lg"
              iconName="Headphones"
              iconPosition="right"
              className="px-8"
            >
              Begin Your Audio Journey
            </Button>
          </Link>
        </div>
      </div>

      {/* Preview Image/Video */}
      <div className="relative group">
        {/* Preview Image/Video */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl spiritual-shadow-lg">
              <Image
                src="/assets/images/fimg5.jpg"
                alt="Monk narrating monastery tour"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Audio Wave Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Icon name="Volume2" size={32} className="text-primary" />
                </div>
              </div>

              {/* Language Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-body font-semibold text-sm">
                Multi-Language
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>
  );
};

// 2. Interactive Map Section
const InteractiveMapSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive Monastery Map
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all 200+ monasteries across Sikkim with geo-tagged locations, 
            travel routes, and integrated transport services for seamless exploration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview Image/Video */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl spiritual-shadow-lg">
              <Image
                src="/assets/images/fimg1.png"
                alt="Interactive map of Sikkim monasteries"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Map Pin Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
              </div>

              {/* GPS Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-body font-semibold text-sm">
                GPS Enabled
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Smart Navigation & Planning
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Plan your spiritual journey with precise GPS coordinates, optimal travel routes, 
                and real-time integration with local transport services. Discover nearby attractions, 
                accommodation, and dining options for each monastery location.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Navigation" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">GPS-guided routes with real-time traffic</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Car" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Local transport booking integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Multi-day itinerary planning</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/interactive-map">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Map"
                  iconPosition="right"
                  className="px-8"
                >
                  Explore Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Digital Archives Section
const DigitalArchivesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Digital Sacred Archives
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Access thousands of digitally preserved manuscripts, ancient murals, and historical documents 
            with AI-powered search capabilities and detailed categorization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                AI-Powered Cultural Discovery
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Explore centuries-old manuscripts, intricate murals, and rare historical documents 
                through advanced AI search. Our intelligent system categorizes content by era, 
                theme, and cultural significance, making ancient wisdom accessible to modern seekers.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Search" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">AI-powered semantic search engine</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="FileText" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">5000+ digitized manuscripts & documents</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Filter" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Smart categorization by era & theme</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/digital-archives">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="right"
                  className="px-8"
                >
                  Browse Archives
                </Button>
              </Link>
            </div>
          </div>

          {/* Preview Image/Video */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl spiritual-shadow-lg">
              <Image
                src="/assets/images/fimg2.png"
                alt="Ancient manuscript being digitally archived"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Search Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Icon name="Archive" size={32} className="text-primary" />
                </div>
              </div>

              {/* AI Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-body font-semibold text-sm">
                AI Powered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Smart Audio Guide Section
const SmartAudioGuideSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Smart Audio Guide App
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience location-based audio guidance using Bluetooth beacons and GPS technology. 
            Works offline in remote monastery locations for uninterrupted spiritual exploration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview Image/Video */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl spiritual-shadow-lg">
              <Image
                src="/assets/images/fimg6.jpg"
                alt="Tourist using smart audio guide in monastery"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Bluetooth Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Icon name="Bluetooth" size={32} className="text-primary" />
                </div>
              </div>

              {/* Offline Badge */}
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-body font-semibold text-sm">
                Offline Ready
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Location-Based Intelligent Guidance
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Automatically triggered audio content based on your precise location using Bluetooth 
                beacons and GPS. Download content for offline use, ensuring you never miss important 
                cultural insights even in remote mountain monasteries without internet connectivity.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Wifi" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Bluetooth beacon & GPS integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Download" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Offline mode for remote locations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Headphones" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Auto-triggered contextual audio</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/audio-guide">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Smartphone"
                  iconPosition="right"
                  className="px-8"
                >
                  Download App
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Cultural Calendar Section
const CulturalCalendarSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cultural Calendar & Events
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with sacred festivals, rituals, and ceremonies happening across 
            Sikkim's monasteries. Book your participation in authentic cultural experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Sacred Festivals & Rituals
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Never miss important Buddhist festivals, meditation retreats, or traditional ceremonies. 
                Our calendar syncs with monastery schedules and offers advance booking for special 
                events, ensuring you can participate in authentic spiritual experiences.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Real-time festival & ceremony updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Ticket" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Event booking & participation options</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Bell" size={16} className="text-primary" />
                </div>
                <span className="font-body text-foreground">Personalized event notifications</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/cultural-calendar">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="CalendarDays"
                  iconPosition="right"
                  className="px-8"
                >
                  View Calendar
                </Button>
              </Link>
            </div>
          </div>

          {/* Preview Image/Video */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl spiritual-shadow-lg">
              <Image
                src="/assets/images/fimg4.jpg"
                alt="Buddhist festival celebration in Sikkim monastery"
                className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Calendar Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Icon name="CalendarDays" size={32} className="text-primary" />
                </div>
              </div>

              {/* Live Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-body font-semibold text-sm">
                Live Events
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export all sections for easy import
export {
  NarratedWalkthroughsSection,
  InteractiveMapSection,
  DigitalArchivesSection,
  SmartAudioGuideSection,
  CulturalCalendarSection
};