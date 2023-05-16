// css
import styles from './TranslationCard.module.css'

const TranslationCard = (props) => {

  console.log('Translation props', props);
  if(!props.translation[0].translations) return <p>No translation</p>

  const translations = props.translation[0].translations.join(', ')

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
    <form onSubmit={handleSubmit} className={styles.container}>
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
      <div className={styles.button}>
        <button type="submit">❤️</button>
      </div>
    </form>
  )
}

export default TranslationCard