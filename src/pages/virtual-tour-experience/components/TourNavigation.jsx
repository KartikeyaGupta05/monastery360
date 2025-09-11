import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TourNavigation = ({ 
  currentLocation, 
  locations, 
  onLocationChange, 
  isFullscreen, 
  onToggleFullscreen,
  audioEnabled,
  onToggleAudio,
  showHelp,
  onToggleHelp
}) => {
  return (
    <div className="fixed top-20 left-4 z-40 bg-card/95 backdrop-blur-md rounded-xl spiritual-shadow p-4 max-w-xs">
      {/* Current Location */}
      <div className="mb-4">
        <h3 className="font-heading font-semibold text-sm text-foreground mb-1">
          Current Location
        </h3>
        <p className="font-body text-xs text-muted-foreground">
          {currentLocation?.name}
        </p>
      </div>
      {/* Location List */}
      <div className="mb-4">
        <h4 className="font-body font-medium text-xs text-foreground mb-2 uppercase tracking-wide">
          Tour Locations
        </h4>
        <div className="space-y-1">
          {locations?.map((location) => (
            <button
              key={location?.id}
              onClick={() => onLocationChange(location)}
              className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded-lg text-left transition-colors duration-200 ${
                currentLocation?.id === location?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${
                location?.visited ? 'bg-success' : 'bg-border'
              }`} />
              <span className="font-body text-xs flex-1">{location?.name}</span>
              {currentLocation?.id === location?.id && (
                <Icon name="MapPin" size={12} />
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Controls */}
      <div className="space-y-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleFullscreen}
          iconName={isFullscreen ? "Minimize" : "Maximize"}
          iconPosition="left"
          fullWidth
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onToggleAudio}
          iconName={audioEnabled ? "VolumeX" : "Volume2"}
          iconPosition="left"
          fullWidth
        >
          {audioEnabled ? 'Mute Audio' : 'Enable Audio'}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleHelp}
          iconName="HelpCircle"
          iconPosition="left"
          fullWidth
        >
          {showHelp ? 'Hide Help' : 'Show Help'}
        </Button>
      </div>
    </div>
  );
};

export default TourNavigation;