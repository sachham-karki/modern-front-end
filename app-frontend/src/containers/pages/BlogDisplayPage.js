import React from "react";
import { useParams } from "react-router-dom";
import blogs from "./blog-content";
import PageNotFound from "./PageNotFound";
import "./libraryDisplay.css";
import LibraryList from "../../components/LibraryList";
const BlogDisplayPage = () => {
  const { libId } = useParams();
  const blog = blogs.find((blog) => blog.name === libId);

  if (!blog) {
    return <PageNotFound />;
  }

  const otherLibrary = LibraryList.filter((library) => library.name !== libId);
  console.log(otherLibrary);
  const [a, b, c, d] = otherLibrary;
  console.log(a.name);
  return (
    <div className="libraryDisplay__main">
      <div className="libraryDisplay__textbox">
        <h1 style={{ color: "white" }}> {blog.title} </h1>

        {blog.content.map((paragraph) => (
          <p key={paragraph} style={{ color: "white" }}>
            {paragraph}
          </p>
        ))}

        <div className="blogDisplay__filtered_library">
          {a.content}
          {b.content}
          {c.content}
          {d.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDisplayPage;
