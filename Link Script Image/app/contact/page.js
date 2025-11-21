import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script id="contact-script">{
      `alert('welcome to contact page!');
      console.log('welcome to contact page!');`
      }
      </Script>
      I am contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - Connect with the world",
  description: "This is a contact facebook connect with the world using facebook",
};