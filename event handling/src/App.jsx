import { useState } from 'react'
import './App.css'

function App() {
  // const [form, setForm] = useState({})
  // const [form, setForm] = useState({email:"", phone:"", address: ""})
  const [name, setName] = useState()
  const [check, setCheck] = useState(false)
  const [typ, setTyp] = useState("password")

  const handleClick = () => {
    if(!check)
    {
      setTyp("text")
      setCheck(true)
    }
    else
    {
      setTyp("password")
      setCheck(false)
    }
  }

  const handleChane = (e) => {
    setName(e.target.value)
  }
  
  // const handleChaneForm = (e) => {
  //   setForm({...form, [e.target.name]: e.target.value})
  // }

  return (
    <>
      <div className="button hidden">
        <button onClick={handleClick}>Click me!</button>
      </div>

      <input type={typ} value={name?name: ""} onChange={handleChane}  />

      {/* <input type="text" name='email'  value={form.email} onChange={handleChaneForm}/>
      <input type="text" name='phone'  value={form.phone} onChange={handleChaneForm}/>
      <input type="text" name='address'  value={form.address} onChange={handleChaneForm}/> */}

      {/* <input type="text" name='email'  value={form.email? form.email : ""} onChange={handleChaneForm}/>
      <input type="text" name='phone'  value={form.phone? form.phone : ""} onChange={handleChaneForm}/>
      <input type="text" name='address'  value={form.address? form.address : ""} onChange={handleChaneForm}/> */}
    </>
  )
}

export default App
