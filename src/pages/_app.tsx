import { CssBaseline, ThemeProvider } from '@material-ui/core'
import type { AppProps } from 'next/app'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles !== null) {
      if (jssStyles.parentElement !== null)
        jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <ToastContainer position="bottom-center" theme="dark" />
    </>
  )
}

export default MyApp
