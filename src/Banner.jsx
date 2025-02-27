import React from 'react'
import img from './nature3.jpg'
import './Apps.css' 
const Banner = () => {
  return (
    <div className='content'>
     <div >
       <img className='image' src={img} />
      </div>
      <div className="login-form">
      <form>
        <label>Enter username</label><br></br>
        <input type="text" className="input-field" placeholder="Username"/><br></br>
        <label>Enter password</label><br></br>
        <input type="password" className="input-field" placeholder="Password" /><br></br>
        <button className="submit-btn">submit</button>
      </form>
      </div>
    </div>

  )
}

export default Banner