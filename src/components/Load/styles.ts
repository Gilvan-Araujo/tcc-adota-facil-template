import { Backdrop, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

export const CustomBackdrop = styled(Backdrop)`
  z-index: 1000 !important;

  color: #fff;
`

export const Loader = styled(CircularProgress)``
