import React from "react"
import Head from "next/head"


export default function HeadMeta({ title, description }) {
  return (
    <Head>
      <title>{title} | StablePrompts</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
