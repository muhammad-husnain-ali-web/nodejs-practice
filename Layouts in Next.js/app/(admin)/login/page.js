import React from 'react'
const page = () => {
  return (
    <div>
      I am login
    </div>
  )
}

export default page

// static route
export const  metadata= {
    title : 'Admin Login facebook'
}

// dynamic route
// export async function generateMetadata({params}) {
//   return{
//     title : 'Login admin facebook'
//   }
// }