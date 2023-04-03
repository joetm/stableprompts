import styles from "./errorpage.module.css"

import React from 'react'
import { Button, Result } from 'antd'


const Page404: React.FC = () => (
  <div className={styles.main}>
    <div className={styles.container}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button href="/" type="primary">Back Home</Button>}
      />
    </div>
  </div>
)

export default Page404
