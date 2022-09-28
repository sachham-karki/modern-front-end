import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Web and Mobile Application Development Services",
    text: "Anti-Matters offer end-to-end Web and Mobile application development services which include designing, prototyping, coding, programming, developing, testing, cloud hosting, automating, securing, maintaining  and migrating to new architecture. We offer adaptable engagement models to all startups and businesses looking to boost user engagement.",
  },
  {
    title:
      "Onsite IT Support, Remote Work Solutions and Disaster Recovery services",
    text: "Providing onsite IT support to Melbourne-area businesses. Neither travel expenses nor callout fees. Ask questions so you may feel like your team is standing right by you. Boost IT has the expertise and tools necessary to recover your erased data. Never fear; just give us a ring.",
  },

  {
    title:
      "Digital Marketing, Office Relocation, Software Installation, security, management, upgrades, cloud storage and Internet Solutions",
    text: "There won't be much of a disruption to your organisation during the proper installation of your IT systems and software. With cloud security services from Microsoft Security, you can defend your infrastructure, apps, and data from quickly emerging cyberthreats. By setting up, maintaining, upgrading, storing, and managing your hardware, software, networks, and cloud solutions, we can help your business run more smoothly. Do you encounter any internet problems? Whether you require quicker installation or faster speed, we can assist. ",
  },
  {
    title: "Artificial Intelligence and Block-Chain Solutions ",
    text: "Every businesses, medical & education sectors, developer, data scientist, and seasoned practitioner can take benefit of Anti-Matter's comprehensive and in-depth offering of Artificial Intelligence and Block-Chain services.  Anti-Matters is committed assisting clients in accelerating their machine learning and Web 3.0(Decentralized)  journey.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="case-study">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          When your competitors are preparing for the future, are you?{" "}
        </h1>
        <a href="https://forms.gle/BmeRcaNpprxXe9bS8">
          {" "}
          <p>Request Early Service to Get Started</p>{" "}
        </a>
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
