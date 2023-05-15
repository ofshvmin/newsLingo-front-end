
// css
import styles from './TranslationCard.module.css'

const TranslationCard = (props) => {
  console.log('Translation props', props);
  if(!props.translation[0].translations) return <p>No translation</p>

  const translations = props.translation[0].translations.join('\n')

  return (
    <div>
      <form action="">
        <input 
          type="text" 
          value={props.translation[0]?.queryWord}
          disabled={true}
        />
        <textarea 
          readOnly 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          value={translations}>
        </textarea>
        <button type="submit">Favorite</button>
      </form>
    </div>
  )
}

export default TranslationCard