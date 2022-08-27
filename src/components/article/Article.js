import "./article.css";

const Article = ({ imgURL, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgURL} alt="blog" />
      </div>

      <div className="gpt3__blog-container_article-content">
        <div>
          <small>{date}</small>
          <h3>{title}</h3>
        </div>

        <span>Read Full Article</span>
      </div>
    </div>
  );
};

export default Article;
