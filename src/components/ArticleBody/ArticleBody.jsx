// components
import Word from '../Word/Word'

// css
import styles from './ArticleBody.module.css'

// npm modules
import { useState, useEffect } from 'react'

//services
import wordService from '../../services/wordService.js'

const ArticleBody = (props) => {
  const [words, setWords] = useState([])
  let isStartQuote = false;

  const handleFetchDefinition = async (query) => {
    const data = await wordService.getTranslationFromAPI(query.toLowerCase())
    console.log("Translation res:", data);
  }

  useEffect(() => {
    //Found base regex here: https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript 
    setWords(props.content.split(/([\s,.(...)?¿¡!;:"“”]+)/))
  }, [props.content])

  return (
    <article className={styles.container}>
      {words.map((word, idx) => {
        if(word.includes('"')) isStartQuote = true;
        else isStartQuote = false;
        return(
          <Word 
            key={idx} 
            word={word}
          />     
        )
      }
      )}
    </article>
  )
}

export default ArticleBody