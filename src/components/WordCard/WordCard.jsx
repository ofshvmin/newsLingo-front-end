// css
import styles from './WordCard.module.css'
import { useState } from 'react'
// import Icon from '../Icon/Icon'

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
      <img className="wordIcon" id="flip" src="/src/assets/icons/flip.svg" alt="turn card" />
      <button onClick={ ()=>{handleDeleteWord(word._id) ; setFlipCard(false) }
          }>
        <img className="wordIcon" id="trash" src="/src/assets/icons/trash.svg" alt="delete word" />
      </button>
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

      </div>
  )
}

export default WordCard