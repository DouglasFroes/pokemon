import React from 'react'
import { StorageProvider } from '../contexts/StorageContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <StorageProvider>
      <Component {...pageProps} />
    </StorageProvider>
  )
}

export default MyApp
