// src/pages/VR_360.jsx
import React, { useEffect, useState, useRef } from "react";
import "aframe";
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
import Header from "components/ui/Header";
import HelpOverlay from "./components/HelpOverlay";

export default function VirtualTourExperience() {
  const images = [
    "/assets/images/image1.jpg",
    "/assets/images/image6.png",
    "/assets/images/image3.png",
    "/assets/images/image5.png",
    "/assets/images/image4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fov, setFov] = useState(80); // camera FOV: lower = zoomed in
  const [isMuted, setIsMuted] = useState(true); // for ambient audio if present
  const [showHelp, setShowHelp] = useState(true);

  const sceneContainerRef = useRef(null);
  const skyRef = useRef(null);
  const cameraEntityRef = useRef(null);
  const audioRef = useRef(null);

  // update sky when index changes
  useEffect(() => {
    const sky = document.querySelector("#sky");
    if (sky) sky.setAttribute("src", images[currentIndex]);
  }, [currentIndex, images]);

  // useEffect(() => {
  //   const hasVisited = localStorage.getItem('monastery360-tour-visited');
  //   if (!hasVisited) {
  //     setShowHelp(true);
  //     localStorage.setItem('monastery360-tour-visited', 'true');
  //   }
  // }, []);

  // update camera FOV
  useEffect(() => {
    // camera entity should have attribute camera
    const cameraEntity = document.querySelector("[camera]");
    if (cameraEntity) {
      // set attribute as object or string depending on A-Frame version
      cameraEntity.setAttribute("camera", `fov: ${fov}`);
    }
  }, [fov]);

  // auto-rotate control
  useEffect(() => {
    const sky = document.querySelector("#sky");
    if (!sky) return;

    if (isAutoRotate) {
      // animate rotation from current to +360 using A-Frame animation
      // Clear previous animation first to avoid duplicates
      sky.removeAttribute("animation__autorotate");
      sky.setAttribute(
        "animation__autorotate",
        `property: rotation; to: 0 360 0; dur: 20000; loop: true; easing: linear`
      );
    } else {
      sky.removeAttribute("animation__autorotate");
    }
  }, [isAutoRotate]);

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      } else if (e.key === " " || e.key === "Spacebar") {
        // space toggles auto rotate
        setIsAutoRotate((s) => !s);
      } else if (e.key === "+" || e.key === "=") {
        zoomIn();
      } else if (e.key === "-") {
        zoomOut();
      } else if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAutoRotate, fov, isFullscreen, isMuted]);

  // fullscreen change listener (to sync state)
  useEffect(() => {
    const handler = () => {
      const fsEl =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement;
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

  // navigation functions
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const zoomIn = () => setFov((v) => Math.max(30, v - 5));
  const zoomOut = () => setFov((v) => Math.min(100, v + 5));

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

  // helper to set image via thumbnail click
  const setImage = (idx) => setCurrentIndex(idx);

  return (
    <div
      ref={sceneContainerRef}
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <Header />
      {/* Help Overlay */}
      <HelpOverlay isVisible={showHelp} onClose={() => setShowHelp(false)} />
      {/* A-Frame scene (no in-scene clickable cursor) */}
      <a-scene embedded style={{ height: "100%", width: "100%" }}>
        {/* Sky */}
        <a-sky
          id="sky"
          ref={skyRef}
          src={images[currentIndex]}
          rotation="0 0 0"
        ></a-sky>

        {/* Camera entity - we'll control its FOV */}
        <a-entity
          camera="fov: 80"
          position="0 1.6 0"
          look-controls
          ref={cameraEntityRef}
        ></a-entity>

        {/* (Optional) Place any static text inside the scene if desired */}
      </a-scene>

      {/* Ambient audio (optional) - put a valid audio file under public and enable) */}
      <audio
        ref={audioRef}
        src="/assets/videos/monastery.mp4" // you can replace with an ambient mp3
        loop
        autoPlay={!isMuted}
        muted={isMuted}
        style={{ display: "none" }}
      />

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
        {/* Prev */}
        <button
          onClick={prev}
          title="Previous (←)"
          style={iconButtonStyle}
          aria-label="Previous"
        >
          <FaArrowLeft />
        </button>

        {/* Zoom Out */}
        <button
          onClick={zoomOut}
          title="Zoom out (-)"
          style={iconButtonStyle}
          aria-label="Zoom out"
        >
          <FaSearchMinus />
        </button>

        {/* Play / Pause */}
        <button
          onClick={() => setIsAutoRotate((s) => !s)}
          title="Play / Pause (Space)"
          style={iconButtonStyle}
          aria-label="Play or pause auto-rotate"
        >
          {isAutoRotate ? <FaPause /> : <FaPlay />}
        </button>

        {/* Zoom In */}
        <button
          onClick={zoomIn}
          title="Zoom in (+)"
          style={iconButtonStyle}
          aria-label="Zoom in"
        >
          <FaSearchPlus />
        </button>

        {/* Next */}
        <button
          onClick={next}
          title="Next (→)"
          style={iconButtonStyle}
          aria-label="Next"
        >
          <FaArrowRight />
        </button>

        {/* Divider visual */}
        <div
          style={{
            width: 1,
            height: 28,
            background: "rgba(255,255,255,0.06)",
            margin: "0 8px",
          }}
        />

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

        {/* Counter */}
        <div
          aria-hidden
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
          {currentIndex + 1}/{images.length}
        </div>
      </div>

      {/* Thumbnail strip (bottom center, above control bar) */}
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
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setImage(idx)}
            aria-label={`Go to image ${idx + 1}`}
            style={{
              width: 72,
              height: 44,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 6,
              border:
                idx === currentIndex
                  ? "3px solid #4ecdc4"
                  : "2px solid rgba(255,255,255,0.08)",
              boxShadow:
                idx === currentIndex
                  ? "0 6px 20px rgba(78,205,196,0.18)"
                  : "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Onboarding hint (top center) */}
      <div
        style={{
          position: "absolute",
          top: 60,
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
        Drag to look around • ← → to navigate • F for fullscreen
      </div>
    </div>
  );
}

// shared icon button style
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
