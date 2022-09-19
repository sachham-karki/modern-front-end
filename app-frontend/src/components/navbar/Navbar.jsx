import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import finlog from "../../assets/finlog.png";

const Menu = () => (
  <>
    <p>
      {" "}
      <a href="#home">Home </a>{" "}
    </p>
    <p>
      {" "}
      <a href="#anti-matter">Anti-Matter</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#case-study">Case Study</a>
    </p>
    <p>
      <a href="#library">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={finlog} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <div id="right-m">
          <Link to="/login">
            <p>Login In</p>
          </Link>
        </div>
        <div id="left-m">
          <Link to="/register">
            <button type="button">Sign up</button>
          </Link>
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
