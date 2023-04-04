"use client"

import styles from "~/styles/dashboard.module.css"

import React, { useState, useRef } from "react"
import { type NextPage } from "next"
import { signOut, useSession } from "next-auth/react"
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Link from 'next/link'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import { useRouter } from 'next/navigation'

import HeadMeta from '../components/HeadMeta'
import Menu from '../components/Menu'
import CustomModal from '../components/CustomModal'


const Settings: NextPage = () => {
  const [ showConfirm, setShowConfirm ] = useState(false)
  const [ showConfirmDel, setShowConfirmDel ] = useState(false)
  const flashText = useRef()

  const apiKey = '234897osdfkjhkj2379t6yjkshdjbf'

  const { data: sessionData } = useSession()

  // TODO: check login status and disallow rendering when not logged in



  const modalClose = () => setShowConfirm(false)
  const modalShow  = () => setShowConfirm(true)
  const modalCloseDel = () => setShowConfirmDel(false)
  const modalShowDel  = () => setShowConfirmDel(true)

  const handleDeletion = () => {
    // TODO: delete account



    setShowConfirmDel(false)
    signOut()
    router.push('/')
  }
  const handleKeyRegen = () => {
    // TODO: regenerate api key
    alert('TODO')



    setShowConfirm(false)
  }

  function copyKey(apiKey) {
     // Copy the text inside the text field
    navigator.clipboard.writeText(apiKey)
    const origText = flashText.current.innerHTML
    flashText.current.innerHTML = 'copied!'
    flashText.current.className = 'btn btn-success'
    setTimeout(() => {
      flashText.current.innerHTML = origText
      flashText.current.className = 'btn btn-primary'
    }, 1000)
  } 

  return (
    <>
      <HeadMeta title="Settings" description="Stableprompts Settings" />
      <Menu title='Settings' />
      <Container>

        <h2>Settings</h2>

        <Alert className="mt-3 mb-3" variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            In order for this to work, you need to install the <Link href="#todo">StablePrompts extension</Link> in each browser that is supposed to send data.
            <br />
            Once the extension is installed, refer to <Link href="/about">this page</Link> for its configuration.
            <br />
            You will need to copy and paste your api key from below.
          </p>
        </Alert>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your API Key</Form.Label>
            <InputGroup className="mb-3">
               <Form.Control type="text" disabled value={apiKey} />
              <Button ref={flashText} onClick={() => copyKey(apiKey)} title="Copy to clipboard">Copy</Button>
            </InputGroup>
          </Form.Group>
        </Form>

        <hr className="mt-5 mb-5" />

        <h3>Danger zone</h3>

        <p className="mt-3 mb-3">
        Enter with caution...
        </p>

        <CustomModal
          eventName=""
          showConfirm={showConfirm}
          handleClose={modalClose}
          handleEvent={handleKeyRegen}
          description='This will regenerate your API key. All existing extensions using that key will no longer be able to send data.'
        />

        <Form>
            <Form.Group className="mt-3 mb-3" controlId="formBasicPassword">
              <Button variant="secondary" title="Generate a new API key" onClick={modalShow}>
                Reset API key
              </Button>
            </Form.Group>
        </Form>

        <CustomModal
          eventName="Deletion"
          showConfirm={showConfirmDel}
          handleClose={modalCloseDel}
          handleEvent={handleDeletion}
          description='You are about to delete your StablePrompts account. All your stored prompts will be deleted!'
        />

        <Form>
            <Form.Group className="mt-3 mb-3" controlId="formBasicPassword">
              <Button variant="danger" title="Delete your StablePrompts account" onClick={modalShowDel}>Delete account</Button>
            </Form.Group>
        </Form>

      </Container>
    </>
  )
}

export default Settings
