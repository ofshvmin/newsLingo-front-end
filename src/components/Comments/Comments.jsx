import CommentCard from "../CommentCard/CommentCard"

// css
import styles from './Comments.module.css'

const Comments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <>
      {props.comments.map(comment => (
        <CommentCard
          key={CommentCard._id}
          comment={comment}
          user={props.user}
        />
      ))}
    </>
  )
}

export default Comments