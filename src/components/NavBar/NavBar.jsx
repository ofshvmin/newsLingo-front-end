// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">Log In</NavLink></li>
      <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to={`/words/${user.profile}/dictionary`}>My Dictionary</NavLink>
      </li>
      <li><NavLink to="/articles">News</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
      {/* <li><NavLink to="/auth/change-password">Change Password</NavLink></li> */}
    </ul>
  )

  return (
    <nav className={styles.container}>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

// const NavBar = ({ user, handleLogout }) => {
//   return (
//     <nav className={styles.container}>
//       {user ?
//         <ul>
//           <li>{user.name}</li>
//           {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
//           <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
//           {/* <li><NavLink to="/auth/change-password">Change Password</NavLink></li> */}
//         </ul>
//       :
//         <ul>
//           <li><NavLink to="/auth/login">Log In</NavLink></li>
//           <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
//         </ul>
//       }
//     </nav>
//   )
// }
export default NavBar
