import React, {useEffect} from 'react'

const Navbar = (props) => {

    useEffect(() => {
      alert("Hey I will run on every render")
    })

    useEffect(() => {
      alert("Hey Welcome to my page. This is the firt render")
    }, [])

    useEffect(() => {
      alert("Hey Welcome to my page. This is the firt render of app.jsx")
      return () =>{
        alert("components was unmounted")
      }
    }, [])

    useEffect(() => {
      alert("Hey I am running because color was changed")
    }, [props.color])
    

  return (
    <div>
      I am navbar of {props.color} heh..
    </div>
  )
}

export default Navbar
