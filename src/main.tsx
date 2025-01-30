//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//import Playground from './playground/Playground.tsx'
import Coctail from './coctail/Coctail.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    {/* <Playground/> */}
    <Coctail/>

  </>,
)
