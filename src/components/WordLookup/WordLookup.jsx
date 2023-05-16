
// css
import styles from './WordLookup.module.css'

// components
import TranslationCard from '../TranslationCard/TranslationCard'

const WordLookup = (props) => {
  console.log("Translations from word lookup", props.translations);
  return (
    <aside className={styles.wordLookup}>
      {props.translations.map((translation, idx) =>
        <TranslationCard 
          key={idx} 
          translation={translation}
          handleAddWord={props.handleAddWord}
          dictionary={props.dictionary}
        />
      )}
    </aside>
  )
}

export default WordLookup