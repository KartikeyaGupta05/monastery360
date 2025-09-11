// src/pages/Home.js
import React, { useEffect } from "react";
import "aframe";

function VR_360() {
  useEffect(() => {
    // Add click event to cube after scene loads
    const cube = document.querySelector("#changeCube");
    const sky = document.querySelector("#sky");

    if (cube && sky) {
      cube.addEventListener("click", () => {
        sky.setAttribute("src", "/assets/images/360image2.jpg");
      });
    }

    // Cleanup
    return () => {
      if (cube) {
        cube.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* A-Frame Scene */}
      <a-scene embedded>
        <a-sky
          id="sky"
          src="/assets/images/360image.jpg"
          rotation="0 -130 0"
        ></a-sky>

        <a-entity camera look-controls position="0 1.6 0"></a-entity>

        {/* Text */}
        <a-text
          value="Welcome to Rumtek Monastery"
          position="0 2 -3"
          color="white"
          align="center"
        ></a-text>

        <a-box
          id="changeCube"
          position="1 1 -3"
          color="green"
          depth="0.2"
          height="0.2"
          width="0.2"
        ></a-box>
      </a-scene>
    </div>
  );
}

export default VR_360;
