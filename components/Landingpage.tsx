import React from "react";
import FadeInSection from "./Fadein-section-effect";

export default function Landingpage() {
  return (
    <div className="hero-wrapper">
      <div className="intro-wrap">
        <FadeInSection>
          <h1 className="hero-head">Paradox</h1>
          <h1 className="hero-head pl-8 pt-4"></h1>
        </FadeInSection>
      </div>
    </div>
  );
}
