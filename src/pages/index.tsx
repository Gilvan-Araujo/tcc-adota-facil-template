import { Button } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Load from '../components/Load'
import Images from '../services/Images'
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

  const handleUpload = async (e: any) => {
    const file = e.target.files[0]

    Images.uploadImage(file)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addPet = () => {
    setLoading(true)

    const max = 500
    const min = 400
    const imageIndex = Math.floor(Math.random() * (max - min + 1) + min)

    const newPet = {
      name: `Pet ${Math.round(Math.random() * 100)}`,
      type: 'dog',
      image: `https://placedog.net/${imageIndex}/${imageIndex}`
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
          {item.image && (
            <Image src={item.image} alt={item.name} width={200} height={200} />
          )}
          <div key={uuidv4()}>
            {item.name} - {item.type}
          </div>
        </div>
      ))}

      <input type="file" name="" id="" onChange={handleUpload} />
      <Button onClick={addPet}>Adicionar pet aleatório</Button>
    </div>
  )
}

export default Home
