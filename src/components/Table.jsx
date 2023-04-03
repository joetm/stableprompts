import React from "react"
import { Table } from "antd"
import { Empty } from 'antd'


function PromptTable({ dataSource, columns }) {
  if (!dataSource.length) {
    return <Empty />
  }
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default PromptTable

