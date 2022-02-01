import {
  Button as MUIButton,
  TextField as MUITextField
} from '@material-ui/core'
import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 2rem;
  padding: 2rem;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const Input = styled(MUITextField)`
  width: 230px;
  display: flex;
  flex-direction: column;
`

export const Button = styled(MUIButton)`
  height: 42px;
`
