import styles from "~/styles/prompts.module.css"

import { type NextPage } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Pagination from 'react-bootstrap/Pagination'
import Nav from 'react-bootstrap/Nav'

import HeadMeta from '../components/HeadMeta'
import Menu from '../components/Menu'


const Dashboard: NextPage = () => {
  const { data: sessionData } = useSession()

  // pagination
  let active = 2
  let pages = []
  for (let number = 1; number <= 5; number++) {
    pages.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    )
  }

  function downloadCSV() {
    alert('TODO')
  }

  const prompts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((id) => 
    ({
      id: id,
      prompt: `${id} xdssfdsgd dsf sdf sdhgefdher eryeryueryt reyeryery eryeryerytery sdsdds`,
      ident: 'xxx',
      cond: 'xxx',
      created: '2023-03-03',
    })
  )
 
  if(!prompts.length) {
    return (
      <>
        <HeadMeta title="Prompts" description="Stableprompts Prompts" />
        <Menu title='Prompts' />
        <Container>
          <Alert variant="primary">
            Nothing here, yet.
          </Alert>
        </Container>
      </>
    )
  }

  return (
    <>
      <HeadMeta title="Prompts" description="Stableprompts Prompts" />
      <Menu title='Prompts' />
      <Container>

          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link eventKey="export" onClick={downloadCSV} title="Download CSV">CSV</Nav.Link>
            </Nav.Item>
          </Nav>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Prompt</th>
                <th>Participant</th>
                <th>Cond.</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {
                prompts.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.prompt}</td>
                    <td>{row.ident}</td>
                    <td>{row.cond}</td>
                    <td>{row.created}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>

          {
            pages &&
              <Pagination size="sm">{pages}</Pagination>
          }

      </Container>
    </>
  )
}

export default Dashboard
