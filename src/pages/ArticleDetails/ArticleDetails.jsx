// npm modules
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

// css & assets
import styles from './ArticleDetails.module.css'
import articleImgPlaceholder from '../../assets/icons/no-image-icon.png'

// services
import * as articleService from '../../services/articleService'
import * as wordService from '../../services/wordService.js'

// pages
import Loading from "../Loading/Loading"

// components
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader"
import ArticleBody from "../../components/ArticleBody/ArticleBody"
import WordLookup from "../../components/WordLookup/WordLookup"
import NewComment from "../../components/NewComment/NewComment"
import Comments from "../../components/Comments/Comments"

const ArticleDetails = (props) => {
  const {articleId} = useParams()
  const [article, setArticle] = useState(null)
  const [translations, setTranslations] = useState([])

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await articleService.show(articleId)
      console.log(data)
      setArticle(data)
    }
    fetchArticle()
  }, [articleId])

  const handleAddComment = async (commentFormData) => {
    const newComment = await articleService.createComment(articleId, commentFormData)
    setArticle({ ...article, comments: [...article.comments, newComment]})
  }
  const handleAddWord = async (translationCardFormData) => {
    await wordService.createWord(translationCardFormData)
  }

  const handleDeleteComment = async (articleId, commentId) => {
    await articleService.deleteComment(articleId, commentId)
    setArticle({...article, comments: article.comments.filter(comment => comment._id !== commentId)})
  }

  const handleFetchDefinition = async (query) => {
    const data = await wordService.getTranslationFromAPI(query.toLowerCase())

    console.log('Data', data);

    // If API has a translation...
    if(data[0].hwi) {
      // filter out unrelated translations (merriam-webster was sometimes giving additional translations for unrelated words)
      const noAccentQuery = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

      console.log('No accent query', noAccentQuery);

      const filteredData = data.filter(element => (element.meta.stems.includes(query.toLowerCase()) || element.meta.stems.includes(noAccentQuery)) && element.meta.lang === 'es')

      console.log("First filter", filteredData);
      
      // parse/simplify the results of the api call into 3 properties for each translation
      const newWordTranslations = filteredData.map(entry => {
        const translationInfo = {}
        translationInfo.queryWord = entry.hwi.hw
        translationInfo.partOfSpeech = entry.fl
        translationInfo.translations = entry.shortdef.map(def => def)
        return translationInfo
      })

      console.log('Final translation parse: ', newWordTranslations);
      setTranslations([newWordTranslations, ...translations])
      console.log('Translations state', translations);
    } else {
      // merriam-webster returns alternative search suggestions when it can't find a given word
      console.log("Word not found. Alternate search suggestions:", data);
      setTranslations([data, ...translations])

    }
  }

  if (!article) return <Loading />

  const creator = article.creator ? article.creator[0] : "NO CREATOR FOUND"
  const image_url = article.image_url ? article.image_url : articleImgPlaceholder

  return (
    <main className={styles.articleDetails}>
      <ArticleHeader 
        title={article.title}
        creator={creator} 
        pubDate={article.pubDate} 
        category={article.category}
        image_url={image_url}
      />
      <ArticleBody 
        content={article.content}
        handleFetchDefinition={handleFetchDefinition}
      />
      <WordLookup 
        translations={translations}
        handleAddWord={handleAddWord}
      />
      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment}/>
        <Comments 
          comments={article.comments} 
          user={props.user} 
          articleId={articleId}
          handleDeleteComment={handleDeleteComment}
        />
      </section>
    </main>
  )
}

export default ArticleDetails