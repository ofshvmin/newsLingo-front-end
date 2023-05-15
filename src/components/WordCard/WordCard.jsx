// css
import styles from './WordCard.module.css'


const WordCard = ({word, handleDeleteWord}) => {
  return (
    <main className={styles.container}>
      <h1>{word.word}</h1>
      {word.translation.map((translation,idx) => 
        <h3 key={idx}>{translation}</h3>
        )}
      <h1>{word.partOfSpeech}</h1>
      <button onClick={()=>handleDeleteWord(word._id)}>Delete</button>
    </main>
  )
}

export default WordCard