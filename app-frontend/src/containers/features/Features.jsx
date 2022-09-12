import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Powered your app with AI",
    text: "Do you want to recomment your e-commers user what product they want. Powered your e-commerce website with Anti-Matter suggesting AI.",
  },
  {
    title: "Introduced  Block-chain to your app.",
    text: "Do your business need decentralized app or want to make you app more secure?  Anti-Matter can help you to solve this problem by introducing Block-Chain to your app. ",
  },
  {
    title: "Marketing Services ",
    text: "Billions of user are engaged in internet today. Anti-Matter provides  digital marketing facilities to scale-up your business. ",
  },
  {
    title: "Magic touch to your current app",
    text: "Magic touch will give you magic touch to improve your Web-app. ",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="case-study">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Step into Future Today & Make it Happen with AI and Block-Chain{" "}
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
