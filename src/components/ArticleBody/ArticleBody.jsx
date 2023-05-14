// components
import Word from '../Word/Word'

// css
import styles from './ArticleBody.module.css'

// npm modules
import { useState, useEffect } from 'react'

const ArticleBody = (props) => {
  const [words, setWords] = useState([])

  useEffect(() => {
    setWords(props.content.split(' '))
  }, [props.content])

  return (
    <article className={styles.container}>
      {words.map((word, idx) => (
        <Word 
          key={idx} 
          word={word}
        />  
      ))}
    </article>
  )
}

export default ArticleBody