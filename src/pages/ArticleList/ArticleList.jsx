// components
import ArticleCard from "../../components/ArticleCard/ArticleCard"

// css
import styles from './ArticleList.module.css'

const ArticleList = (props) => {
  //console.log("ARTICLE LIST", props.articles);

  const categorizedArticles = {};
  props.articles.forEach(article => {
    if(categorizedArticles[article.category[0]]) 
      categorizedArticles[article.category[0]].push(article)
    else
      categorizedArticles[article.category[0]] = [article]
  })

  console.log("CAT ARTICLES", categorizedArticles);

  return (
    <main className={styles.container}>
      {props.articles.map(article => (
        <ArticleCard key={article._id} article={article}/>
      ))}
    </main>
  )
}

export default ArticleList