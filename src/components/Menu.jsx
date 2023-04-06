import React from "react"
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { signIn, signOut, useSession } from "next-auth/react"
import Button from 'react-bootstrap/Button'
// import { useRouter } from 'next/navigation'


export default function Menu({title = 'StablePrompts'}) {
  const { data: sessionData } = useSession()

  // const router = useRouter()
  function logout() {
    signOut()
    // router.push('/')
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href={sessionData ? "/dashboard" : "/"}>StablePrompts</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {
            sessionData?.user?.name &&
              <Navbar.Text>
                Signed in as: <Link href="/settings">{sessionData.user.name}</Link>
              </Navbar.Text>
          }
          <Button
            variant={sessionData?.user ? "link" : "primary"}
            onClick={sessionData?.user ? () => void logout() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
