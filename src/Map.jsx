import React from 'react'

const Map = () => {

    const data=[{task:"To study",description:"to analyse the current section",status:"completed"},{task:"To do work",description:"To complte the pending home work",status:"pending"},{task:"project",description:"project execution",status:"failed"}]

  return (
    <div className='container'>
        {data.map((item)=>(
            <div><h4>{item.task}</h4>
            <h4>{item.description}</h4>
            <h4>{item.status}</h4></div>

        ))}
    </div>
  )
}

export default Map