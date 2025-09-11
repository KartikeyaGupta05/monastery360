import React, { useRef, useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';

const VirtualTourViewer = ({ 
  currentLocation, 
  hotspots, 
  onHotspotClick, 
  zoomLevel, 
  autoRotateEnabled,
  onLocationVisited 
}) => {
  const viewerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotateEnabled) return;

    const interval = setInterval(() => {
      setRotation(prev => ({
        ...prev,
        y: (prev?.y + 0.5) % 360
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [autoRotateEnabled]);

  // Mark location as visited when component mounts
  useEffect(() => {
    if (currentLocation && !currentLocation?.visited) {
      onLocationVisited(currentLocation?.id);
    }
  }, [currentLocation, onLocationVisited]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e?.clientX, y: e?.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e?.clientX - dragStart?.x;
    const deltaY = e?.clientY - dragStart?.y;

    setRotation(prev => ({
      x: Math.max(-90, Math.min(90, prev?.x - deltaY * 0.5)),
      y: (prev?.y + deltaX * 0.5) % 360
    }));

    setDragStart({ x: e?.clientX, y: e?.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e?.preventDefault();
    // Zoom functionality would be handled by parent component
  };

  // Filter hotspots for current location
  const currentHotspots = hotspots?.filter(h => h?.locationId === currentLocation?.id);

  return (
    <div 
      ref={viewerRef}
      className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* 360° Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(${currentLocation?.panoramaUrl})`,
          transform: `scale(${zoomLevel}) rotateX(${rotation?.x}deg) rotateY(${rotation?.y}deg)`,
          transformOrigin: 'center center'
        }}
      />
      {/* Hotspots */}
      {currentHotspots?.map((hotspot) => (
        <div
          key={hotspot?.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
          style={{
            left: `${hotspot?.position?.x}%`,
            top: `${hotspot?.position?.y}%`
          }}
        >
          <button
            onClick={() => onHotspotClick(hotspot)}
            className="group relative"
          >
            {/* Hotspot Marker */}
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center spiritual-shadow-lg group-hover:scale-110 transition-transform duration-200 contemplative-pulse">
              <Icon name="Info" size={16} className="text-primary-foreground" />
            </div>

            {/* Pulse Animation */}
            <div className="absolute inset-0 w-8 h-8 bg-primary rounded-full opacity-30 animate-ping" />

            {/* Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-card text-card-foreground px-3 py-2 rounded-lg spiritual-shadow text-sm font-body whitespace-nowrap">
                {hotspot?.title}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card" />
              </div>
            </div>
          </button>
        </div>
      ))}
      {/* Loading Overlay */}
      {!currentLocation?.panoramaUrl && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-body text-muted-foreground">Loading monastery view...</p>
          </div>
        </div>
      )}
      {/* Orientation Indicator */}
      <div className="absolute bottom-4 left-4 z-30 bg-card/80 backdrop-blur-sm rounded-lg p-2">
        <div className="flex items-center space-x-2">
          <Icon name="Compass" size={16} className="text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">
            {Math.round(rotation?.y)}°
          </span>
        </div>
      </div>
      {/* Instructions Overlay (for first-time users) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 spiritual-shadow max-w-xs">
            <Icon name="MousePointer" size={24} className="text-primary mx-auto mb-2" />
            <p className="font-body text-sm text-foreground mb-1">
              Drag to look around
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Click glowing markers to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTourViewer;