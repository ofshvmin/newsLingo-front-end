import { useState } from 'react'

// css
import styles from './TranslationCard.module.css'

// components
import Word from '../Word/Word'
// import Icon from "../Icon/Icon"

const TranslationCard = (props) => {
  const [favorite, setFavorite] = useState(false)
    
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = {
      word: props.translation[0]?.queryWord,
      translation: props.translation.map(t => t.translations.join(', ')),
      partOfSpeech: props.translation.map(t => t.partOfSpeech),
    }      
    if(!favorite) {
      console.log('FORM DATA:',formData)
      props.handleAddWord(formData)
      setFavorite(!favorite)
    } else {
      let word = props.dictionary.find(fav => fav.word === formData.word)
      let wordId = word._id
      props.handleDeleteWord(wordId)
      setFavorite(!favorite)
    }
  }

  console.log("CARD PROPS", props);

  const hasData = !!props.translation.length
  if(!hasData) return (
    <main className={styles.translationCard}>
      <div className={styles.relatedWords}>
          <p>No translation found.</p>
          <p>No word found.</p>
        </div>
    </main>
  )

  const onlyHasRelatedWords = !props.translation[0].translations
  if(onlyHasRelatedWords) {
    const relatedWords = props.translation.filter((word, idx) => idx < 5)
    return (
      <main className={styles.translationCard}>
        <div className={styles.relatedWords}>
          <p>No translation found but view <span>related words:</span></p>
          <p>{relatedWords.map((word,idx) => (
            <Word 
              key={idx}
              word={word}
              handleFetchDefinition={props.handleFetchDefinition}
            />
            ))
          }</p>
          {/* <p>{props.translation.filter((word, idx)=> idx<5).join(', ')}</p> */}
        </div>
      </main>
    )
  } 

  // const hasNoRelatedWords = !props.translation[0].translations.length
  const hasNoRelatedWords = props.translation.every(translation => {
    !translation.translations.length
  })
  if(hasNoRelatedWords) return (
    <main className={styles.translationCard}>
      <div className={styles.relatedWords}>
        <p>No translation found.</p>
        <p>Word found but NO related words.</p>
      </div>
    </main>
  )

  const finalTranslations = props.translation.filter(translation => (
    translation.partOfSpeech && translation.translations.length
  ))

  return (
    <main className={styles.translationCard}>
      <form onSubmit={handleSubmit} >
        {finalTranslations.map((translation, idx) => (
          <>
            <input 
              name="word"
              value={translation.queryWord}
              readOnly
              className={styles.word}
            />
            <input
              name="partOfSpeech"
              value={translation.partOfSpeech}
              readOnly
              className={styles.partOfSpeech}
            />
            <textarea 
              name="translation"
              value={translation.translations?.join(', ')}
              type="text"
              readOnly
              className={styles.translation}
            >
            </textarea>
          </>
        ))}
        <div className={styles.favorite}>
          {/* <button type="submit"><Icon category="Favorite"/></button> */}
          <button type="submit">
            {favorite || props.isFavorite ?
            <img className="wordIcon" id="favorite" src="/src/assets/icons/favorited.svg" alt="a heart icon" />
            :
            <img className="wordIcon" id="favorite" src="/src/assets/icons/favorite.svg" alt="a heart icon" />
            }
          </button>
        </div>
      </form>
    </main>
  )
}

export default TranslationCard