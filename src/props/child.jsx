import React from 'react'

const child = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>{props.clr}</p>
    </div>
  )
}

export default child