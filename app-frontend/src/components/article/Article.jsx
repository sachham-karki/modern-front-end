import React, { useState, useEffect } from "react";
import "./article.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

import useUser from "../../containers/hooks/useUser";

const Article = ({ imgUrl, date, title, blogs }) => {
  //   const [likeNum, setLikeNum] = useState({ like: 0, canLike: false });
  //   const { canLike } = likeNum;
  //   const articleId = "alish";
  //   const { user, isLoading } = useUser();

  //   useEffect(() => {
  //     const loadLikes = async () => {
  //       const token = user && (await user.getIdToken());
  //       const headers = token ? { authtoken: token } : {};
  //       const response = await axios.get(`/api/articles/${articleId}`, {
  //         headers,
  //       });
  //       const newlikeNum = response.data.data.like;
  //       setLikeNum({ like: newlikeNum });
  //     };
  //     if (isLoading) {
  //       loadLikes();
  //     }
  //   }, [isLoading, user]);

  // const addLikes = async () => {
  //   const token = user && (await user.getIdToken());
  //   const headers = token ? { authtoken: token } : {};
  //   const response = await axios.put(`/api/articles/${articleId}/likes`, null, {
  //     headers,
  //   });
  //   const updatedLikes = response.data.data.like;
  //   setLikeNum({ like: updatedLikes });
  // };

  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>
            {date}{" "}
            {/* <span className="gpt3__blog-container_article-content_LikeButton">
              <span onClick={addLikes}>
                {canLike ? (
                  <AiOutlineLike color="gold" />
                ) : (
                  <AiFillLike color="gold" />
                )}
              </span>

              <span className="gpt3__blog-container_article-content_LikeText">
                {likeNum["like"]}
              </span>
            </span> */}
          </p>{" "}
          <p> </p>
          <Link to={`/library/${blogs}`}>
            <h3>{title}</h3>
          </Link>
        </div>
        <Link to={`/library/${blogs}`}>
          <p>Read Full Article</p>
        </Link>
      </div>
    </div>
  );
};

export default Article;
