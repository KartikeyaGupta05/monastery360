import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HelpOverlay = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const helpItems = [
    {
      icon: "MousePointer",
      title: "Navigation",
      description: "Click and drag to look around the monastery. Use mouse wheel to zoom in/out."
    },
    {
      icon: "Target",
      title: "Hotspots",
      description: "Look for glowing markers throughout the tour. Click them to learn about cultural artifacts and stories."
    },
    {
      icon: "Move",
      title: "Movement",
      description: "Use the location panel on the left to jump between different areas of the monastery."
    },
    {
      icon: "Maximize",
      title: "Fullscreen",
      description: "Toggle fullscreen mode for a more immersive experience using the controls panel."
    },
    {
      icon: "Volume2",
      title: "Audio",
      description: "Enable audio narration for guided explanations of cultural elements and history."
    },
    {
      icon: "Smartphone",
      title: "Mobile",
      description: "On mobile devices, use touch gestures to navigate and tap hotspots for information."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Help Content */}
      <div className="relative bg-card rounded-xl spiritual-shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-heading font-semibold text-xl text-foreground">
              Tour Guide
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Learn how to navigate the virtual monastery experience
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpItems?.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item?.icon} size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-1">
                    {item?.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <div className="flex items-start space-x-3">
              <Icon name="Lightbulb" size={20} className="text-accent mt-0.5" />
              <div>
                <h3 className="font-body font-semibold text-foreground mb-2">
                  Pro Tips
                </h3>
                <ul className="font-body text-sm text-muted-foreground space-y-1">
                  <li>• Take your time to explore each location thoroughly</li>
                  <li>• Enable audio for the most immersive experience</li>
                  <li>• Visit all hotspots to unlock the complete cultural story</li>
                  <li>• Use fullscreen mode for better immersion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border">
          <Button
            variant="primary"
            onClick={onClose}
            fullWidth
          >
            Start Exploring
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpOverlay;