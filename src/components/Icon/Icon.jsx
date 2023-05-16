// assets
import favorite from '../../assets/icons/favorite.svg'

const Icon = ({ category }) => {
  const icons = {
    Favorite: favorite,

    
  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}

export default Icon