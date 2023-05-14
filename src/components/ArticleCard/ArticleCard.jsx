// npm modules
import { Link } from "react-router-dom"

// assets
import articleImgPlaceholder from '../../assets/icons/no-image-icon.png'

// css
import styles from './ArticleCard.module.css'

const ArticleCard = ({article}) => {
  return (  
    <Link to={`/articles/${article._id}`}>
      <article className={styles.container}>
        { article.creator ?
          <h5>{article.creator[0]}</h5>
          :
          <h5>No Creator</h5>
        }
        <h1>{article.title}</h1>
        { article.image_url ?
          <img src={article.image_url} alt={article.title} />
          :
          <img src={articleImgPlaceholder} alt={article.title} />
        }
      </article>
    </Link>
  )
}

export default ArticleCard