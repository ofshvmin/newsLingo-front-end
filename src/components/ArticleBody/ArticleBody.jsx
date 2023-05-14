
// css
import styles from './ArticleBody.module.css'

const ArticleBody = (props) => {
  return (
    <article>
      <p>{props.content}</p>
    </article>
  )
}

export default ArticleBody