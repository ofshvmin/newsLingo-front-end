// components
import WordCard from '../../components/WordCard/WordCard'

// services
import * as wordService from '../../services/wordService'

// css
import styles from './PersonalDictionary.module.css'

//npm modules
import { useState, useEffect } from 'react'


const PersonalDictionary = (props) => {
  const [dictionary, setDictionary] = useState([])

  useEffect(() => {
    const fetchDictionary = async () => {
      const data = await wordService.indexDictionary()

      console.log(data)
      setDictionary(data)
    }
    if (props.user) fetchDictionary()
  }, [props.user])

  const handleDeleteWord = async (wordId) => {
    await wordService.deleteWord(wordId)
    setDictionary(dictionary.filter(word => word._id !== wordId))
  }

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