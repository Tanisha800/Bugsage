import React from "react";
import Orb from "./Orb";

function HeroSection() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Orb
        hoverIntensity={0.15}
        rotateOnHover={true}
        hue={204}
        forceHoverState={false}
      />
      <div style={{ position: "fixed", top: 200, left: 200 }}>
       
      </div>
    </div>
  );
}

export default HeroSection;
