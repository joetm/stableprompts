import styles from "~/styles/errorpage.module.css"

import React from 'react'


const Page403: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <strong className={styles.errornum}>403</strong>
        Access denied.
      </div>
    </div>
  )
}

export default Page403
