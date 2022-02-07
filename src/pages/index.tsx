import { Button } from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import HomeContainer from '@styles/pages/Home'

function Home() {
  return (
    <>
      <Head>
        <title>Adota Fácil</title>
        <meta
          name="description"
          content="Aplicativo para testes de estilos de interação"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home page</h1>
      <HomeContainer>
        <Link href="/pets" passHref>
          <Button variant="contained" color="primary">
            Ir para a listagem
          </Button>
        </Link>

        <Link href="/pet/novo" passHref>
          <Button variant="contained" color="primary">
            Ir para o form
          </Button>
        </Link>
      </HomeContainer>
    </>
  )
}

export default Home
