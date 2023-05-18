// npm modules
import { Link } from "react-router-dom"

// css & assets
import styles from './ArticleCard.module.css'
import articleImgPlaceholder from '../../assets/branding/logo.png'

const ArticleCard = ({article}) => {
  const image_url = article.image_url ? article.image_url : articleImgPlaceholder
  const country = article.country ? article.country[0] : ''

  return (  
    <Link to={`/articles/${article._id}`}>
      <article className={styles.articleCard}>
        <img src={image_url} alt={article.title} />
        <header className={styles.articleCardHeader}>
          <h4>⏰ {article.pubDate.slice(0,10)}</h4>
          {country.length ? 
          <h4>{country.toUpperCase()}</h4>
          : ''
          }
          <h4>{article.creator}</h4>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>
      </article>
    </Link>
  )
}

export default ArticleCard