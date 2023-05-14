// npm modules
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// css & assets
import styles from './ArticleDetails.module.css'
import articleImgPlaceholder from '../../assets/icons/no-image-icon.png'

// services
import * as articleService from '../../services/articleService'

// pages
import Loading from "../Loading/Loading"

// components
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader"
import ArticleBody from "../../components/ArticleBody/ArticleBody"
import WordLookup from "../../components/WordLookup/WordLookup"
import NewComment from "../../components/NewComment/NewComment"

const ArticleDetails = () => {
  const {articleId} = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await articleService.show(articleId)
      console.log(data)
      setArticle(data)
    }
    fetchArticle()
  }, [articleId])

  const handleAddComment = async (commentFormData) => {
    const newComment = await articleService.createComment (articleId, commentFormData)
    setArticle({ ...article, comments: [...article.comments, newComment]})
  }

  if (!article) return <Loading />

  const creator = article.creator ? article.creator[0] : "NO CREATOR FOUND"
  const image_url = article.image_url ? article.image_url : articleImgPlaceholder

  return (
    <main className={styles.container}>
        <ArticleHeader 
          title={article.title}
          creator={creator} 
          pubDate={article.pubDate} 
          category={article.category}
          image_url={image_url}
        />
        <ArticleBody 
          content={article.content}
        />
        <WordLookup />
        <section>
          <h1>Comments</h1>
          <NewComment handleAddComment={handleAddComment}/>
        </section>
    </main>
  )
}

export default ArticleDetails