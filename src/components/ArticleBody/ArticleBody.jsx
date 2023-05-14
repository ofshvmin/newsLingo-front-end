
// css
import styles from './ArticleBody.module.css'

const ArticleBody = (props) => {
  return (
    <article>
      {props.content}
    </article>
  )
}

export default ArticleBody