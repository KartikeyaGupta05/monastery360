// src/pages/Home.js
import React, { useEffect, useState } from "react";
import "aframe";

function VR_360() {
  // Store all images in an array
  const images = [
    "/assets/images/image1.jpg",
    "/assets/images/360image.jpg",
    "/assets/images/image2.jpg",
    "/assets/images/360image2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextCube = document.querySelector("#nextCube");
    const prevCube = document.querySelector("#prevCube");
    const sky = document.querySelector("#sky");

    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    if (nextCube) nextCube.addEventListener("click", handleNextClick);
    if (prevCube) prevCube.addEventListener("click", handlePrevClick);

    return () => {
      if (nextCube) nextCube.removeEventListener("click", handleNextClick);
      if (prevCube) prevCube.removeEventListener("click", handlePrevClick);
    };
  }, [images.length]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <a-scene embedded>
        {/* Sky that updates based on index */}
        <a-sky id="sky" src={images[currentIndex]} rotation="0 -130 0"></a-sky>

        {/* Camera + Cursor */}
        <a-entity camera look-controls position="0 1.6 0">
          <a-cursor
            color="black"
            fuse="false"
            raycaster="objects: .clickable"
          ></a-cursor>
        </a-entity>

        {/* Title */}
        <a-text
          value="Welcome to Rumtek Monastery"
          position="-0.8 2 -3"
          color="black"
          align="center"
        ></a-text>

        {/* Navigation Cubes */}
        {/* Previous Button (Left) */}
        <a-box
          id="prevCube"
          class="clickable"
          position="-1.5 0.3 -3"
          color="red"
          depth="0.3"
          height="0.3"
          width="0.3"
        ></a-box>
        <a-text
          value="Prev"
          position="-1.5 0.8 -3"
          color="red"
          align="center"
          scale="0.8 0.8 0.8"
        ></a-text>

        {/* Next Button (Right) */}
        <a-box
          id="nextCube"
          class="clickable"
          position="1.5 0.3 -3"
          color="green"
          depth="0.3"
          height="0.3"
          width="0.3"
        ></a-box>
        <a-text
          value="Next"
          position="1.5 0.8 -3"
          color="green"
          align="center"
          scale="0.8 0.8 0.8"
        ></a-text>
      </a-scene>
    </div>
  );
}

export default VR_360;
