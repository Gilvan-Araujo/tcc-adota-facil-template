import { yupResolver } from '@hookform/resolvers/yup'
import {
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Custom404 from 'pages/404'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Images from '@services/Images'
import Pets from '@services/Pets'

import createWhatsappLink from '@utils/createWhatsappLink'

import * as S from '@styles/pages/newPet'

const Form = () => {
  const { query } = useRouter()

  const [image, setImage] = useState<File>()

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Campo obrigatório')
      .typeError('Não é um texto'),
    type: Yup.string()
      .nullable(true)
      .required('Campo obrigatório')
      .typeError('Não é um texto'),
    age: Yup.number()
      .required('Campo obrigatório')
      .typeError('Deve ser um número')
      .moreThan(0, 'Deve ser maior que 0'),
    breed: Yup.string()
      .required('Campo obrigatório')
      .typeError('Não é um texto'),
    sex: Yup.string()
      .nullable(true)
      .required('Campo obrigatório')
      .typeError('Não é um texto'),
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitHandler = async (data: any) => {
    if (!image)
      return toast.error('Selecione uma imagem', { toastId: 'pickAnImage' })

    await toast
      .promise(
        Images.uploadImage(image)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .then(async (response: any) => {
            const newData = {
              ...data,
              image: response.data.data.url,
              phoneContact: createWhatsappLink(data.phone)
            }

            await Pets.addPet(newData)
          }),
        {
          pending: 'Cadastrando pet',
          success: 'Pet cadastrado com sucesso',
          error: 'Erro ao cadastrar pet'
        },
        { toastId: 'addPet' }
      )
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
      .finally(() => {
        reset()
        setImage(undefined)
      })

    return {}
  }

  const onDropAccepted = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0])
  }, [])

  const onDropRejected = useCallback(
    () =>
      toast.error('Formato de imagem inválido', { toastId: 'imageInvalid' }),
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

  if (!query.type || (query.type !== 'menu' && query.type !== 'interacao')) {
    return <Custom404 />
  }

  return (
    <>
      <Head>
        <title>Cadastrar Pet</title>
      </Head>

      <S.FormWrapper onSubmit={handleSubmit(onSubmitHandler)}>
        <S.FormTitle data-cy="page-title">
          {' '}
          <Link href="/" passHref>
            <ArrowBackIcon
              color="secondary"
              style={{
                position: 'relative',
                marginRight: 20,
                cursor: 'pointer'
              }}
            />
          </Link>
          Cadastrar Pet
        </S.FormTitle>
        <S.FormRow>
          <TextField
            {...register('name')}
            label="Nome"
            placeholder="Como o pet é chamado"
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
            data-cy="name"
          />

          {query.type === 'menu' && (
            <S.FormControl variant="outlined" error={errors.type}>
              <InputLabel>Tipo</InputLabel>
              <Select
                {...register('type')}
                variant="outlined"
                data-cy="type-select"
                label="Tipo"
              >
                <MenuItem value="cCachorro" data-cy="type-dog">
                  Cachorro
                </MenuItem>
                <MenuItem value="gato" data-cy="type-cat">
                  Gato
                </MenuItem>
              </Select>
              {errors.type && (
                <FormHelperText variant="outlined" required error={errors.type}>
                  {errors.type.message}
                </FormHelperText>
              )}
            </S.FormControl>
          )}

          {query.type === 'interacao' && (
            <S.FormControl error={errors.type}>
              <S.RadioGroup {...register('type')}>
                <FormControlLabel
                  value="cachorro"
                  control={
                    <Radio
                      color="primary"
                      data-cy="type-dog"
                      {...register('type')}
                    />
                  }
                  label="Cachorro"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="gato"
                  control={
                    <Radio
                      color="primary"
                      data-cy="type-cat"
                      {...register('type')}
                    />
                  }
                  label="Gato"
                  labelPlacement="start"
                />
              </S.RadioGroup>
              <FormHelperText variant="outlined">
                {errors.type && errors.type.message}
              </FormHelperText>
            </S.FormControl>
          )}
        </S.FormRow>

        <S.FormRow>
          <TextField
            {...register('age')}
            label="Idade"
            placeholder="Em anos"
            variant="outlined"
            type="number"
            error={!!errors.age}
            helperText={errors.age && errors.age.message}
            data-cy="age"
          />

          <TextField
            {...register('breed')}
            label="Raça"
            placeholder="Ex.: vira-lata, siamês, etc"
            variant="outlined"
            error={!!errors.breed}
            helperText={errors.breed && errors.breed.message}
            data-cy="breed"
          />
        </S.FormRow>

        <S.FormRow>
          {query.type === 'menu' && (
            <S.FormControl variant="outlined" error={errors.sex}>
              <InputLabel>Sexo</InputLabel>
              <Select {...register('sex')} data-cy="sex-select" label="sexo">
                <MenuItem value="macho" data-cy="sex-male">
                  Macho
                </MenuItem>
                <MenuItem value="fêmea" data-cy="sex-female">
                  Fêmea
                </MenuItem>
              </Select>
              <FormHelperText variant="outlined" error={errors.type}>
                {errors.sex && errors.sex.message}
              </FormHelperText>
            </S.FormControl>
          )}

          {query.type === 'interacao' && (
            <S.FormControl error={errors.sex}>
              <S.RadioGroup {...register('sex')}>
                <FormControlLabel
                  value="macho"
                  control={
                    <Radio
                      color="primary"
                      data-cy="sex-male"
                      {...register('sex')}
                    />
                  }
                  label="Macho"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="fêmea"
                  control={
                    <Radio
                      color="primary"
                      data-cy="sex-female"
                      {...register('sex')}
                    />
                  }
                  label="Fêmea"
                  labelPlacement="start"
                />
              </S.RadioGroup>
              <FormHelperText variant="outlined">
                {errors.sex && errors.sex.message}
              </FormHelperText>
            </S.FormControl>
          )}

          <InputMask {...register('phone')} mask="(99) 99999-9999">
            {() => (
              <TextField
                {...register('phone')}
                label="Whatsapp"
                placeholder="Número para contato"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone && errors.phone.message}
                data-cy="phone"
              />
            )}
          </InputMask>
        </S.FormRow>

        <S.FormRow>
          <S.LargeInput
            {...register('description')}
            label="Descrição"
            placeholder="Descreva o pet em detalhes"
            variant="outlined"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
            data-cy="description"
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
            <input {...getInputProps()} data-cy="image-dropzone" />
            {isDragAccept && <p>Foto aceita</p>}
            {isDragReject && <p>Foto inválida</p>}
            {!isDragActive && <p>Arraste a foto ou clique para selecionar</p>}
            {image && <p>Imagem adicionada</p>}
          </S.ImageDropzone>
        </S.FormColumn>

        <S.FormRow>
          <S.Button
            color="primary"
            variant="contained"
            type="submit"
            data-cy="submit-button"
          >
            Cadastrar
          </S.Button>
        </S.FormRow>
      </S.FormWrapper>
    </>
  )
}

Form.getInitialProps = async ({ query }: { query: string }) => ({ query })

export default Form
