import React, { useState } from 'react'

const Cont = () => {
    const [count,setCount]=useState(0)
    let increment=()=>{
        setCount(count+1)

    }
    let decrement=()=>{
        if(count!=0)
        setCount(count-1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
    </div>
  )
}

export default Cont