import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title : "Hey",
      desc : "I am a good todo"
    },
    {
      title : "Hey Another todo",
      desc : "I am a good todo too"
    },
    {
      title : "Hey I am a grocery todo",
      desc : "I am a good todo but I am grocery todo"
    },
    
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn? <button>showbtn is true</button>: <button>showbtn is false</button>}
      {todos.map(todo=>{
        // return <Todo key={todo.title} todo={todo} />
        return <Todo key={todo.title} title={todo.title} desc = {todo.desc} />
      })}
      {/* <Todo  title = "Hey" desc = "I am a good todo" /> */}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
