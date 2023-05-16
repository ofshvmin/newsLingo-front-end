// css
import styles from './TranslationCard.module.css'

// components
// import Icon from "../Icon/Icon"

const TranslationCard = (props) => {

  console.log('Translation props', props);

  const translations = props.translation[0]?.translations?.join(', ')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = {
      word: props.translation[0]?.queryWord,
      translation: translations,
      partOfSpeech: props.translation[0]?.partOfSpeech
    }
    props.handleAddWord(formData)
  }

  return (
    <main className={styles.translationCard}>
      {!props.translation.length ?
        <p>No translation found.</p>
        :
      !props.translation[0]?.translations ?
        <div className={styles.relatedWords}>
          <p>No translation found.</p>
          <p>Related words: {props.translation.filter((word, idx)=> idx<5).join(', ')}</p>
        </div>
      :
        <form onSubmit={handleSubmit} >
          <input 
            name="word"
            value={props.translation[0]?.queryWord}
            readOnly
            className={styles.word}
          />
          <input
            name="partOfSpeech"
            value={props.translation[0]?.partOfSpeech}
            readOnly
            className={styles.partOfSpeech}
          />
          <textarea 
            name="translation"
            value={translations}
            type="text"
            readOnly
            className={styles.translation}
          >
          </textarea>
          <div className={styles.favorite}>
            {/* <button type="submit"><Icon category="Favorite"/></button> */}
            <button type="submit">

              <img className="wordIcon" id="favorite" src="/src/assets/icons/favorite.svg" alt="a heart icon" />
            </button>
          </div>
        </form>
      
    }
    </main>
  )
}

export default TranslationCard