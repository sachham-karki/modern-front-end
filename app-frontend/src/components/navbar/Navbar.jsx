import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import finlog from "../../assets/finlog.png";

import useUser from "../../containers/hooks/useUser";

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
  //Authentication useUser hook
  const { user, isLoading } = useUser();

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/">
            <img src={finlog} alt="logo" />
          </Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <div id="right-m">
          <Link to="/login">{user ? null : <p>Log In</p>}</Link>
        </div>
        <div id="left-m">
          <Link to="/register">
            {user ? null : <button type="button">Sign up</button>}
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
              <Link to="/login">{user ? null : <p>Log in</p>}</Link>
              <Link to="/register">
                {" "}
                {user ? null : <button type="button">Sign up</button>}{" "}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
