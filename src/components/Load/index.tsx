import { Backdrop } from '@material-ui/core'
import React from 'react'

import Loader from './styles'

export type LoadProps = {
  loading: boolean
}

const Load = ({ loading }: LoadProps) => (
  <Backdrop open={loading}>
    <Loader />
  </Backdrop>
)

export default Load
