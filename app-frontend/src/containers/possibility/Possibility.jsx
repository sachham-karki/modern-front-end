import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibilities">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility img" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Anti-Matters's team are committed to support you and your business,
          and to scale-up with modern technology. Our services are all kind IT
          counselling & solutions, Web and Mobile App development, Maintanance,
          security, cloud services, Logo Design and Digital-Marketing, AI and
          Block-Chain(DApp) solutions.
        </p>
        <a href="https://forms.gle/BmeRcaNpprxXe9bS8">
          {" "}
          <h4>Request Early Service to Get Started</h4>
        </a>
      </div>
    </div>
  );
};

export default Possibility;
