// npm modules
import { Link } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

// css
import styles from './CommentCard.module.css'

const CommentCard = ({comment, articleId, user, handleDeleteComment}) => {
  return (
    <article className={styles.commentCard}>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <div className="actions">
              <Link to={`/articles/${articleId}/comments/${comment._id}`} state={comment}>
                Edit
              </Link>
              <button onClick={()=> handleDeleteComment(articleId, comment._id)}>Delete</button>
            </div>
          }
        </span>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard