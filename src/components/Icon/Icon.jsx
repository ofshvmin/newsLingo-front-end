// assets
import favorite from '../../assets/icons/favorite.svg'
import favorited from '../../assets/icons/favorited.svg'
import flip from '../../assets/icons/flip.svg'
import trash from '../../assets/icons/trash.svg'

console.log(flip);

const Icon = ({ category }) => {
  const icons = {
    Favorite: favorite,
    Favorited: favorited,
    Flip: flip,
    Trash: trash,
  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}

export default Icon
