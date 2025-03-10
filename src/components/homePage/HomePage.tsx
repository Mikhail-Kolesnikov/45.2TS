
import { NavLink, Outlet } from 'react-router-dom'

import styles from './homePage.module.css'

export default function HomePage():JSX.Element {
  return (
    <div className={styles.lessonContainer}>
      <NavLink to="/lesson04"><div>Lesson04</div></NavLink>
      <NavLink to="/lesson05"><div>Lesson05</div></NavLink>
      <NavLink to="/lesson06"><div>Lesson06</div></NavLink>
      <NavLink to="/lesson07"><div>Lesson07</div></NavLink>
      <NavLink to="/lesson08"><div>Lesson08</div></NavLink>
      <NavLink to="/lesson09"><div>Lesson09</div></NavLink>
      <NavLink to="/lesson12"><div>Lesson12</div></NavLink>
      <NavLink to="/lesson13"><div>Lesson13</div></NavLink>
      <NavLink to="/lesson14"><div>Lesson14</div></NavLink>
      <NavLink to="/lesson16"><div>Lesson16</div></NavLink>
      <NavLink to="/story"><div>Story</div></NavLink>
      <NavLink to="/homework03"><div>Homework03</div></NavLink>
      <NavLink to="/gender party"><div>Gender Party</div></NavLink>
     

      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to="/lesson04">
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to="/lesson05">
      </NavLink>
      <Outlet/>
    </div>
  )
}