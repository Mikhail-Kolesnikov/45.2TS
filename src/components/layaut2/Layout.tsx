import React from 'react'
import NavBar from '../navBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout():JSX.Element {
  return (
    <>

       <NavBar/>
       <Outlet/>

       <footer>

        Тут будет подвал
       </footer>



    </>
  )
}
