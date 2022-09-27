import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="anti-matter">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What  is  Anti-Matter"
          text="Anti-Matter is a IT consulting and engineering firm , we offer leading-edge solutions to large corporations and emerging technology companies , located in Melbourne, Australia. We are among the best emerging software company on Australia which provides all kind of software/IT solutions for individual or businesses. We are specialized in digital transformation, Web and Mobile App development, and  maintanance, AI, and Blockchain. We also provide office setup, security and cloud services.
          The Future is Now with Anti-Matter and You Just Need To Realize It. Step into Future Today & Make it Happen with AI and Block Chain."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Step into Future Today & Make it Happen with AI and Block-Chain
        </h1>
        <a href="#library">
          {" "}
          <p>Explore The Library</p>
        </a>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Power your app with AI"
          text="AI has rocketed into every field these days, especially for business purposes. The Anti-Matter's technology can improve employee and customer relationships, find patterns in vast amounts of data, perform repetitive tasks, track past purchase history, purchase preferences, credit scores, and more with the help of Machine Learning, Deep Learning and Natural Language Processing . We provide businesses with AI technologies that help them pursue common themes. "
        />
        <Feature
          title="Step into Web 3.0"
          text=' Have you considered adopting cutting-edge technology? You have come to the right place if you need a decentralised application or want to turn your "App into Dapp." You can get help from Anti-Matter in solving this problem. Decentralized apps can increase app security while simultaneously boosting data privacy. We are situated in Australia and offer some of the greatest block-chain services there.'
        />
        <Feature
          title="Magic Touch & Digital Marketing"
          text="Our Magic Touch focuses on transforming your outdated, old fashioned, and low ranking website into a 'highly appealing, top-ranking, secure Web App that generates a lot of leads and increases conversion rate.
          Today, the internet is being used by billions of people. Our team is ready to connect you and your customer. In order to help individuals achieve more through extraordinary digital experiences, our mission is to push the boundaries of digital marketing.

          Our goal is to impress our clients with the results of their digital efforts and to maximise their Return On Investment.
          "
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
