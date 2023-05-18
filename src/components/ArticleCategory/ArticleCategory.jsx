// components
import ArticleCard from "../ArticleCard/ArticleCard";

// css
import styles from './ArticleCategory.module.css'

const ArticleCategory = (props) => {
  console.log('ART CAT PROPS', props);

  if(!props.category) return

  return (
    <>
      <h1 className={styles.categoryTitle}>{props.category.toUpperCase()}</h1>
      <main className={styles.container}>
        {props.articles.map(article => (
          <ArticleCard key={article._id} article={article}/>
        ))}
      </main>
    </>
  )
}

export default ArticleCategory;