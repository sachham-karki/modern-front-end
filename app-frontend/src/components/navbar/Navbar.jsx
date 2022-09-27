import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../containers/hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

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
      <a href="#case-study">Services</a>
    </p>
    <p>
      {" "}
      <a href="#possibilities">Possibilities</a>
    </p>

    <p>
      <a href="#library">Into-Future</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  //Authentication useUser hook
  const { user } = useUser();
  const navigate = useNavigate();

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
          {user ? (
            <button
              type="button"
              onClick={() => {
                signOut(getAuth());
              }}
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              {" "}
              <p>Log In</p>
            </Link>
            // onClick={navigate("/login")}
          )}
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
              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    signOut(getAuth());
                  }}
                >
                  Log Out
                </button>
              ) : (
                <p onClick={navigate("/login")}>Log In</p>
              )}

              <Link to="/register">
                {user ? null : <button type="button">Sign up</button>}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
