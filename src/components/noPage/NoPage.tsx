import React from 'react'
import styles from './noPage.module.css'
import { Link } from 'react-router-dom'
export default function NoPage() {
  return (
    <div className={styles.noPage}>
        <h3>Error 404: </h3>
        <p>no such page 😡</p>

        <Link to='/'>👉 to home page</Link>
      
    </div>
  )
}
