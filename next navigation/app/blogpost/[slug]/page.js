"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const page = () => {
    const params = useParams()
    const router = useRouter()
    useEffect(() => {
      setTimeout(() => {
        router.push('/about')
      }, 3000)
    }, [])
    
  return (
    <div>
      {params.slug}

      {/* <div>
        <button onClick={()=>{router.push('/about')}}>About</button>
      </div> */}

    </div>
  )
}

export default page


// 'use client'
// import { useParams } from 'next/navigation'
 
// export default function ExampleClientComponent() {
//   const params = useParams()
 
//   console.log(params)
 
//    return (
//     <div>
//       {params.slug}
//     </div>
//   )
// }