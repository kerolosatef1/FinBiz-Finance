import React from "react";
import "./Logo.scss";

const Logo: React.FC = () => {
  return (
    <div className="logoContainer" aria-hidden="true">
      {/* Top Left */}
      <div className="circle circle1" />
      <div className="rect rect1" />

      {/* Top Right */}
      <div className="rect rect2" />
      <div className="circle circle2" />

      {/* Bottom Left */}
      <div className="circle circle3" />
      <div className="rect rect3" />

      {/* Bottom Right */}
      <div className="rect rect4" />
      <div className="circle circle4" />
    </div>
  );
};

export default Logo;