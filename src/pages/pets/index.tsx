import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Pet } from 'types'
import { v4 as uuidv4 } from 'uuid'

import Pets from '@services/Pets'

import Card from '@components/Card'
import Load from '@components/Load'

import * as S from '@styles/pages/Pets'

const AllPets = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Pet[]>([])

  const getData = async () => {
    setLoading(true)
    setData([])

    await Pets.getPets()
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        toast.error('Houve um erro. Por favor, tente novamente.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Lista de pets</title>
      </Head>

      <Load loading={loading} />

      <S.PageWrapper>
        <S.PageTitle>Lista de pets</S.PageTitle>
        <S.GridContainer container spacing={3}>
          {data.map((pet: Pet) => (
            <S.GridItem item key={uuidv4()} justifyContent="center">
              <Card pet={pet} />
            </S.GridItem>
          ))}
        </S.GridContainer>
      </S.PageWrapper>
    </>
  )
}

export default AllPets