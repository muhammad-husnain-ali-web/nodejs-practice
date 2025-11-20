// "use client"
// import {useState, useEffect} from 'react'
import Navbar from '@/components/Navbar'
import fs from 'fs/promises'

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("I am husnain")
  let a = fs.readFile(".gitignore")
  a.then((e)=>{
    console.log(e.toString())
  })
  return (
    <div>
      <Navbar />
      {/* <div>I am a component {count}</div> */}
      {/* <button onClick={()=>{setCount(count+1)}}>count</button> */}
    </div>
  );
}
