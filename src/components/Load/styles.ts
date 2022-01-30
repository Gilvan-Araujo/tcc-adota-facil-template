import { Backdrop, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

export const CustomBackdrop = styled(Backdrop)`
  z-index: 100 !important;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Loader = styled(CircularProgress)`
  color: #fff;
`
