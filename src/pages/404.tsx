import styles from "~/styles/errorpage.module.css"
import { useSession } from "next-auth/react"

import React from 'react'
import Button from 'react-bootstrap/Button'


const Page404: React.FC = () => {
  const { data: sessionData } = useSession()

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <strong className={styles.errornum}>404</strong>
        Sorry, the page you visited does not exist.
        {
          sessionData ?
            <Button href="/dashboard" type="primary">Dashboard</Button>
          :
            <Button href="/" type="primary">Home</Button>
        }
      </div>
    </div>
  )
}

export default Page404
