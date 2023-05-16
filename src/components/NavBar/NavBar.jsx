// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <NavLink id={styles.links} to="/auth/login"><li className={styles.mainNavBtns}>Log In</li></NavLink>
      <NavLink id={styles.links} to="/auth/signup"><li id={styles.logout}>Sign Up</li></NavLink>
    </ul>
  )

  const protectedLinks = (
    <ul>
      {user ?
        <h4 id={styles.welcome}>Welcome back, {user.name}!</h4>
        :
        ''
      }
      <NavLink id={styles.links} to={`/words/${user?.profile}/dictionary`}><li className={styles.mainNavBtns}>My Dictionary</li></NavLink>
      <NavLink id={styles.links} to="/articles"><li className={styles.mainNavBtns}>News</li></NavLink>
      <NavLink id={styles.links} to="" onClick={handleLogout}><li id={styles.logout}>Log Out</li></NavLink>
      {/* <li><NavLink to="/auth/change-password">Change Password</NavLink></li> */}
    </ul>
  )

  return (
    <nav className={styles.navContainer}>
      <NavLink id={styles.links} to={`/`}><h2>NewsLingo</h2></NavLink>

      {user ? 
        protectedLinks : publicLinks}
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
