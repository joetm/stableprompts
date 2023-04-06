"use client"

import styles from "~/styles/prompts.module.css"

import React from "react"
import { type NextPage } from "next"
import { useSession } from "next-auth/react"
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Nav from 'react-bootstrap/Nav'
import { api } from "../utils/api"

import Pages from "../components/Pages"
import HeadMeta from '../components/HeadMeta'
import Menu from '../components/Menu'
import PageFooter from "../components/PageFooter"


const Dashboard: NextPage = () => {
  const { data: sessionData } = useSession()

  function downloadCSV() {
    alert('TODO')
  }

  const res = api.prompt.infinitePrompts.useQuery({
    userId: "jbqxqxnbtpfz1h9hwp1kbtjw",
    cursor: 1,
  })
  const prompts = res?.data?.items
  const nextCursor = res?.data?.nextCursor
  console.log('nextCursor', nextCursor)

  return (
    <>
      <HeadMeta title="Prompts" description="Stableprompts Prompts" />
      <Menu title='Prompts' />
      <Container>

        {
          prompts?.length ?
            <>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link eventKey="export" onClick={downloadCSV} title="Download CSV">CSV</Nav.Link>
                </Nav.Item>
              </Nav>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Prompt</th>
                    <th>Key1</th>
                    <th>Key2</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    prompts.map((prompt) => (
                      <tr key={prompt.id}>
                        <td>{prompt.text}</td>
                        <td></td>
                        <td></td>
                        <td>TODO</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
              <Pages items={prompts} />
            </>
          :
            <Alert variant="primary">
              Nothing to display, yet.
              Read the <Alert.Link href="/about">About</Alert.Link> page to learn more.
            </Alert>
        }

      </Container>
      <PageFooter />
    </>
  )
}

export default Dashboard
