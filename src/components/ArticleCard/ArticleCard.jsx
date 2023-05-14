// npm modules
import { Link } from "react-router-dom"

// css & assets
import styles from './ArticleCard.module.css'
import articleImgPlaceholder from '../../assets/icons/no-image-icon.png'

const ArticleCard = ({article}) => {
  const creator = article.creator ? article.creator[0] : "NO CREATOR FOUND"
  const image_url = article.image_url ? article.image_url : articleImgPlaceholder

  return (  
    <Link to={`/articles/${article._id}`}>
      <article className={styles.container}>
        <header>
          <h4>{creator}</h4>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>
          <img src={image_url} alt={article.title} />
      </article>
    </Link>
  )
}

export default ArticleCard