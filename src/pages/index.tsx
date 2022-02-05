import { Button, Grid } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Pets from '@services/Pets'

import Load from '@components/Load'

import HomeContainer from '@styles/pages/Home'

function Home() {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)

    try {
      Pets.getPets().then((res) => {
        const tmpData = res.data.map((item: any) => item.data)

        setData(tmpData)
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <HomeContainer>
      <Load loading={loading} />
      <Head>
        <title>Adota Fácil</title>
        <meta
          name="description"
          content="Aplicativo para testes de estilos de interação"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home page</h1>
      <Grid container spacing={3}>
        {data.map((item: any) => (
          <Grid item xs={12} sm={6} md={4} key={uuidv4()}>
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                objectFit="cover"
              />
            )}
            <span>
              {item.name} - {item.type}
            </span>
          </Grid>
        ))}
      </Grid>
      <Link href="/cadastrarPet" passHref>
        <Button variant="contained" color="primary">
          Ir para o form
        </Button>
      </Link>
    </HomeContainer>
  )
}

export default Home
