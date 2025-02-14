import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listElement}>
          <NavLink to="/coctail" className={styles.link}>
            Coctail
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/fetchFox" className={styles.link}>
            Fox
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/userCard" className={styles.link}>
            Card
          </NavLink>
        </li>
        <li className={styles.listElement}>
          <NavLink to="/playground" className={styles.link}>
           Playground
          </NavLink>
        </li>
        Coctail
      </ul>
    </nav>
  );
}
