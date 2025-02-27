import React from 'react'

const Mapping = () => {

const data=[{name:"anu",age:45},{name:"ammu",age:45}]


  return (
    <div>
       {data.map((item)=>(
        <div><h2>{item.name}</h2>
        <h2>{item.age}</h2></div>
       ))
       }
       
    </div>
  )
}

export default Mapping