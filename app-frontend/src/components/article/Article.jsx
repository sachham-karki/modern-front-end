import "./article.css";

import { Link } from "react-router-dom";

const Article = ({ imgUrl, date, title, blogs }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date} </p> <p> </p>
          <Link to={`/library/${blogs}`}>
            <h3>{title}</h3>
          </Link>
        </div>
        <Link to={`/library/${blogs}`}>
          <p>Read Full Article...</p>
        </Link>
      </div>
    </div>
  );
};

export default Article;
