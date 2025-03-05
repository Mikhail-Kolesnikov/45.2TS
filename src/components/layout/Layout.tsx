import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { useCart } from "../../context/CartContext";
import { getTotalPrice } from "../cart/Cart";


export default function Layout() {
  const {cart}= useCart()
  return (
    <>
      <header className={styles.header}>
        <nav>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')} to="/">HomePage</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')}  to='fellowship'>fellowship</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')} to='fetch-fox'>fetch fox</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')} to='products'>products</NavLink>
        <NavLink className={({isActive})=>(isActive ? styles.linkActive:'')} to='cart'>cart</NavLink>
        </nav>
        <span>total:{getTotalPrice(cart)} Euro</span>
      

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
