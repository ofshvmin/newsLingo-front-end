// components
import DateCard from '../DateCard/DateCard'

// assets
import profileImg from '../../assets/icons/profilePlaceholder.png'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({ content }) => {

  const photo = content.author.photo ? content.author.photo : profileImg

  return (
    <div className={styles.authorInfo}>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h5>{content.author.name}</h5>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo