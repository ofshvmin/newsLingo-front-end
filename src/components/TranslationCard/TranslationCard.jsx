// css
import styles from './TranslationCard.module.css'

// components
// import Icon from "../Icon/Icon"

const TranslationCard = (props) => {

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = {
      word: props.translation[0]?.queryWord,
      translation: props.translation.map(t => t.translations.join(', ')),
      partOfSpeech: props.translation.map(t => t.partOfSpeech),
    }
    console.log('FORM DATA:',formData)
    props.handleAddWord(formData)
  }

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
  if(onlyHasRelatedWords) return (
    <main className={styles.translationCard}>
      <div className={styles.relatedWords}>
        <p>No translation found but view <span>related words:</span></p>
        <p>{props.translation.filter((word, idx)=> idx<5).join(', ')}</p>
      </div>
    </main>
  )

  const hasNoRelatedWords = !props.translation[0].translations.length
  if(hasNoRelatedWords) return (
    <main className={styles.translationCard}>
      <div className={styles.relatedWords}>
        <p>No translation found.</p>
        <p>Word found but NO related words.</p>
      </div>
    </main>
  )

  return (
    <main className={styles.translationCard}>
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
    </main>
  )
}

export default TranslationCard