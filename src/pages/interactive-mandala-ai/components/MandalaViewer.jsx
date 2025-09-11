import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MandalaViewer = ({ selectedMandala, onHotspotClick, activeHotspot, zoomLevel, onZoomChange }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e?.clientX - panPosition?.x,
        y: e?.clientY - panPosition?.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e?.clientX - dragStart?.x,
        y: e?.clientY - dragStart?.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const handleZoomIn = () => {
    const newZoom = Math.min(zoomLevel + 0.5, 3);
    onZoomChange(newZoom);
    if (newZoom === 1) {
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoomLevel - 0.5, 1);
    onZoomChange(newZoom);
    if (newZoom === 1) {
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const handleResetView = () => {
    onZoomChange(1);
    setPanPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      {/* Loading State */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-body text-muted-foreground">Loading sacred artwork...</p>
          </div>
        </div>
      )}
      {/* Mandala Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transform: `scale(${zoomLevel}) translate(${panPosition?.x / zoomLevel}px, ${panPosition?.y / zoomLevel}px)`,
            transformOrigin: 'center center'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Image
            src={selectedMandala?.imageUrl}
            alt={selectedMandala?.title}
            className="w-full h-full object-contain"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Interactive Hotspots */}
          <AnimatePresence>
            {imageLoaded && selectedMandala?.hotspots?.map((hotspot) => (
              <motion.button
                key={hotspot?.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                  activeHotspot === hotspot?.id 
                    ? 'bg-secondary animate-pulse' :'bg-primary hover:bg-primary/80'
                }`}
                style={{
                  left: `${hotspot?.x}%`,
                  top: `${hotspot?.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => onHotspotClick(hotspot)}
              >
                <Icon 
                  name={hotspot?.icon} 
                  size={16} 
                  className="text-white mx-auto" 
                />
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30"></div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomIn}
          disabled={zoomLevel >= 3}
          className="w-10 h-10 spiritual-shadow"
        >
          <Icon name="ZoomIn" size={18} />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomOut}
          disabled={zoomLevel <= 1}
          className="w-10 h-10 spiritual-shadow"
        >
          <Icon name="ZoomOut" size={18} />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleResetView}
          className="w-10 h-10 spiritual-shadow"
        >
          <Icon name="RotateCcw" size={18} />
        </Button>
      </div>
      {/* Navigation Hint */}
      {zoomLevel > 1 && (
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 spiritual-shadow">
          <p className="font-caption text-xs text-muted-foreground flex items-center">
            <Icon name="Move" size={14} className="mr-1" />
            Drag to pan around
          </p>
        </div>
      )}
      {/* Zoom Level Indicator */}
      {zoomLevel > 1 && (
        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 spiritual-shadow">
          <p className="font-caption text-xs text-muted-foreground">
            {Math.round(zoomLevel * 100)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default MandalaViewer;