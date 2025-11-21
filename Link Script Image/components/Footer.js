import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className='flex justify-around bg-slate-800 text-white py-4 m-1 text-sm'>
        <div className='text-center'>Copyright &copy; Facebook | All right reserved</div>
        <ul className='flex gap-2 text-sm'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        </footer>
    </div>
  )
}

export default Footer
