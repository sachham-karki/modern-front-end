import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./containers";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          {/* <LoginPage /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
