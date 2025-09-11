import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ locations, currentLocationId, visitedHotspots, totalHotspots }) => {
  const visitedLocations = locations?.filter(loc => loc?.visited)?.length;
  const totalLocations = locations?.length;
  const overallProgress = ((visitedLocations / totalLocations) + (visitedHotspots / totalHotspots)) / 2 * 100;

  return (
    <div className="fixed top-20 right-4 z-40 bg-card/95 backdrop-blur-md rounded-xl spiritual-shadow p-4 min-w-[200px]">
      {/* Overall Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-semibold text-sm text-foreground">
            Tour Progress
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
            {Math.round(overallProgress)}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary rounded-full h-2 transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>
      {/* Location Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-body text-xs text-muted-foreground">Locations</span>
          <span className="font-mono text-xs text-muted-foreground">
            {visitedLocations}/{totalLocations}
          </span>
        </div>
        <div className="flex space-x-1">
          {locations?.map((location) => (
            <div
              key={location?.id}
              className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                location?.visited 
                  ? 'bg-success' 
                  : location?.id === currentLocationId 
                    ? 'bg-primary' :'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Hotspot Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-body text-xs text-muted-foreground">Cultural Points</span>
          <span className="font-mono text-xs text-muted-foreground">
            {visitedHotspots}/{totalHotspots}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-1">
          <div 
            className="bg-secondary rounded-full h-1 transition-all duration-500"
            style={{ width: `${(visitedHotspots / totalHotspots) * 100}%` }}
          />
        </div>
      </div>
      {/* Achievements */}
      <div className="space-y-2">
        <div className={`flex items-center space-x-2 text-xs ${
          visitedLocations >= totalLocations ? 'text-success' : 'text-muted-foreground'
        }`}>
          <Icon 
            name={visitedLocations >= totalLocations ? "CheckCircle" : "Circle"} 
            size={14} 
          />
          <span>Explorer</span>
        </div>
        <div className={`flex items-center space-x-2 text-xs ${
          visitedHotspots >= totalHotspots ? 'text-success' : 'text-muted-foreground'
        }`}>
          <Icon 
            name={visitedHotspots >= totalHotspots ? "CheckCircle" : "Circle"} 
            size={14} 
          />
          <span>Cultural Scholar</span>
        </div>
        <div className={`flex items-center space-x-2 text-xs ${
          overallProgress >= 100 ? 'text-success' : 'text-muted-foreground'
        }`}>
          <Icon 
            name={overallProgress >= 100 ? "CheckCircle" : "Circle"} 
            size={14} 
          />
          <span>Master Visitor</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;