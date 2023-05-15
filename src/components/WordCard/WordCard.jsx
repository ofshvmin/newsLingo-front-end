// css
import styles from './WordCard.module.css'


const WordCard = ({word}) => {
  return (
    <main className={styles.container}>
      <h1>{word.word}</h1>
      {word.translation.map((translation,idx) => 
        <h3 key={idx}>{translation}</h3>
        )}
      <h1>{word.partOfSpeech}</h1>
    </main>
  )
}

export default WordCard