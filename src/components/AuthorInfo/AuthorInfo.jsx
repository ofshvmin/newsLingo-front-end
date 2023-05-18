// components
import DateCard from '../DateCard/DateCard'

// assets
import profileIcon from '../../assets/icons/profile.svg'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({ content }) => {
  return (
    <div className={styles.authorInfo}>
      <img src={content.author.photo || profileIcon}/>
      <section>
        <h5>{content.author.name}</h5>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo