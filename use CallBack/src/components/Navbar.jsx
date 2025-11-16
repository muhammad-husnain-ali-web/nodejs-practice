import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjectice}) => {
    console.log("Navbar rendering....")
    // console.log(getAdjectice())
  return (
    <div>
      I am a {adjective} Navbar
      <button>{getAdjectice()}</button>
    </div>
  )
}

export default memo(Navbar)
