
import { NavLink, Outlet } from 'react-router-dom'

import styles from './homePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.lessonContainer}>
      <NavLink to="/lesson04">Lesson04</NavLink>
      <NavLink to="/lesson05">Lesson05</NavLink>

      
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to="/lesson04">
       
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to="/lesson05">
        
      </NavLink>
      <Outlet/>
    </div>
  )
}