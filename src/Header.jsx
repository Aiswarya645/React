import React from 'react'

import './Apps.css'
const Header = () => {
  return (
    <div className='navbar'>
      <div className='navbutton'>
        <button className='navbutton'>React</button>
      </div>
      <div className='links'>
        <ul className='links'>
            <li>Home</li>
            <li>About </li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Header