import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            {/* <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/login"><li>Login</li></a> */}

            {/* <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/login"><li>Login</li></Link> */}

            <NavLink className = {(e)=>{return e.isActive? "red": ""}} to="/"><li>Home</li></NavLink>
            <NavLink className = {(e)=>{return e.isActive? "red": ""}} to="/about"><li>About</li></NavLink>
            <NavLink className = {(e)=>{return e.isActive? "red": ""}} to="/login"><li>Login</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
