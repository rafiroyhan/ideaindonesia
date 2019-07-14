import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default class Index extends Component {
  // static pageTransitionDelayEnter = true
 
  constructor(props) {
    super(props)
    // this.state = { loaded: false }
  }
 
  // componentDidMount() {
  //   this.timeoutId = setTimeout(() => {
  //     this.props.pageTransitionReadyToEnter()
  //     this.setState({ loaded: true })
  //   }, 1000)
  // }
 
  // componentWillUnmount() {
  //   if (this.timeoutId) clearTimeout(this.timeoutId)
  // }
 
  render() {
    // if (!this.state.loaded) return null
    return (
      <div>
        <Head>
          <title>Tentang Idea Indonesia | IDeA Indonesia</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="/static/css/styles.css" />
        </Head>
        <header>
          <Navbar />
        </header>
        <h1>Horewah</h1>
      </div>
    )
  }
}
