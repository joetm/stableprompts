import React from "react"
import Pagination from 'react-bootstrap/Pagination'


export default function Pages({ items }) {
  let active = 2
  const numpages = items?.length / 10
  let pages = []
  if (numpages > 1) {
    pages.push(
      <Pagination.First key="first" disabled={active === 1} />,
      <Pagination.Prev key="prev" disabled={active === 1} />,
    )
  }
  for (let number = 1; number <= numpages; number++) {
    pages.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    )
  }
  if (numpages > 1) {
    pages.push(
      <Pagination.Next key="next" disabled={active === numpages} />,
      <Pagination.Last key="last" disabled={active === numpages} />,
    )
  }

  if (!pages.length > 0) {
    return null
  }

  return <Pagination size="sm">{pages}</Pagination>
}
