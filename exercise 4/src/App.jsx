import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cards, setCard] = useState([])
  
  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(a)
    let data = await a.json();
    setCard(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
      <div className="container">
        {cards.map((card)=>{
          return(<div key={card.id} className="cards">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
            <span>By User: {card.userId}</span>
          </div>)
        })}
      </div>
    </>
  )
}

export default App
