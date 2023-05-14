// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

// css
import styles from './CommentCard.module.css'

const CommentCard = ({comment}) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard