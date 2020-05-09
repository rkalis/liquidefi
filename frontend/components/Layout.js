// REACT & NEXT
import React from 'react'
import Head from 'next/head'

// STATE
import { StateProvider } from '../state/state'
import InitialState from '../state/initialState'
import Reducer from '../state/reducer'

const Layout = ({ pageTitle = 'LiquiDefi', children }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <Header />
      {children}
      <style jsx global>{`
        // Defaults
        *,
        *:before,
        *:after,
        *:link,
        *:visited,
        *:active,
        *:focus,
        *:focus-within,
        *:checked,
        *:disabled {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
        ul,
        ol {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        img {
          max-width: 100%;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a,
        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          text-transform: none;
          appearance: none;
          cursor: pointer;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin-top: 0;
        }
        img,
        svg,
        picture,
        span,
        a,
        b,
        u,
        i,
        small,
        sub,
        strong,
        label {
          display: inline-block;
        }
        table,
        thead,
        tbody,
        tfoot,
        tr,
        td,
        th {
          border-spacing: 0;
          border-collapse: collapse;
          text-align: left;
        }
      `}</style>
      <style jsx global>
        {`
          body { background: #333; color: white; }
        `}
      </style>
    </StateProvider>
  </>
)

export default Layout
