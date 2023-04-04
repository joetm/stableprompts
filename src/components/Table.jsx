import React from "react"


function PromptTable({ dataSource, columns }) {
  if (!dataSource.length) {
    return <div>No data.</div>
  }
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default PromptTable

