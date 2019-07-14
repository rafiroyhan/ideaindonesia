import React, {Component} from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'


function Loader(props) {
  return(
    <div>
      <h1>Sek Loading</h1>
    </div>
  )
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    
    return (
      <Container>
        <PageTransition 
          classNames="page-transition">
            <Component {...pageProps} />
        </PageTransition>
      </Container>
    )
  }
}

export default MyApp