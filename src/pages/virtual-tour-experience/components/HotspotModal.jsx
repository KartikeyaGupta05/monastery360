import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HotspotModal = ({ hotspot, isOpen, onClose }) => {
  if (!isOpen || !hotspot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative bg-card rounded-xl spiritual-shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-heading font-semibold text-xl text-foreground">
              {hotspot?.title}
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {hotspot?.category}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Image */}
          {hotspot?.image && (
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src={hotspot?.image}
                alt={hotspot?.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
              Cultural Significance
            </h3>
            <p className="font-body text-foreground leading-relaxed whitespace-pre-line">
              {hotspot?.description}
            </p>
          </div>

          {/* Scripture/Quote */}
          {hotspot?.scripture && (
            <div className="mb-6 p-4 bg-muted rounded-lg border-l-4 border-primary">
              <h4 className="font-heading font-medium text-foreground mb-2">
                Sacred Text
              </h4>
              <blockquote className="font-body text-foreground italic">
                "{hotspot?.scripture}"
              </blockquote>
              {hotspot?.scriptureSource && (
                <cite className="font-body text-sm text-muted-foreground mt-2 block">
                  — {hotspot?.scriptureSource}
                </cite>
              )}
            </div>
          )}

          {/* Historical Context */}
          {hotspot?.historicalContext && (
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-foreground mb-3">
                Historical Context
              </h4>
              <p className="font-body text-foreground leading-relaxed">
                {hotspot?.historicalContext}
              </p>
            </div>
          )}

          {/* Symbols/Elements */}
          {hotspot?.symbols && hotspot?.symbols?.length > 0 && (
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-foreground mb-3">
                Symbolic Elements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hotspot?.symbols?.map((symbol, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Star" size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h5 className="font-body font-medium text-sm text-foreground">
                        {symbol?.name}
                      </h5>
                      <p className="font-body text-xs text-muted-foreground mt-1">
                        {symbol?.meaning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audio Narration */}
          {hotspot?.audioUrl && (
            <div className="mb-6 p-4 bg-accent/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Headphones" size={20} className="text-accent" />
                <div>
                  <h4 className="font-body font-medium text-foreground">
                    Audio Narration Available
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Listen to detailed explanation
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Play"
                  iconPosition="left"
                >
                  Play
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={16} />
              <span>Est. reading time: {hotspot?.readingTime || '3'} min</span>
            </div>
            <Button
              variant="primary"
              onClick={onClose}
            >
              Continue Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotspotModal;