import React from "react";
import "./footer.css";
import finlog from "../../assets/finlog.png";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const date = new Date();
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Would you like your company to take the lead in advancing technology?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <a href="https://forms.gle/BmeRcaNpprxXe9bS8">
          {" "}
          <p>Request Early Service</p>
        </a>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <a href="#home">
            {" "}
            <img src={finlog} alt="logo" />
          </a>

          <p>
            <br />
            Anti-Matters (Australian Technology) <br />
            Melbourne VIC 3011 Australia <br />
            (ABN): 15 196 791 795
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          {/* <p>Overons</p> */}
          <p>Social Media</p>
          {/* <p>Counters</p> */}
          <a href="https://forms.gle/BmeRcaNpprxXe9bS8">
            {" "}
            <p>Contact</p>
          </a>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contract</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Anti-Matters (Australian Technology) Melbourne, VIC, Australia</p>
          <p>
            <FiPhoneCall /> &nbsp; +61 433 878 512
          </p>
          <p>
            <HiOutlineMail /> &nbsp; kms5.antimatters@gmail.com
          </p>
          <p>
            Australian Business Number <br />
            (ABN): 15 196 791 795
          </p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>"© {date.getFullYear()} Anti-Matters. All rights reserved"</p>
      </div>
    </div>
  );
};

export default Footer;
