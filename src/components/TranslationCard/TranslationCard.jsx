import { useState } from 'react'

// css
import styles from './TranslationCard.module.css'

const TranslationCard = (props) => {
  // const [formData, setFormData] = useState({
  //   word: '',
  //   translation: [],
  //   partOfSpeech: ''
  // })

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
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="word"
          type="text" 
          value={props.translation[0]?.queryWord}
          disabled={true}
          />
        <textarea
          name="translation" 
          readOnly  
          id="" 
          cols="30" 
          rows="10" 
          value={translations}>
        </textarea>
        <input 
          readOnly
          name="partOfSpeech"
          type="text" 
          value={props.translation[0]?.partOfSpeech}
        />
        <button type="submit">Favorite</button>
      </form>
    </div>
  )
}

export default TranslationCard