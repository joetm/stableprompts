import React from 'react'
import Container from 'react-bootstrap/Container'
import PageFooter from '../components/PageFooter'
import HeadMeta from '../components/HeadMeta'
import Menu from '../components/Menu'


const AboutPage: React.FC = () => (
  <>
    <HeadMeta title="Prompts" description="Stableprompts Prompts" />
    <Menu title='Prompts' />
    <Container>
      <h2>About</h2>
      <main>
        <section>
          TODO
        </section>
      </main>
      <PageFooter />
    </Container>
  </>
)

export default AboutPage
