// npm modules
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// css
import styles from './ArticleDetails.module.css'

// services
import * as articleService from '../../services/articleService'

// pages
// import Loading from "../Loading/Loading"

// components


const ArticleDetails = (props) => {
  const {articleId} = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await articleService.show(articleId)
      setArticle(data)
    }
    fetchArticle()
  }, [articleId])

  // if (!article) return <Loading />
  
  return (
    <main className={styles.container}>
      <article>
        This is an article
        {article.content}
      </article>

    </main>
  )
}

export default ArticleDetails