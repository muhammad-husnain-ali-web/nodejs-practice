import React from 'react'
import "./Todo.css"

// const Todo = ({todo}) => {
//   return (
//     <div className='todoclass'>
//       <div className="todo">{todo.title}</div>
//         <div className="todo">{todo.desc}</div>
//     </div>
//   )
// }
const Todo = (props) => {
  return (
    <div className='todoclass'>
      <div className="todo">{props.title}</div>
        <div className="todo">{props.desc}</div>
    </div>
  )
}

export default Todo
