import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
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
          <div className="button">
            <button type="submit">Log In</button>
          </div>
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
  );
};

export default LoginPage;
