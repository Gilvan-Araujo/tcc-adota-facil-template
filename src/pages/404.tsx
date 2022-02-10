import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import theme from '@styles/theme'

const Styled404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  gap: 20px;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    cursor: pointer;
    color: ${theme.palette.primary.main};
  }
`

export default function Custom404() {
  return (
    <Styled404>
      <h1>Ocorreu um erro</h1>
      <Link href="/" passHref>
        <h2>Voltar para a tela inicial</h2>
      </Link>
    </Styled404>
  )
}
