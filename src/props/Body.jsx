import React from 'react'
import './card.css'
import Card from './card'
import img from './face1.jpg'
import img1 from './face2.jpg'
import img2 from './face3.jpg'
import img3 from './face4.jpg'
import img4 from './face1.jpg'
import img5 from './face6.jpg'
const Body = () => {
  return (
    <div className='items'>
        <Card name="angelia"pos="Gamer" image={img}></Card>
        <Card name="showwq"pos="developerr"image={img1}></Card>
        <Card name="sgwjame"pos="scientist"image={img2}></Card>
        <Card name="dgsjkhayfsa"pos="tester"image={img3}></Card>
        <Card name="hdwwwu"pos="Trainer"image={img4}></Card>
        <Card name="anu"pos="Gamer"image={img5}></Card>
    </div>
  )
}

export default Body