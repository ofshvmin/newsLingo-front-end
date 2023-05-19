// npm modules
import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"

// services
import * as articleService from '../../services/articleService'

//css
import styles from './EditComment.module.css'

const EditComment = () => {
  const {state} = useLocation()
  const {articleId, commentId} = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await articleService.updateComment(articleId, commentId, formData)
    navigate(`/articles/${articleId}`)
  }

  return (
    <main className={styles.editComment}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Comment</h1>
        <textarea
          required
          type="text"
          name="text" 
          id="text-input"
          value={formData.text}
          placeholder="Text"
          onChange={handleChange}
          rows={3}
        />
        <button type="submit" className="uniButton">Save</button>
      </form>
    </main>
  )
}

export default EditComment