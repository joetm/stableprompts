import styles from "~/styles/errorpage.module.css"

import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const Page404: React.FC = () => (
  <div className={styles.main}>
    <div className={styles.container}>
      <strong className={styles.errornum}>404</strong>
      Sorry, the page you visited does not exist.
      <Button href="/" type="primary">Back Home</Button>
    </div>
  </div>
)

export default Page404
