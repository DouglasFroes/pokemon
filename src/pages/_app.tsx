import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress' // nprogress module
import 'nprogress/nprogress.css' // styles of nprogress

import { StorageProvider } from '../contexts/StorageContext'
import '../styles/globals.scss'

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <StorageProvider>
      <Component {...pageProps} />
    </StorageProvider>
  )
}

export default MyApp
