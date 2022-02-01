import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Load from '../../components/Load'
import Pets from '../../services/Pets'
import * as S from './styles'

const Form = () => {
  const [loading, setLoading] = useState(false)

  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    age: Yup.number()
      .typeError('Deve ser um número')
      .moreThan(0, 'Deve ser maior que 0')
      .required('Campo obrigatório'),
    breed: Yup.string().required('Campo obrigatório'),
    sex: Yup.string().required('Campo obrigatório'),
    description: Yup.string()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmitHandler = async (data: any) => {
    setLoading(true)
    toast.error('Ocorreu um erro. Por favor, tente novamente.')
    await Pets.addPet(data)
      .then(() => {
        setLoading(false)
        reset()
      })
      .catch(() => {
        toast.error('Ocorreu um erro. Por favor, tente novamente.')
        setLoading(false)
      })
  }

  return (
    <>
      <Load loading={loading} />
      <S.FormWrapper onSubmit={handleSubmit(onSubmitHandler)}>
        <S.FormRow>
          <h1>Form</h1>
        </S.FormRow>
        <S.FormRow>
          <S.Input
            {...register('name')}
            label="Nome"
            placeholder="Digite o nome"
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
          />

          <S.Input
            {...register('age')}
            label="Idade"
            placeholder="Digite a idade"
            variant="outlined"
            type="number"
            error={!!errors.age}
            helperText={errors.age && errors.age.message}
          />
        </S.FormRow>
        <S.FormRow>
          <S.Input
            {...register('breed')}
            label="Raça"
            placeholder="Digite a raça"
            variant="outlined"
            error={!!errors.breed}
            helperText={errors.breed && errors.breed.message}
          />

          <S.Input
            {...register('sex')}
            label="Sexo"
            placeholder="Digite o sexo"
            variant="outlined"
            error={!!errors.sex}
            helperText={errors.sex && errors.sex.message}
          />
        </S.FormRow>
        <S.FormRow>
          <S.Button type="submit">Submit</S.Button>
        </S.FormRow>
      </S.FormWrapper>
    </>
  )
}

export default Form
