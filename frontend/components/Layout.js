// REACT & NEXT
import React from 'react'
import Head from 'next/head'
import Header from './Header'
import VideoBG from './VideoBG'

const Layout = ({ pageTitle = 'LiquiDefi', children }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <VideoBG fade="0">
      <Header />
      <main role="main">{children}</main>
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
          max-height: 100%;
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
          body {
            background: #333;
            color: white;
            overflow-x: hidden;
          }
          main {
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex: 1;
          }
          button {
            border: none;
            appearance: none;
            padding: 10px 30px;
            font-size: 1.2rem;
            color: white;
            border-radius: 4px;
            margin-right: 20px;
          }
        `}
      </style>
    </VideoBG>
  </>
)

export default Layout
