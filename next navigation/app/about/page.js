// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       About
//     </div>
//   )
// }

// export default page


// "use client"
// import React from 'react'

// const page = () => {
//   return (
//     <div>

//     <div className='container'>
//       <div>this is about me</div>
//       <div>I am learning Next.js</div>
//       <style jsx>
//         {`
//           .container{
//             background-color: red;
//             color: black;
//             }
//             `}
//       </style>
//     </div>
//     <div className='container'>I am good</div>
//             </div>
//   )
// }

// export default page

"use client"
import React from 'react'

const page = () => {
  return (
    <div>

    <div className='container'>
      <div>this is about me</div>
      <div>I am learning Next.js</div>
      <style jsx global>
        {`
          .container{
            background-color: red;
            color: yellow;
            }
            `}
      </style>
    </div>
    <div className='container'>I am good</div>
            </div>
  )
}

export default page