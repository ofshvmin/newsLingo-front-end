// css
import styles from './WordCard.module.css'
import { useState } from 'react'
// import Icon from '../Icon/Icon'

const WordCard = ({word, handleDeleteWord, dictionary}) => {
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

  const partOfSpeechArr = word.partOfSpeech.map((part => part))
  const wordObj = word.translation.map((translation, idx) => {
    return {
      translation: translation,
      partOfSpeech: partOfSpeechArr[idx]
    }
  })
  
  console.log("WordObj: ", wordObj);

  return (
    <div className={styles.wordContainer}  id={ flipCard ? styles.flip : "" } onClick={handleWordCardClick}>
      <img className="wordIcon" id="flip" src="/src/assets/icons/flip.svg" alt="turn card" />
      <button onClick={ ()=>{handleDeleteWord(word._id) ; setFlipCard(false) }
          }>
        <img className="wordIcon" id="trash" src="/src/assets/icons/trash.svg" alt="delete word" />
      </button>
    {showDefinition ? 
      <>
      {wordObj.map((wordEl, idx) => 
        <>
          <h3>{wordEl.translation}</h3>
          <h4>({wordEl.partOfSpeech})</h4>
        </>
        )}
  
      </>   

      : 
     
      
      <h1>{word.word}</h1>}

      </div>
  )
}

export default WordCard