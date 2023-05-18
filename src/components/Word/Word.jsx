// resources
import { alphabet } from './alphabet'

// css
import styles from './Word.module.css'

const Word = (props) => {

  const handleClick = () => {
    props.handleFetchDefinition(props.word)
  }

  const regExp = /[a-zA-Z]/g;

  // If current word contains letters, render a clickable component
  if(regExp.test(props.word)) {
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
  } else {
    return (
      <>
        <span>{props.word}</span>
      </>
    )
}
}

export default Word