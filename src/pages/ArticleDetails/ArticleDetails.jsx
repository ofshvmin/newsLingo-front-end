// npm modules
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// css & assets
import styles from './ArticleDetails.module.css'
import articleImgPlaceholder from '../../assets/icons/no-image-icon.png'

// services
import * as articleService from '../../services/articleService'

// pages
// import Loading from "../Loading/Loading"

// components
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader"
import ArticleBody from "../../components/ArticleBody/ArticleBody"
// import WordLookup from "../../components/WordLookup/WordLookup"

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

  if (!article) return <Loading />

  // const creator = article.creator ? article.creator[0] : "NO CREATOR"
  // const image_url = article.image_url ? article.image_url : articleImgPlaceholder

  return (
    <main className={styles.container}>
      <article>
        <ArticleHeader 
          title={article.title}
          // creator={creator} 
          // pubDate={article.pubDate} 
          // image_url={img}
          // category={article.category}
        />
        {/* <ArticleBody 
          content={article.content}
        /> */}
      </article>

    </main>
  )
}

export default ArticleDetails