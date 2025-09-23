import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import TourPreviewSection from './components/TourPreviewSection';
import WhyMattersSection from './components/WhyMattersSection';
import InteractiveMuralSection from './components/InteractiveMuralSection';
import MinistryCollaborationSection from './components/MinistryCollaborationSection';
import CallToActionSection from './components/CallToActionSection';
import { 
  NarratedWalkthroughsSection,
  InteractiveMapSection,
  DigitalArchivesSection,
  SmartAudioGuideSection,
  CulturalCalendarSection 
} from './components/FeatureSections';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <TourPreviewSection />
        <WhyMattersSection />
        <InteractiveMuralSection />
        <NarratedWalkthroughsSection />
        <InteractiveMapSection />
        <DigitalArchivesSection />
        <SmartAudioGuideSection />
        <CulturalCalendarSection />
        <MinistryCollaborationSection />
        <CallToActionSection />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-primary-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl">Monastery360</h3>
                  <p className="font-caption text-sm opacity-80">Digital Heritage Platform</p>
                </div>
              </div>
              <p className="font-body text-background/80 leading-relaxed max-w-md">
                Preserving sacred heritage through immersive technology while empowering 
                artisan communities and promoting sustainable cultural tourism.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Explore</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/virtual-tour-experience" className="text-background/80 hover:text-background transition-colors">Virtual Tours</a></li>
                <li><a href="/interactive-mandala-ai" className="text-background/80 hover:text-background transition-colors">Mandala AI</a></li>
                <li><a href="/artisan-connect-marketplace" className="text-background/80 hover:text-background transition-colors">Artisan Connect</a></li>
                <li><a href="/" className="text-background/80 hover:text-background transition-colors">Narrated Walkthrough</a></li>
                <li><a href="/events" className="text-background/80 hover:text-background transition-colors">Cultural Events</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Connect</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/contact" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="/about-us" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Community</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-background/60 text-sm mb-4 md:mb-0">
              © {new Date()?.getFullYear()} Monastery360. Built for Smart India Hackathon 2025.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;