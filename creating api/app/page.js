"use client"

export default function Home() {
  const handleClick = async() =>{
    let data ={
      name: "Husnain",
      role: "coder"
    }
    let a = await fetch("/api/add", {method: "POST", headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
    )
    let res = await a.json();
    console.log(res)
  }
  return (
    <div>
      <h1>Next.js Api routes deno</h1>
      <button onClick={handleClick}>Click <meta /></button>
    </div>
  );
}
