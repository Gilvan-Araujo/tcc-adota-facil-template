import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Load from '../../components/Load'
import Images from '../../services/Images'
import Pets from '../../services/Pets'
import * as S from '../../styles/pages/Form'

const Form = () => {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<File>()

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
    if (!image) return toast.error('Selecione uma imagem')

    setLoading(true)

    let imageUrl = ''
    if (image) {
      imageUrl = await Images.uploadImage(image).then(
        (res: any) => res.data.data.url
      )
    }

    const newData = {
      ...data,
      image: imageUrl
    }

    await Pets.addPet(newData)
      .then(() => {
        setLoading(false)
        reset()
        return toast.success('Pet cadastrado com sucesso')
      })
      .catch(() => {
        setLoading(false)
        return toast.error('Ocorreu um erro. Por favor, tente novamente.')
      })

    return {}
  }

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0])
  }, [])

  const onDropRejected = useCallback(
    () => toast.error('Formato de imagem inválido'),
    []
  )

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    onDropRejected,
    accept: 'image/jpg, image/jpeg, image/png'
  })

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
        <S.FormColumn>
          <S.ImageDropzoneLabel>Imagem do pet</S.ImageDropzoneLabel>
          <S.ImageDropzone
            {...getRootProps()}
            dragAccept={isDragAccept}
            dragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {isDragAccept && <p>Todos os arquivos serão aceitos</p>}
            {isDragReject && <p>Alguns arquivos serão rejeitados</p>}
            {!isDragActive && (
              <p>Solte alguns arquivos ou clique para selecionar</p>
            )}
          </S.ImageDropzone>
        </S.FormColumn>
        <S.FormRow>
          <S.Button type="submit">Submit</S.Button>
        </S.FormRow>
      </S.FormWrapper>
    </>
  )
}

export default Form
