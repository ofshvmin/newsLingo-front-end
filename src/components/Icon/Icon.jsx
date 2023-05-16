// assets
import favorite from '../../assets/icons/favorite.svg'
import flip from '../../assets/icons/flip.svg'

const Icon = ({ category }) => {
  const icons = {
    Favorite: favorite,
    Flip: flip,

    
  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}

export default Icon
