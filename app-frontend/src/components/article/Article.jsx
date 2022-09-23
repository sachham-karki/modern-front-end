import React, { useState, useEffect } from "react";
import "./article.css";
import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";

const Article = ({ imgUrl, date, title }) => {
  const [likeNum, setLikeNum] = useState({ like: 0 });
  const articleId = "alish";
  useEffect(() => {
    const loadLikes = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newlikeNum = response.data.data.like;
      setLikeNum({ like: newlikeNum });

      console.log(
        `This is ,.#####ddddddddddddddddddddddd..............${response.data.data.like}`
      );
    };
    loadLikes();
  }, []);

  const addLikes = async () => {
    const response = await axios.put(`/api/articles/${articleId}/likes`);
    const updatedLikes = response.data.data.like;
    setLikeNum({ like: updatedLikes });
  };

  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>
            {date}{" "}
            <span className="gpt3__blog-container_article-content_LikeButton">
              <span onClick={addLikes}>
                <AiOutlineLike color="gold" />
              </span>

              <span className="gpt3__blog-container_article-content_LikeText">
                {likeNum["like"]}
              </span>
            </span>
          </p>{" "}
          <p> </p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
