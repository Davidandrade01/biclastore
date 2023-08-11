//Next
import React from 'react'
import Head from 'next/head'

//Components
import Header from './Header'

export default function Layout({title,children}) {
  return (
    <>
      <Head>
        <title>Bicla Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>{children}</main>
    </>
  )
}
