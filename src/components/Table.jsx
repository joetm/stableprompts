import React from "react"
import { Table } from "antd"

function PromptTable({ dataSource, columns }) {
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default PromptTable

