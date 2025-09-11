import React from 'react';

import Button from '../../../components/ui/Button';

const TourControls = ({ 
  onZoomIn, 
  onZoomOut, 
  onResetView, 
  onToggleAutoRotate,
  autoRotateEnabled,
  zoomLevel 
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2">
      {/* Zoom Controls */}
      <div className="bg-card/95 backdrop-blur-md rounded-lg spiritual-shadow p-2">
        <div className="flex flex-col space-y-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onZoomIn}
            disabled={zoomLevel >= 3}
            iconName="ZoomIn"
          />
          <div className="w-8 h-16 bg-muted rounded-sm relative mx-auto">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-primary rounded-sm transition-all duration-200"
              style={{ height: `${(zoomLevel / 3) * 100}%` }}
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onZoomOut}
            disabled={zoomLevel <= 0.5}
            iconName="ZoomOut"
          />
        </div>
      </div>

      {/* View Controls */}
      <div className="bg-card/95 backdrop-blur-md rounded-lg spiritual-shadow p-2">
        <div className="flex flex-col space-y-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onResetView}
            iconName="RotateCcw"
          />
          <Button
            variant={autoRotateEnabled ? "default" : "ghost"}
            size="icon"
            onClick={onToggleAutoRotate}
            iconName="RotateCw"
          />
        </div>
      </div>
    </div>
  );
};

export default TourControls;