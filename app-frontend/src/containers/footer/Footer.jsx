import React from "react";
import "./footer.css";
import finlog from "../../assets/finlog.png";

const Footer = () => {
  const date = new Date();
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want your Business to step into the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <a href="#home">
            {" "}
            <img src={finlog} alt="logo" />
          </a>

          <p>Anti-Matter Footscray, VIC 3011, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contract</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Anti-Matter Footscray, VIC, 3011</p>
          <p>0433878512</p>
          <p>kms5.antimatter@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>"© {date.getFullYear()} Anti-Matter. All rights reserved"</p>
      </div>
    </div>
  );
};

export default Footer;
