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

  return (
    <div className="gpt3__blog section__padding " id="library">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.{" "}
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
            date="Sep 09, 2022"
            title="Anti-Matter and Code Automation. Let us explore how it is?"
            blogs={blog1.name}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 09, 2022"
            title="Anti-Matter and AI is the future. Let us explore how it is?"
            blogs={blog2.name}
          />{" "}
          <Article
            imgUrl={blog03}
            date="Sep 09, 2022"
            title="Anti-Matter suggesting  AI. Let us explore how it is?"
            blogs={blog3.name}
          />{" "}
          <Article
            imgUrl={blog04}
            date="Sep 09, 2022"
            title="Anti-Matter and Block-Chain can bring new revolution. Let us explore how it is?"
            blogs={blog4.name}
          />{" "}
          <Article
            imgUrl={blog05}
            date="Sep 09, 2022"
            title="Anti-Matter and Open  AI is the future. Let us explore how it is?"
            blogs={blog5.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
