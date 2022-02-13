import {
  Button as MUIButton,
  FormControl as MUIFormControl,
  RadioGroup as MUIRadioGroup,
  TextField as MUITextField
} from '@material-ui/core'
import styled from 'styled-components'

import theme from '@styles/theme'

export type ImageDropzoneProps = {
  dragAccept: boolean
  dragReject: boolean
  image: boolean
}

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
  padding: 40px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    height: 100%;
  }
`

export const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 20px 0;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column;
  }
`

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageDropzoneLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 14px;
  margin-bottom: 5px;
`

export const FormControl = styled(MUIFormControl)`
  width: 230px;
`

export const RadioGroup = styled(MUIRadioGroup)`
  justify-content: center;
  width: 230px;
  height: 56px;

  label {
    margin: 0;
  }
`

export const LargeInput = styled(MUITextField)`
  width: 480px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 230px;
  }
`

export const Button = styled(MUIButton)`
  height: 42px;
`

export const ImageDropzone = styled.div<ImageDropzoneProps>`
  p {
    color: ${({ dragAccept, dragReject, image }) => {
      if (dragReject) return theme.palette.error.main
      if (dragAccept || image) return theme.palette.success.main
      return null
    }};
  }

  border: 2px dashed
    ${({ dragAccept, dragReject, image }) => {
      if (dragReject) return theme.palette.error.main
      if (dragAccept || image) return theme.palette.success.main
      return null
    }};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  border-radius: 5px;

  margin-bottom: 20px;

  width: 480px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 230px;
  }
`
