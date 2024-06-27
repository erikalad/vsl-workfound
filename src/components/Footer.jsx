import React from 'react'
import logo from './../assets/logoSinfondo.png'
import './components.css'

export default function Footer() {
  return (
   <div className='footer'>
    <img src={logo} alt="Logo Footer" className='logoFooter'/>
    <p>©2024 | WorksFound</p>
   </div>
  )
}
