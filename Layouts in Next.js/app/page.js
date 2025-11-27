// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="homepage">
//       I am homepage
//     </div>
//   );
// }


//  By default SSR server site rendering
export default function Home() {
  console.log("server site rendering")
  return (
    <div className="homepage">
      I am homepage
    </div>
  );
}