import React from 'react'

import * as S from './styles'

export type LoadProps = {
  loading: boolean
}

const Load = ({ loading }: LoadProps) => (
  <S.CustomBackdrop open={loading}>
    <S.Loader />
  </S.CustomBackdrop>
)

export default Load
