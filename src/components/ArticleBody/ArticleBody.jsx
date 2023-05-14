
// css
import styles from './ArticleBody.module.css'

const ArticleBody = (props) => {
  return (
    <article className={styles.container}>
      <p>{props.content}</p>
    </article>
  )
}

export default ArticleBody