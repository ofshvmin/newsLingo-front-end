// npm modules
import { Link } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

// css
import styles from './CommentCard.module.css'

const CommentCard = ({comment, articleId, user, handleDeleteComment}) => {
  
  return (
    <article className={styles.commentCard}>
      <div className={styles.text}>
        <header>
          <AuthorInfo content={comment} />
        </header>
        <p>{comment.text}</p>
      </div>
      {comment.author._id === user.profile &&
        <div className={styles.actions}>
          <button className="uniButton">
            <Link to={`/articles/${articleId}/comments/${comment._id}`} state={comment}>
              Edit
            </Link>
          </button >
          <button className="uniButton" onClick={()=> handleDeleteComment(articleId, comment._id)}>
            Delete
          </button>
        </div>
      }
    </article>
  )
}

export default CommentCard