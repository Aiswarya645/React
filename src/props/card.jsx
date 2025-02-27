import React from 'react'
import img from './face1.jpg'
import './card.css'
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} height={"200px"}/>
      <h3>{props.name}</h3>
      <p>{props.pos}</p>

      

    </div>
  )
}

export default Card