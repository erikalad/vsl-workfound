import React from 'react'
import logo from './../assets/logoSinfondo.png'
import './components.css'

export default function Nav() {
  return (
    <div className='nav'>
      <img src={logo} width={'10%'} alt='Logo'/>
    </div>
  )
}
