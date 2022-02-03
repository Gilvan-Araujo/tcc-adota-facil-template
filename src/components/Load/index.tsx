import React from 'react'

import * as S from './styles'

export type LoadProps = {
  loading: boolean
}

const Load = ({ loading }: LoadProps) => (
  <S.CustomBackdrop data-testid="Load" open={loading}>
    <S.Loader color="inherit" />
  </S.CustomBackdrop>
)

export default Load
