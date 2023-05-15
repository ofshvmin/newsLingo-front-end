// css
import styles from './TranslationCard.module.css'

const TranslationCard = (props) => {

  console.log('Translation props', props);
  if(!props.translation[0].translations) return <p>No translation</p>

  const translations = props.translation[0].translations.join('\n')

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
    // <div >
      <form onSubmit={handleSubmit} className={styles.container}>
        <input 
          name="word"
          // type="text"
          value={props.translation[0]?.queryWord}
          readOnly
        />
        <textarea
          name="translation"  
          value={translations}
          readOnly>
        </textarea>
        <input
          name="partOfSpeech"
          // type="text" 
          value={props.translation[0]?.partOfSpeech}
          readOnly
        />
        <button type="submit">Favorite</button>
      </form>
    // </div>
  )
}

export default TranslationCard