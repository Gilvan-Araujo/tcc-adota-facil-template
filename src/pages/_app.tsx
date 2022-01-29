import type { AppProps } from 'next/app'
import React from 'react'

import GlobalStyle from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
