import { Backdrop, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

import theme from '../../styles/theme'

export const CustomBackdrop = styled(Backdrop)`
  z-index: 1000 !important;

  color: ${theme.palette.common.white};
`

export const Loader = styled(CircularProgress)``
