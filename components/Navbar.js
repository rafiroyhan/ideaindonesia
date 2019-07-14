import React, { Component } from 'react'
import Link from 'next/link'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </nav>
      </>
    )
  }
}
