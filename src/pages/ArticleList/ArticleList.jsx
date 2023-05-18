// components
import ArticleCategory from "../../components/ArticleCategory/ArticleCategory";

// css
import styles from './ArticleList.module.css'

const ArticleList = (props) => {
  const categorizedArticles = {};
  props.articles.forEach(article => {
    if(categorizedArticles[article.category[0]]) 
      categorizedArticles[article.category[0]].push(article)
    else
      categorizedArticles[article.category[0]] = [article]
  })

  const categories = Object.keys(categorizedArticles)

  if(categories.includes('top')){
    const topCategory = categories.splice(categories.indexOf('top'), categories.indexOf('top'))
    categories.unshift(topCategory[0])
  }   

  return (
    <>
      {categories.map((category, idx) => (
        <ArticleCategory 
          key={idx} 
          category={category}
          articles={categorizedArticles[category]}
        />
      ))}
    </>
  )
}

export default ArticleList