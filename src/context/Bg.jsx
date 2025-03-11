import React, { useContext } from 'react'
import Themecontext from './Themecontext'
import './bg.css'

const Bg = () => {
    const value=useContext(Themecontext)
    console.log(value);
    
  return (
    <div className={value.theme=="light"?"dark":"light"}>
        <button onClick={value.toggletheme}>click</button>
    </div>
  )
}

export default Bg