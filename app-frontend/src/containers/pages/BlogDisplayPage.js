import React from "react";
import { useParams } from "react-router-dom";
import blogs from "./blog-content";
import PageNotFound from "./PageNotFound";
import "./libraryDisplay.css";
const BlogDisplayPage = () => {
  const { libId } = useParams();
  const blog = blogs.find((blog) => blog.name === libId);

  if (!blog) {
    return <PageNotFound />;
  }

  return (
    <div className="libraryDisplay__main">
      <div className="libraryDisplay__textbox">
        <h1 style={{ color: "white" }}> {blog.title} </h1>

        {blog.content.map((paragraph) => (
          <p key={paragraph} style={{ color: "white" }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDisplayPage;
