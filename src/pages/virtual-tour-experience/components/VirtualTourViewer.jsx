import React, { useEffect, useState, useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaSearchPlus,
  FaSearchMinus,
  FaExpand,
  FaCompress,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import Icon from '../../../components/AppIcon';

const VirtualTourViewer = ({ 
  currentLocation, 
  hotspots, 
  onHotspotClick, 
  zoomLevel, 
  autoRotateEnabled,
  onLocationVisited,
  locations,
  onLocationChange,
  onZoomIn,
  onZoomOut,
  onToggleAutoRotate
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fov, setFov] = useState(80);
  const [isMuted, setIsMuted] = useState(true);
  const [aFrameLoaded, setAFrameLoaded] = useState(false);

  const sceneContainerRef = useRef(null);
  const skyRef = useRef(null);
  const cameraEntityRef = useRef(null);
  const audioRef = useRef(null);

  // Load A-Frame script
  useEffect(() => {
    if (window.AFRAME) {
      setAFrameLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
    script.onload = () => setAFrameLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Update sky when current location changes
  useEffect(() => {
    if (!aFrameLoaded || !currentLocation?.panoramaUrl) return;
    
    const sky = document.querySelector("#sky");
    if (sky) {
      sky.setAttribute("src", currentLocation.panoramaUrl);
    }
  }, [currentLocation?.panoramaUrl, aFrameLoaded]);

  // Update camera FOV based on zoom level
  useEffect(() => {
    if (!aFrameLoaded) return;
    
    const newFov = Math.max(30, Math.min(100, 80 / zoomLevel));
    setFov(newFov);
    
    const cameraEntity = document.querySelector("[camera]");
    if (cameraEntity) {
      cameraEntity.setAttribute("camera", `fov: ${newFov}`);
    }
  }, [zoomLevel, aFrameLoaded]);

  // Auto-rotate control
  useEffect(() => {
    if (!aFrameLoaded) return;
    
    const sky = document.querySelector("#sky");
    if (!sky) return;

    if (autoRotateEnabled) {
      sky.removeAttribute("animation__autorotate");
      sky.setAttribute(
        "animation__autorotate",
        `property: rotation; to: 0 360 0; dur: 20000; loop: true; easing: linear`
      );
    } else {
      sky.removeAttribute("animation__autorotate");
    }
  }, [autoRotateEnabled, aFrameLoaded]);

  // Mark location as visited
  useEffect(() => {
    if (currentLocation && !currentLocation?.visited) {
      onLocationVisited(currentLocation?.id);
    }
  }, [currentLocation, onLocationVisited]);

  // Fullscreen change listener
  useEffect(() => {
    const handler = () => {
      const fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
      setIsFullscreen(!!fsEl);
    };
    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler);
    document.addEventListener("mozfullscreenchange", handler);
    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler);
      document.removeEventListener("mozfullscreenchange", handler);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const currentIndex = locations.findIndex(loc => loc.id === currentLocation?.id);
      
      if (e.key === "ArrowLeft") {
        const prevIndex = currentIndex === 0 ? locations.length - 1 : currentIndex - 1;
        onLocationChange(locations[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % locations.length;
        onLocationChange(locations[nextIndex]);
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        onToggleAutoRotate();
      } else if (e.key === "+" || e.key === "=") {
        onZoomIn();
      } else if (e.key === "-") {
        onZoomOut();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentLocation, locations, onLocationChange, onToggleAutoRotate, onZoomIn, onZoomOut]);

  // Navigation functions
  const nextLocation = () => {
    const currentIndex = locations.findIndex(loc => loc.id === currentLocation?.id);
    const nextIndex = (currentIndex + 1) % locations.length;
    onLocationChange(locations[nextIndex]);
  };

  const prevLocation = () => {
    const currentIndex = locations.findIndex(loc => loc.id === currentLocation?.id);
    const prevIndex = currentIndex === 0 ? locations.length - 1 : currentIndex - 1;
    onLocationChange(locations[prevIndex]);
  };

  const toggleFullscreen = () => {
    const el = sceneContainerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    }
  };

  const toggleMute = () => {
    setIsMuted((m) => {
      const nextVal = !m;
      if (audioRef.current) {
        audioRef.current.muted = nextVal;
        if (!nextVal) audioRef.current.play().catch(() => {});
      }
      return nextVal;
    });
  };

  // Filter hotspots for current location
  const currentHotspots = hotspots?.filter(h => h?.locationId === currentLocation?.id);

  if (!aFrameLoaded) {
    return (
      <div className="absolute inset-0 bg-muted flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-body text-muted-foreground">Loading 360° viewer...</p>
        </div>
      </div>
    );
  }

  const currentIndex = locations.findIndex(loc => loc.id === currentLocation?.id);

  return (
    <div
      ref={sceneContainerRef}
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {/* A-Frame scene */}
      <a-scene embedded style={{ height: "100%", width: "100%" }} vr-mode-ui="enabled: false">
        {/* Sky */}
        <a-sky 
          id="sky" 
          ref={skyRef} 
          src={currentLocation?.panoramaUrl || ""} 
          rotation="0 0 0"
        />

        {/* Camera entity */}
        <a-entity
          camera={`fov: ${fov}`}
          position="0 1.6 0"
          look-controls
          ref={cameraEntityRef}
        />
      </a-scene>

      {/* Ambient audio (optional) */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        style={{ display: "none" }}
      />

      {/* HTML Overlay for Hotspots */}
      {currentHotspots?.map((hotspot) => (
        <div
          key={hotspot?.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto"
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

      {/* Floating glass control bar (center bottom) */}
      <div
        role="toolbar"
        aria-label="VR controls"
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
          alignItems: "center",
          padding: "8px 14px",
          borderRadius: 12,
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.06)",
          zIndex: 1200,
        }}
      >
        {/* Prev Location */}
        <button
          onClick={prevLocation}
          title="Previous Location (←)"
          style={iconButtonStyle}
          aria-label="Previous Location"
        >
          <FaArrowLeft />
        </button>

        {/* Zoom Out */}
        <button
          onClick={onZoomOut}
          title="Zoom out (-)"
          style={iconButtonStyle}
          aria-label="Zoom out"
        >
          <FaSearchMinus />
        </button>

        {/* Play / Pause Auto-rotate */}
        <button
          onClick={onToggleAutoRotate}
          title="Auto-rotate (Space)"
          style={iconButtonStyle}
          aria-label="Toggle auto-rotate"
        >
          {autoRotateEnabled ? <FaPause /> : <FaPlay />}
        </button>

        {/* Zoom In */}
        <button
          onClick={onZoomIn}
          title="Zoom in (+)"
          style={iconButtonStyle}
          aria-label="Zoom in"
        >
          <FaSearchPlus />
        </button>

        {/* Next Location */}
        <button
          onClick={nextLocation}
          title="Next Location (→)"
          style={iconButtonStyle}
          aria-label="Next Location"
        >
          <FaArrowRight />
        </button>

        {/* Divider */}
        <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.06)", margin: "0 8px" }} />

        {/* Mute / Unmute */}
        <button
          onClick={toggleMute}
          title="Mute / Unmute (M)"
          style={iconButtonStyle}
          aria-label="Toggle sound"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          title="Fullscreen (F)"
          style={iconButtonStyle}
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>

        {/* Location Counter */}
        <div
          style={{
            color: "white",
            fontSize: 13,
            fontWeight: 600,
            padding: "4px 8px",
            borderRadius: 8,
            background: "rgba(0,0,0,0.35)",
            marginLeft: 6,
          }}
        >
          {currentIndex + 1}/{locations.length}
        </div>
      </div>

      {/* Thumbnail strip for locations */}
      <div
        style={{
          position: "absolute",
          bottom: 84,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          padding: "6px 8px",
          borderRadius: 8,
          background: "rgba(0,0,0,0.45)",
          zIndex: 1100,
          alignItems: "center",
        }}
      >
        {locations.map((location, idx) => (
          <button
            key={location.id}
            onClick={() => onLocationChange(location)}
            aria-label={`Go to ${location.name}`}
            style={{
              width: 72,
              height: 44,
              backgroundImage: `url(${location.panoramaUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 6,
              border: location.id === currentLocation?.id ? "3px solid #4ecdc4" : "2px solid rgba(255,255,255,0.08)",
              boxShadow: location.id === currentLocation?.id ? "0 6px 20px rgba(78,205,196,0.18)" : "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Onboarding hint */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1100,
          padding: "6px 14px",
          borderRadius: 8,
          background: "rgba(0,0,0,0.35)",
          color: "white",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        {currentLocation?.name} • Drag to explore 360° • Click markers for stories
      </div>

      {/* Loading Overlay */}
      {!currentLocation?.panoramaUrl && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center z-40">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-body text-muted-foreground">Loading monastery view...</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Shared icon button style
const iconButtonStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  width: 40,
  height: 40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 16,
  transition: "transform 120ms ease, background 120ms ease",
  outline: "none",
};

export default VirtualTourViewer;