// npm modules
import { Link } from "react-router-dom"

const ArticleCard = ({article}) => {
  return (  
    <Link to={`/articles/${article._id}`}>
      <article>
        <h5>{article.creator[0]}</h5>
        <h1>{article.title}</h1>
        <img src={article.image_url} alt={article.title} />
      </article>
    </Link>
  )
}

export default ArticleCard