import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
const RegisterPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="mainRegister">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label for="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="name"
            id="name"
            name="name"
          />

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
            placeholder="*******"
            id="password"
            name="password"
          />
          <div className="button">
            <button type="submit"> Sign In</button>
          </div>
        </form>
        <Link to="/login">
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("login")}
          >
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
