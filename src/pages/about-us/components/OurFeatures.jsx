import React, { useState } from 'react';
import { ChevronRight, Eye, Users, Brain, MapPin, Archive, Compass, Network, MessageCircle, Shield } from 'lucide-react';

const OurFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Virtual Tours",
      subtitle: "360° Immersive Experience",
      description: "360° panoramic views of monastery interiors and surroundings with narrated walkthroughs in multiple languages, bringing you closer to sacred spaces from anywhere in the world.",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Narrated Walkthroughs",
      subtitle: "Multi-Language Storytelling",
      description: "Expert-guided audio narratives in multiple regional and international languages, sharing authentic monastery stories, spiritual teachings, and cultural significance with global audiences.",
      gradient: "from-rose-600 to-pink-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Interactive Map",
      subtitle: "Smart Navigation System",
      description: "Geo-tagged monastery locations with optimized travel routes and nearby attractions, seamlessly integrated with local transport and tourism services for complete journey planning.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Archive className="w-8 h-8" />,
      title: "Digital Archives",
      subtitle: "Preserved Cultural Heritage",
      description: "Comprehensive digital collection of scanned manuscripts, ancient murals, and historical documents with AI-powered search and intelligent categorization for easy discovery.",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Search",
      subtitle: "Intelligent Content Discovery",
      description: "Advanced artificial intelligence algorithms for smart search and automatic categorization of cultural artifacts, manuscripts, and historical content for enhanced research capabilities.",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Artisan Connect",
      subtitle: "Traditional Craft Marketplace",
      description: "Direct connection platform linking visitors with local monastery artisans, traditional craftspeople, and cultural creators, promoting authentic heritage products and sustainable livelihoods.",
      gradient: "from-amber-600 to-orange-600"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Smart Audio Guide App",
      subtitle: "Location-Based Storytelling",
      description: "Advanced location-based audio guides using Bluetooth beacons or GPS technology, featuring offline mode capabilities for remote monastery areas without internet connectivity.",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Cultural Calendar",
      subtitle: "Living Heritage Events",
      description: "Complete events, festivals, and rituals schedule with integrated booking and participation options for tourists seeking authentic cultural immersion experiences.",
      gradient: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
            Our Revolutionary Features
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Monastery360 leverages cutting-edge technology to create immersive digital experiences that preserve cultural heritage while making ancient monastery wisdom accessible to global audiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => setActiveFeature(index)}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                {feature.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-amber-600 mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {feature.description}
                </p>
                
                {/* Learn More Arrow */}
                <div className="flex items-center text-sm font-medium text-amber-600 group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Call-to-Action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
            Interested in Partnering With Us?
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            We're always looking to collaborate with monasteries, cultural institutions, and organizations that share our vision of preserving and promoting heritage through technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-amber-600 font-medium rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-amber-600 transition-colors flex items-center justify-center">
              <Shield className="w-5 h-5 mr-2" />
              Partnership Proposal
            </button>
          </div>
        </div>

        {/* Feature Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>200+</div>
            <div className="text-sm text-gray-600">Monasteries Connected</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>8</div>
            <div className="text-sm text-gray-600">Core Features</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>AI</div>
            <div className="text-sm text-gray-600">Powered Intelligence</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>∞</div>
            <div className="text-sm text-gray-600">Cultural Preservation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;