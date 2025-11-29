// "use client"
// import { useSearchParams } from "next/navigation";

// export default function Home() {
//   const searchParams = useSearchParams();
//   return (
//     <div>
//       I am home name blog is {searchParams.get('blog')} and utc_source is {searchParams.get('utc_source')}
//     </div>
//   );
// }


import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={style.red}>
      Hey
    </div>
  );
}
