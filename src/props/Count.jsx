import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
    let increment=()=>{
        setCount(count+1)
    }
    let decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button></div>
  )
}

export default Count