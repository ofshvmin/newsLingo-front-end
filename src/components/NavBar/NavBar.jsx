// npm modules
import { NavLink } from 'react-router-dom'

// css & assets
import styles from './NavBar.module.css'
import logo from '../../assets/branding/logo-text.png'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <NavLink id={styles.links} to="/auth/login"><li className={styles.mainNavBtns}>Log In</li></NavLink>
      <NavLink id={styles.links} to="/auth/signup"><li id={styles.logout}>Sign Up</li></NavLink>
    </ul>
  )

  const protectedLinks = (
    <>
      {user ?
        <h4 id={styles.welcome}>Welcome back, {user.name}!</h4>
        :
        ''
      }
      <ul>
        <NavLink id={styles.links} to={`/words/${user?.profile}/dictionary`}><li className={styles.mainNavBtns}>My Dictionary</li></NavLink>
        <NavLink id={styles.links} to="/articles"><li className={styles.mainNavBtns}>News</li></NavLink>
        <NavLink id={styles.links} to="" onClick={handleLogout}><li id={styles.logout}>Log Out</li></NavLink>
      </ul>
    </>
  )

  return (
    <nav className={styles.navContainer}>
      <NavLink id={styles.links} to={`/`}><img src={logo} alt="NewsLingo" /></NavLink>

      {user ? 
        protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
