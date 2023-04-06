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


const Dashboard: NextPage = () => {
  const { data: sessionData } = useSession()

  function downloadCSV() {
    alert('TODO')
  }

  const prompts = api.prompt.getAll.useQuery({ userId: "w44rp6bw4r1j1pyoehho4v2p" })

  return (
    <>
      <HeadMeta title="Prompts" description="Stableprompts Prompts" />
      <Menu title='Prompts' />
      <Container>

        {
          !prompts?.data?.length &&
            <Alert variant="primary">
              Nothing here, yet.
            </Alert>
        }

        {
          prompts?.data?.length &&
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
                  prompts.data.map((row) => (
                    <tr key={row.id}>
                      <td>{row.prompt}</td>
                      <td></td>
                      <td></td>
                      <td>TODO</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Pages items={prompts?.data} />
          </>
        }

      </Container>
    </>
  )
}

export default Dashboard
