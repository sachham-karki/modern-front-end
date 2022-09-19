import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

import finlog from "../../assets/finlog.png";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="login-register__bg">
        <Link to="/">
          <img className="login-register__logo" src={finlog} alt="logo" />
        </Link>{" "}
        <div className="mainLogin">
          <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label for="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email@gmail.com"
                id="email"
                name="email"
              />

              <label for="password">Password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
              />

              <button className="button-login-register" type="submit">
                Log In
              </button>
            </form>
            <Link to="/register">
              <button
                className="link-btn"
                onClick={() => props.onFormSwitch("register")}
              >
                Register Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
