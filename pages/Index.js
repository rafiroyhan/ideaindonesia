import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>IDeA Indonesia | Hebat Sekarang Dahsyat di Masa Depan</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="/static/css/styles.css" />
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi autem aperiam? Magni, illo quasi quo beatae possimus quis nihil, aperiam nesciunt rerum eligendi minus facere temporibus provident, officia qui.
        </main>
      </div>
    )
  }
}
