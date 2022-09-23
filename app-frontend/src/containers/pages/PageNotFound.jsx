import React from "react";
import "./login.css";
const PageNotFound = () => {
  return (
    <div>
      <div class="page-not-foundtext__center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
        <a href="index.html" class="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
