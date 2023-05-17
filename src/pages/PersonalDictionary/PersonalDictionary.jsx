// components
import WordCard from '../../components/WordCard/WordCard'

// css
import styles from './PersonalDictionary.module.css'


const PersonalDictionary = ({dictionary, handleDeleteWord}) => {
  console.log("PERSONAL DICTIONARY",dictionary);
  return (
    <main className={styles.dictionaryContainer}>
      {!dictionary.length ? 'No Words' :
        dictionary.map(word => (
          <WordCard 
            key={word._id} 
            word={word}
            handleDeleteWord={handleDeleteWord}
            dictionary={dictionary}
          />
        ))
      }
    </main>
  )
}

export default PersonalDictionary