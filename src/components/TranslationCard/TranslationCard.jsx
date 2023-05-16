// css
import styles from './TranslationCard.module.css'

// components
// import Icon from "../Icon/Icon"

const TranslationCard = (props) => {

  console.log('Translation props', props);

  // const translations = props.translation[0]?.translations?.join(', ')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = {
      word: props.translation[0]?.queryWord,
      translation: props.translation.map(t => t.translations.join(', ')),
      // translation: translations
      partOfSpeech: props.translation.map(t => t.partOfSpeech),
      // partOfSpeech: props.translation[0]?.partOfSpeech
    }
    props.handleAddWord(formData)
  }

  return (
    <main className={styles.translationCard}>
      {!props.translation.length ?
        <div className={styles.relatedWords}>
          <p>No translation found.</p>
          <p>No word found.</p>
        </div>
        :
        !props.translation[0]?.translations ?
          <div className={styles.relatedWords}>
            <p>No translation found but view <span>related words:</span></p>
            <p>{props.translation.filter((word, idx)=> idx<5).join(', ')}</p>
          </div>
          :
          !props.translation[0].translations.length ?
            <div className={styles.relatedWords}>
              <p>No translation found.</p>
              <p>Word found but NO related words.</p>
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
                value={props.translation[0]?.translations?.join(', ')}
                type="text"
                readOnly
                className={styles.translation}
              >
              </textarea>
              <div className={styles.button}>
                {/* <button type="submit"><Icon category="Favorite"/></button> */}
                <button type="submit">❤️</button>
              </div>
            </form>
      }
    </main>
  )
}

export default TranslationCard