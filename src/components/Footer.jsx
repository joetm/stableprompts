import React from "react"
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { signIn, signOut, useSession } from "next-auth/react"


export default function Footer() {
  return (
    <div style={{position: 'fixed', bottom: 0}}>
      &copy; 2023 StablePrompts.com
    </div>
  )
}
