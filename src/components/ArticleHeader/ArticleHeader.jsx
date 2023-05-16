// css
import styles from './ArticleHeader.module.css'

const ArticleHeader = (props) => {

  return (
    <header className={styles.articleHeader}>
      <h3>{props.category[0].toUpperCase()}</h3>
      <h1>{props.title}</h1>
      <h4>{props.pubDate}</h4>
      <h4>{props.creator}</h4>
      <img src={props.image_url} alt={props.title} />
    </header>
  )
}

export default ArticleHeader