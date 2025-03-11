import React, { useContext } from 'react'
import Langcontext from './Langcontext'
import './Lang.css'

const Lang = () => {
    const { theme, toggletheme } =useContext(Langcontext)
   
    const buttonText = theme === "english" ? "Hai" : "ഹായ്";
    
    
  return (
    <div className={theme==="english" ? "english" : "malayalam"}>
        <button onClick={toggletheme}>{buttonText}</button>
    </div>
  )
}

export default Lang