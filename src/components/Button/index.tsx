import { ButtonProps as MUIButtonProps } from '@material-ui/core'
import React from 'react'

import * as S from './styles'

export interface ButtonProps extends MUIButtonProps {
  children: React.ReactNode
}

const Solid = ({ children, ...rest }: ButtonProps) => (
  <S.Button variant="contained" color="primary" {...rest}>
    {children}
  </S.Button>
)

const Outline = ({ children, ...rest }: ButtonProps) => (
  <S.OutlineButton variant="outlined" {...rest}>
    {children}
  </S.OutlineButton>
)

export default { Solid, Outline }
