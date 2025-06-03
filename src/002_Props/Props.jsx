import React from 'react'

const Props = (props) => {
  return (
    <div>
      Hello 
      <p>Name: {props.name}</p>
      <p>Call name: {props.callname}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Props
