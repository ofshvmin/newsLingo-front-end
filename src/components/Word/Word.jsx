
// css
import styles from './Word.module.css'

const Word = (props) => {

  const handleClick = () => {
    console.log('Word is', props.word);
  }

  return (
    <>
      <span> </span>
      <span 
        onClick={handleClick} 
        className={styles.wordElement}
      >
        {props.word}</span>
    </>
  )
}

export default Word