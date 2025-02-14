import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";


export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')} to="/">HomePage</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')}  to='fellowship'>fellowship</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')} to='fetch-fox'>fetch fox</NavLink>
      

      </header>

      <main className={styles.main}>
        {/* не место outlet импортированного из библиотеки react router 
        будут приходить компоненты из routing, чьи пути мы пропишем в APP.tsx*/}
        <Outlet />
      </main>

      <footer className={styles.footer}>footer</footer>
    </>
  );
}
