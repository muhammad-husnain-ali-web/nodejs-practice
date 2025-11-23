// "use client"
// import { SubmitAction } from "@/actions/form";
// import { useRef } from "react";

// export default function Home() {
//   let ref = useRef()

//   return (
//     <div>
//       <form ref={ref} action={(e)=>{SubmitAction(e); ref.current.reset()}}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input name="name" id="name" className="p-1 m-1 text-black border bg-stone-500 border-r-slate-700 rounded-xl " type="text" />
//         </div>
//         <div>
//           <label htmlFor="add">Address</label>
//           <input name="add" id="add" className="p-1 m-1 text-black border bg-stone-500 border-r-slate-700 rounded-xl " type="text" />
//         </div>
//         <div>
//           <input type="submit" value="Submit" />
//         </div>
//       </form>
//     </div>
//   );
// }




//  By default SSR server site rendering
// This is default behavior
// export default function Home() {
//   console.log("server site rendering")
//   return (
//     <div className="homepage">
//       I am homepage
//     </div>
//   );
// }

// export default async function Page() {
//   let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })
//   let posts = await data.json()
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

//  SSG - Static Side Generation
// Any content which does not have network calls is a static page by default and calls only update once at build time
// export default function Home() {
//   console.log("server site rendering")
//   return (
//     <div className="homepage">
//       I am homepage
//     </div>
//   );
// }

// export default async function Page() {
//   let data = await fetch('https://api.vercel.app/blog', { cache: 'force-cache' })
//   let posts = await data.json()
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

//  By default SSR server site rendering and also on SSR
// export default async function Home() {
//   let data = await fetch('https://api.vercel.app/blog')
//   let posts = await data.json()
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }


//  ISG or ISR
// However, there are exceptions, fetch request are not catehed when:
// used in server acti0on.
// used inside in a route Handler that usese the Post method
// export default async function Page() {
//   let data = await fetch('https://api.vercel.app/blog', { next: {revalidate: 3600} })
//   let posts = await data.json()
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

// export const dynamic = 'force-dynamic' 



//  envormen variable

// server env so it show on page 
export default function Home() {
  console.log(process.env.ID)
  console.log(process.env.SECERET)
  console.log(process.env.NAME)
  return (
    <div className="homepage">
      {/* Hey This is homepag. The id is {process.env.ID} and secert is {process.env.SECERET} */}

      {/* .env.local has more priorty so env show pf env.local */}
      {/* .env.local has local var but .env has prof var */}
      {/* If .env and .env.local has same env. var then it show the var of .env.local */}
      {/* but if env not found in .env.local then it move to .env */}
      {/* like id and secert found in .env.local so show id and secert of .env.local */}
      {/* But not found in .env.local so move to .env */}
      Hey This is homepag. The id is {process.env.ID} and secert is {process.env.SECERET} and name is {process.env.NAME}
    </div>
  );
}


//  env not show on client componts 
// but env want to show then  Public this env then also show server site
// note that dont public creditional because if you public env then it will become the part of javascript bundle 
// so attacker can attack by public env
// "use client"
// export default function Home() {
//   return (
//     <div className="homepage">
//       {/* this line dont show server env on page  */}
//       {/* but this page run on server then it wil show env  */}
//       {/* so dont show env on web body */}
//       {/* Hey This is homepag. The id is {process.env.ID} and secert is {process.env.SECERET} */}

//       Hey This is homepag. The id is {process.env.NEXT_PUBLIC_ID} and secert is {process.env.NEXT_PUBLIC_SECERET}
//     </div>
//   );
// }