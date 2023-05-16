// css
import styles from './WordCard.module.css'
import { useState } from 'react'


const WordCard = ({word, handleDeleteWord}) => {
  const [showDefinition, setShowDefinition] = useState(false)
  const [flipCard, setFlipCard] = useState(false)


  
  const triggerAnimation = () => {
    setFlipCard(true)
    setTimeout(() => {
      setFlipCard(false)
    }, 500)

  }

  const handleWordCardClick = () => {
    triggerAnimation()
    setShowDefinition(!showDefinition)
  }
  return (
    <div className={styles.wordContainer}  id={ flipCard ? styles.flip : "" } onClick={handleWordCardClick}>
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