// components
import ArticleCard from "../../components/ArticleCard/ArticleCard"

// css
import styles from './ArticleList.module.css'

const ArticleList = (props) => {
  return (
    <main className={styles.container}>
      {props.articles.map(article => (
        <ArticleCard key={article._id} article={article}/>
      ))}
    </main>
  )
}

export default ArticleList