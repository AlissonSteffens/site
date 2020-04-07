// Components
import Head from 'next/head'
import React, { Component } from 'react'

import { initGA, logPageView } from './googleAnalytics.js'

export default class Title extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>Alisson Steffens</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Alisson Steffens" />
        <meta name="description" content="Geek programer and cinephile" />
        <meta name="author" content="Alisson Steffens" />
        <meta name="keywords" content="opensource, programer" />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alisson Steffens" />
        <meta
          property="og:description"
          content="Geek programer and cinephile"
        />
        <meta property="og:url" content="https://alissonsteffens.com/" />
        <meta property="og:site_name" content="Alisson Steffens" />
        <meta
          property="og:image"
          content="https://alissonsteffens.com/thumb.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Geek programer and cinephile"
        />
        <meta name="twitter:title" content="Alisson Steffens" />
        <meta
          name="twitter:image"
          content="https://alissonsteffens.com/thumb.jpg"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
          integrity="sha256-D9M5yrVDqFlla7nlELDaYZIpXfFWDytQtiV+TaH6F1I="
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="../static/style.css" />
      </Head>
    )
  }
}
