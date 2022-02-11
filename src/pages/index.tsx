import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Slider,
  useMediaQuery
} from '@material-ui/core'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import * as S from '@styles/pages/Home'

function Home() {
  const router = useRouter()

  // manipulacao
  const matches = useMediaQuery('(min-width:430px)')
  const [sliderValue, setSliderValue] = useState(50)

  // menu
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

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

      <S.HomeContainer>
        <h1>Home page</h1>
        <div style={{ display: 'none' }}>
          <Link href="/pets" passHref>
            <Button variant="contained" color="primary">
              Ir para a listagem
            </Button>
          </Link>

          <Link href="/pet/novo?type=interacao" passHref>
            <Button variant="contained" color="primary">
              Ir para o form (interação direta)
            </Button>
          </Link>

          <Link href="/pet/novo?type=menu" passHref>
            <Button variant="contained" color="primary">
              Ir para o form (menu)
            </Button>
          </Link>
        </div>

        <S.OptionsContainer>
          <div className={`${sliderValue <= 20 ? 'highlight' : ''}`}>
            Lista de pets
          </div>
          <Slider
            orientation={`${matches ? 'horizontal' : 'vertical'}`}
            className="slider"
            defaultValue={50}
            onChange={(_, value) => {
              if (typeof value === 'number') setSliderValue(value)
            }}
            onChangeCommitted={(_, value) => {
              if (value <= 20) router.push('/pets')
              if (value >= 80) router.push('/pet/novo?type=interacao')
            }}
          />
          <div className={`${sliderValue >= 80 ? 'highlight' : ''}`}>
            Cadastrar um pet
          </div>
        </S.OptionsContainer>

        <S.MenuContainer>
          <Button
            variant="contained"
            color="primary"
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Opções
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={(event) => {
                          handleClose(event)
                          router.push('/pet/novo?type=menu')
                        }}
                      >
                        Cadastrar um pet
                      </MenuItem>
                      <MenuItem
                        onClick={(event) => {
                          handleClose(event)
                          router.push('/pets')
                        }}
                      >
                        Lista de pets
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </S.MenuContainer>
      </S.HomeContainer>
    </>
  )
}

export default Home
