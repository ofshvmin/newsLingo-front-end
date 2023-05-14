// css
import styles from './ArticleHeader.module.css'

const ArticleHeader = (props) => {
  return (
    <header className={styles.container}>
      <h4>{props.category}</h4>
      <h1>{props.title}</h1>
      <h5>{props.pubDate}</h5>
      <h5>By {props.creator}</h5>
      <img src={props.image_url} alt={props.title} />
    </header>
  )
}

export default ArticleHeader