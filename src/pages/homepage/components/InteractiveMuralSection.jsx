import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const InteractiveMuralSection = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      x: 25,
      y: 30,
      title: "Lotus Symbol",
      description: "The lotus represents purity and enlightenment, rising from muddy waters to bloom in pristine beauty.",
      scripture: "Just as a lotus flower is born in water, grows in water and rises out of water to stand above it unsoiled, so I, born in the world, raised in the world having overcome the world, live unsoiled by the world."
    },
    {
      id: 2,
      x: 60,
      y: 45,
      title: "Dharma Wheel",
      description: "The eight-spoked wheel symbolizes the Noble Eightfold Path leading to liberation from suffering.",
      scripture: "Better than a thousand hollow words, is one word that brings peace."
    },
    {
      id: 3,
      x: 80,
      y: 25,
      title: "Endless Knot",
      description: "Represents the interconnectedness of all phenomena and the union of wisdom and compassion.",
      scripture: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive Mandala AI
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the hidden meanings behind sacred symbols. Click on the hotspots 
            to unlock ancient wisdom and cultural insights powered by AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Mural */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl spiritual-shadow-lg">
              <Image
                src="/assets/images/Virtual-tour/image5.png"
                alt="Ancient monastery mural with interactive hotspots"
                className="w-full h-96 md:h-[500px] object-cover"
              />
              
              {/* Hotspots */}
              {hotspots?.map((hotspot) => (
                <button
                  key={hotspot?.id}
                  className="absolute w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 animate-pulse hover:animate-none"
                  style={{ left: `${hotspot?.x}%`, top: `${hotspot?.y}%` }}
                  onClick={() => setActiveHotspot(activeHotspot === hotspot?.id ? null : hotspot?.id)}
                  aria-label={`Learn about ${hotspot?.title}`}
                >
                  <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Plus" size={16} className="text-primary-foreground" />
                  </div>
                </button>
              ))}

              {/* AI Badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-body font-semibold text-sm flex items-center space-x-2">
                <Icon name="Sparkles" size={14} />
                <span>AI Powered</span>
              </div>
            </div>

            {/* Hotspot Info Panel */}
            {activeHotspot && (
              <div className="absolute inset-x-0 bottom-0 bg-card/95 backdrop-blur-sm border border-border rounded-b-2xl p-6 spiritual-shadow">
                {(() => {
                  const hotspot = hotspots?.find(h => h?.id === activeHotspot);
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-heading text-lg font-bold text-yellow-400">
                          {hotspot?.title}
                        </h4>
                        <button
                          onClick={() => setActiveHotspot(null)}
                          className="w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
                        >
                          <Icon name="X" size={14} className="text-muted-foreground" />
                        </button>
                      </div>
                      <p className="font-body text-white text-sm mb-3">
                        {hotspot?.description}
                      </p>
                      <blockquote className="font-body text-sm text-orange-300 italic border-l-2 border-primary pl-3">
                        "{hotspot?.scripture}"
                      </blockquote>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                AI-Powered Cultural Discovery
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Our advanced AI analyzes ancient symbols, murals, and artifacts to provide 
                instant cultural context, historical significance, and spiritual meanings. 
                Transform your exploration into a guided learning experience.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Brain" size={16} className="text-accent" />
                </div>
                <span className="font-body text-foreground">Instant symbol recognition and interpretation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="BookOpen" size={16} className="text-accent" />
                </div>
                <span className="font-body text-foreground">Ancient scripture and wisdom quotes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Globe" size={16} className="text-accent" />
                </div>
                <span className="font-body text-foreground">Multi-cultural context and comparisons</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/interactive-mandala-ai">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Sparkles"
                  iconPosition="right"
                  className="px-8"
                >
                  Try Mandala AI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMuralSection;