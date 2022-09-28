import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h2 className="gradient__text">Anti-Matters (Australian Technology)</h2>
        <h1 className="gradient__text">
          Need IT Support to boost your business with cutting edge technology.
        </h1>
        <p>
          Sign In to kick start in the world of Technology. Anti-Matters's team
          are there to support you move closer towards your goal.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <a href="https://forms.gle/hnikUiuTMFPbQFDv9">
            {" "}
            <button type="button">Get Started</button>
          </a>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people img" />
          <p>20+ people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai img" />
      </div>
    </div>
  );
};

export default Header;
