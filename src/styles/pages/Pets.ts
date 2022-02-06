import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 40px;
`

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 20px 0;
`

export const GridContainer = styled(Grid)`
  justify-content: center;
`

export const GridItem = styled(Grid)``
