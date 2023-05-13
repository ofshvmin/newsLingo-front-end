// components
import ArticleCard from "../../components/ArticleCard/ArticleCard"

const ArticleList = (props) => {
  return (
    <main>
      {props.articles.map(article => (
        <ArticleCard key={article._id} article={article}/>
      ))}
    </main>
  )
}

export default ArticleList