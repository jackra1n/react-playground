import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './App'
import Navbar from './NavBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar/>
    <MainPage>
    </MainPage>
  </React.StrictMode>
)
