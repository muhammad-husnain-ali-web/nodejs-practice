import Image from "next/image";

export default function Home() {
  return (
    <div className="size-80 bg-red-600 container py-5 relative" >
      {/* I am home page width={500} height={500} */}
      <Image className="mx-auto object-cover" fill={true} src="https://images.unsplash.com/photo-1750994700092-19f94d4da5ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
    </div>
  );
} 
