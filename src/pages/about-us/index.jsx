import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import SIHSection from './components/SIHSection';
import VisionSection from './components/VisionSection';
import PartnershipsSection from './components/PartnershipsSection';
import TechnicalSection from './components/TechnicalSection';
import ContactSection from './components/ContactSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - Monastery360 | Digital Heritage Preservation Team</title>
        <meta 
          name="description" 
          content="Meet the passionate team behind Monastery360, dedicated to preserving monastery heritage through innovative VR technology, AI cultural storytelling, and artisan marketplace integration." 
        />
        <meta name="keywords" content="monastery heritage, digital preservation, VR technology, cultural team, Smart India Hackathon, heritage conservation" />
        <meta property="og:title" content="About Us - Monastery360 Digital Heritage Team" />
        <meta property="og:description" content="Discover our mission to preserve monastery heritage through cutting-edge technology and cultural partnerships." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <TeamSection />
        <SIHSection />
        <VisionSection />
        <PartnershipsSection />
        <TechnicalSection />
        <ContactSection />
      </main>
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
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
                  <p className="font-caption text-sm opacity-80">Digital Heritage Preservation</p>
                </div>
              </div>
              <p className="font-body text-sm opacity-80 leading-relaxed mb-4">
                Preserving monastery heritage through innovative technology, connecting cultures, and supporting artisan communities worldwide.
              </p>
              <p className="font-caption text-xs opacity-60">
                © {new Date()?.getFullYear()} Monastery360. Built for Smart India Hackathon 2024.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body text-sm">
                <li><a href="/homepage" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="/virtual-tour-experience" className="opacity-80 hover:opacity-100 transition-opacity">Virtual Tours</a></li>
                <li><a href="/interactive-mandala-ai" className="opacity-80 hover:opacity-100 transition-opacity">Mandala AI</a></li>
                <li><a href="/artisan-connect-marketplace" className="opacity-80 hover:opacity-100 transition-opacity">Artisan Connect</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-sm opacity-80">
                <li>hello@monastery360.com</li>
                <li>New Delhi, India</li>
                <li>Leh, Ladakh</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;