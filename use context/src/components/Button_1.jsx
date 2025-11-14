import React from 'react'
import Components from './Components'

const Button = (props) => {
  return (
    <div>
      <button><span><Components count={props.count} /></span>I am a button</button>
    </div>
  )
}

export default Button
