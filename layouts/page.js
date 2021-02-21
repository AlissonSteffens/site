// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

// Other
import { version } from '../package'

let progress

const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

// Only show progress bar if page
// transition takes longer than 200 milliseconds
Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

// Log a sweet message in the browser
// Showing the version and GitHub repository
if (global.document) {
  const info = [
    `Version: ${version}`,
    `You can find the code here: https://github.com/AlissonSteffens/AlissonSteffens.github.io`,
    `Have a great day! :)`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const viewSource = event => {
  const allowed = ['P', 'SPAN', 'H1', 'H2', 'H3', 'PRE', 'CODE']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  // document.location =
  //   'https://github.com/AlissonSteffens/AlissonSteffens.github.io'
  event.preventDefault()
}

export default ({ children }) => (
  <main>
    <Head>
      <link
        rel="mask-icon"
        href="http://alissonsteffens.com/static/lightning.svg"
        color="#000000"
      />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="icon" href="/static/touch-icon.png" type="image/png" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta
        name="description"
        content="A teenagers view on web development and intuitive UI design."
      />
      <meta name="twitter:site" content="@notquiteleo" />
      <meta name="twitter:creator" content="@notquiteleo" />
    </Head>

    {children}

    <style jsx global>
      {`
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
        }
        html,
        body {
        }

        main {
        }

        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #4492ff;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
  </main>
)
