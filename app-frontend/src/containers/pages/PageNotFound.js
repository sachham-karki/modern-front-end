import React from "react";
import "./login.css";
const PageNotFound = () => {
  return (
    <div style={{ color: "white" }} className="page-not-foundtext__center">
      <h1>404 Error:</h1>
      <p>
        {" "}
        <span>Opps!</span> Page not found.
      </p>
      <p>The page you’re looking for doesn’t exist.</p>
    </div>
  );
};

export default PageNotFound;
