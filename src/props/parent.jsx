import React from 'react'
import Child from './child'

const Parent = () => {
  return (
    <div><Child name="mango" clr="yellow"></Child>
    <Child name="orange" clr="orange"></Child>
    <Child name="kiwi" clr="green"></Child></div>
  )
}

export default Parent