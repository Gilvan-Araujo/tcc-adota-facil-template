import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Load from '../../components/Load'
import Images from '../../services/Images'
import Pets from '../../services/Pets'
import * as S from '../../styles/pages/cadastrarPet'
import createWhatsappLink from '../../utils/createWhatsappLink'

const Form = () => {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<File>()

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Campo obrigatório')
      .typeError('Não é um texto'),
    age: Yup.number()
      .required('Campo obrigatório')
      .typeError('Deve ser um número')
      .moreThan(0, 'Deve ser maior que 0'),
    breed: Yup.string()
      .required('Campo obrigatório')
      .typeError('Não é um texto'),
    sex: Yup.string().required('Campo obrigatório').typeError('Não é um texto'),
    phone: Yup.string()
      .required('Campo obrigatório')
      .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Formato errado')
      .typeError('Não é um texto'),
    description: Yup.string().typeError('Não é um texto')
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
      image: imageUrl,
      phoneContact: createWhatsappLink(data.phone)
    }

    await Pets.addPet(newData)
      .then(() => {
        setLoading(false)
        reset()
        setImage(undefined)
        return toast.success('Pet cadastrado com sucesso')
      })
      .catch(() => {
        setLoading(false)
        return toast.error('Ocorreu um erro. Por favor, tente novamente.')
      })

    return {}
  }

  const onDropAccepted = useCallback((acceptedFiles) => {
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
    onDropAccepted,
    onDropRejected,
    accept: 'image/jpg, image/jpeg, image/png'
  })

  return (
    <>
      <Load loading={loading} />

      <S.FormWrapper onSubmit={handleSubmit(onSubmitHandler)}>
        <S.FormTitle>Cadastro de Pet</S.FormTitle>
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
          <InputMask {...register('phone')} mask="(99) 99999-9999">
            {() => (
              <S.Input
                {...register('phone')}
                label="Whatsapp"
                placeholder="Digite um whatsapp para contato"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone && errors.phone.message}
              />
            )}
          </InputMask>
        </S.FormRow>

        <S.FormRow>
          <S.LargeInput
            {...register('description')}
            label="Descrição"
            placeholder="Digite a descrição"
            variant="outlined"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />
        </S.FormRow>

        <S.FormColumn>
          <S.ImageDropzoneLabel>Imagem do pet</S.ImageDropzoneLabel>
          <S.ImageDropzone
            {...getRootProps()}
            dragAccept={isDragAccept}
            dragReject={isDragReject}
            image={image}
          >
            <input {...getInputProps()} />
            {isDragAccept && <p>Foto aceita</p>}
            {isDragReject && <p>Foto inválida</p>}
            {!isDragActive && <p>Arraste a foto ou clique para selecionar</p>}
            {image && <p>Imagem adicionada</p>}
          </S.ImageDropzone>
        </S.FormColumn>

        <S.FormRow>
          <S.Button color="primary" variant="contained" type="submit">
            Cadastrar
          </S.Button>
        </S.FormRow>
      </S.FormWrapper>
    </>
  )
}

export default Form
