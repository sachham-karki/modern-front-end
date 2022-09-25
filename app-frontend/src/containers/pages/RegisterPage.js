import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import finlog from "../../assets/finlog.png";
const RegisterPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  //using useNavigate
  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (pass !== confirmPassword) {
        setError("** Password and Confirm Password don't match. ");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, pass);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="login-register__bg">
        <Link to="/">
          <img className="login-register__logo" src={finlog} alt="logo" />
        </Link>{" "}
        <div className="mainRegister">
          <div className="auth-form-container">
            <h2>Register</h2>
            {error && <p className="authError-message">{error}</p>}
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
                placeholder="Enter Email"
                id="email"
                name="email"
              />

              <label for="password">Password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
              />
              <label for="password">Re-Enter Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                id="Comfirm password"
                name="Confirm password"
              />

              <button
                className="button-login-register"
                // type="submit"
                onClick={createAccount}
              >
                {" "}
                Create Account
              </button>
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
      </div>
    </>
  );
};

export default RegisterPage;
