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