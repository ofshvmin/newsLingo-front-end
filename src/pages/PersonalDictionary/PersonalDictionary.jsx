// components
import WordCard from '../../components/WordCard/WordCard'

// services
import * as wordService from '../../services/wordService'

// css
import styles from './PersonalDictionary.module.css'

//npm modules
import { useState, useEffect } from 'react'


const PersonalDictionary = (props) => {

  const [dictionary, setDictionary] = useState(null)

  useEffect(() => {
    const fetchDictionary = async () => {
      const data = await wordService.indexDictionary()

      console.log(data)
      setDictionary(data)
    }
    if (props.user) fetchDictionary()
  }, [props.user])

  return (
    <main className={styles.container}>
      {!dictionary ? 'No Words' :
        dictionary.map(word => (
          <WordCard key={word._id} word={word}/>
        ))
      }
    </main>
  )
}

export default PersonalDictionary