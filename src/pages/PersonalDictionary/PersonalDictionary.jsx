// components
import WordCard from '../../components/WordCard/WordCard'

// css
import styles from './PersonalDictionary.module.css'


const PersonalDictionary = ({dictionary, handleDeleteWord}) => {
  return (
    <main className={styles.dictionaryContainer}>
      {!dictionary.length ? 'No Words' :
        dictionary.map(word => (
          <WordCard 
            key={word._id} 
            word={word}
            handleDeleteWord={handleDeleteWord}
          />
        ))
      }
    </main>
  )
}

export default PersonalDictionary