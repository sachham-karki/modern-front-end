import React, { useState, useEffect } from "react";
import useUser from "../hooks/useUser";
import axios from "axios";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import blogs from "../pages/blog-content";

const Blog = () => {
  const [blog1, blog2, blog3, blog4, blog5] = blogs;

  //adding like
  const [likeNum, setLikeNum] = useState({ like: 0, canLike: false });
  const { canLike } = likeNum;

  const articleId = "alish";
  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadLikes = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });
      const newlikeNum = response.data.data.like;
      setLikeNum({ like: newlikeNum });
    };
    if (isLoading) {
      loadLikes();
    }
  }, [isLoading, user]);

  const addLikes = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(`/api/articles/${articleId}/likes`, null, {
      headers,
    });
    const updatedLikes = response.data.data.like;
    setLikeNum({ like: updatedLikes });
  };

  //toggling loke button
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  //creating Date  variable

  let dateObj = new Date();
  var today = new Date("2021-10-06");
  var month = today.toLocaleString("default", { month: "short" });
  let year = dateObj.getUTCFullYear();

  return (
    <div className="gpt3__blog section__padding " id="library">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, Travel with us into the Future.{" "}
          <span className="blog__heading_like" onClick={addLikes}>
            <span className="blog__heading_like_first_ch">
              {click ? (
                <AiFillLike
                  onClick={handleClick}
                  color="gold"
                  onMouseOver={({ target }) => (target.style.color = "yellow")}
                  // onMouseOut={({ target }) => (target.style.color = "gold")}
                />
              ) : (
                <AiOutlineLike
                  onClick={handleClick}
                  color="gold"
                  onMouseOver={({ target }) => (target.style.color = "yellow")}
                  // onMouseOut={({ target }) => (target.style.color = "gold")}
                />
              )}
            </span>
            <span className="gpt3__blog-container_LikeText">
              {/* {likeNum["like"]} */}
            </span>
          </span>
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date={month + " " + year}
            title="Web and Mobile App Development Services"
            blogs={blog1.name}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date={month + " " + year}
            title=" AI is the future. Let us explore our AI services"
            blogs={blog2.name}
          />{" "}
          <Article
            imgUrl={blog03}
            date={month + " " + year}
            title="Anti-Matters's IT Solutions."
            blogs={blog3.name}
          />{" "}
          <Article
            imgUrl={blog04}
            date={month + " " + year}
            title=" Block-Chain can bring new revolution. Let us explore our services"
            blogs={blog4.name}
          />{" "}
          <Article
            imgUrl={blog05}
            date={month + " " + year}
            title="Anti-Matters's Digital Marketing Services."
            blogs={blog5.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
