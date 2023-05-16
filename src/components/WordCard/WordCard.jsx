// css
import styles from './WordCard.module.css'
import { useState } from 'react'


const WordCard = ({word, handleDeleteWord}) => {
  const [showDefinition, setShowDefinition] = useState(false)

  const handleWordCardClick = () => {
    setShowDefinition(!showDefinition)
  }
  return (
    <div className={styles.container}  id={styles.flip} onClick={handleWordCardClick}>
      {/* <h1>{word.word}</h1>
      {word.translation.map((translation,idx) => 
        <h3 key={idx}>{translation}</h3>
        )}
      <h4>{word.partOfSpeech}</h4> */}
    {showDefinition ? 
      <>
      {word.translation.map((translation, idx) => 
      <>
        <h3 key={idx}>{translation}</h3>
        <h4>({word.partOfSpeech})</h4>
      </>
      )}
      </>   
      : 
    
    
    <h1>{word.word}</h1>}

      <button onClick={()=>handleDeleteWord(word._id)}>❌</button>
      </div>
  )
}

export default WordCard