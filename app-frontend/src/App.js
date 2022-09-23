import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, PageNotFound } from "./containers";

//****************************Authehtication ***************************************** */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvPPlgxtpjEAdTp2h_3lG5KW5HbyCMBQ0",
  authDomain: "am-auth-95c0b.firebaseapp.com",
  projectId: "am-auth-95c0b",
  storageBucket: "am-auth-95c0b.appspot.com",
  messagingSenderId: "566245836926",
  appId: "1:566245836926:web:482e87a4b2b6a34505b02f",
  measurementId: "G-B7097QW86F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//****************************Authehtication ***************************************** */

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
