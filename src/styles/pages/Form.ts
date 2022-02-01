import {
  Button as MUIButton,
  TextField as MUITextField
} from '@material-ui/core'
import styled from 'styled-components'

export type ImageDropzoneProps = {
  dragAccept: boolean
  dragReject: boolean
}

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  padding: 2rem;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
`

export const ImageDropzoneLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(0, 0, 0, 0.54);

  padding-left: 14px;
`

export const Input = styled(MUITextField)`
  width: 240px;
  display: flex;
  flex-direction: column;
`

export const Button = styled(MUIButton)`
  height: 42px;
`

export const ImageDropzone = styled.div<ImageDropzoneProps>`
  p {
    color: ${({ dragAccept, dragReject }) => {
      if (dragAccept) return '#388e3c'
      if (dragReject) return '#ff1744'
      return 'rgba(0, 0, 0, 0.54)'
    }};
  }

  border: 2px dashed
    ${({ dragAccept, dragReject }) => {
      if (dragAccept) return '#81c784'
      if (dragReject) return '#ff1744'
      return 'rgba(0, 0, 0, 0.23)'
    }};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
`
