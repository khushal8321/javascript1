import React from 'react'

export default function Child(props) {
  return (
    <div>
      <h1>name is {props.name}</h1>
      <h1>name is {props.age}</h1>
    </div>
  )
}
