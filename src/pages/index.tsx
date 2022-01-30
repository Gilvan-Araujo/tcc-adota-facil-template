import { Button } from '@material-ui/core'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Load from '../components/Load'
import Pets from '../services/Pets'
import styles from '../styles/Home.module.css'

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

  const addPet = () => {
    setLoading(true)

    const newPet = {
      name: `Pet ${Math.round(Math.random() * 100)}`,
      type: 'dog'
    }

    try {
      Pets.addPet(newPet).then(async () => {
        getData()
      })
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.container}>
      <Load loading={loading} />
      <Head>
        <title>Adota Fácil</title>
        <meta
          name="description"
          content="Aplicativo para testes de estilos de interação"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.map((item: any) => (
        <div key={uuidv4()}>
          {item.name} - {item.type}
        </div>
      ))}

      <Button onClick={addPet}>Adicionar pet aleatório</Button>
    </div>
  )
}

export default Home
