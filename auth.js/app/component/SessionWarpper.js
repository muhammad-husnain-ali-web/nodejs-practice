"use client"
import { SessionProvider } from "next-auth/react"

const SessionWarpper = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default SessionWarpper
