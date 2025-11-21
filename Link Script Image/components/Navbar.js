import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between px-4 bg-slate-800 text-white py-4 rounded-[0px] m-1'>
        <div className='logo font-bold'>Facebook</div>
        <ul className='flex gap-6'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
