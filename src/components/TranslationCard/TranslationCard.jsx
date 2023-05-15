
// css
import styles from './TranslationCard.module.css'

const TranslationCard = (props) => {
  console.log('Translation props', props);
  if(!props.translation[0].translations) return <p>No translation</p>

  return (
    <div>
      {props.translation[0]?.queryWord}
      {props.translation[0].translations.map((translation, idx) => (
        <p key={idx}>{translation}</p>
      ))}
    </div>
  )
}

export default TranslationCard