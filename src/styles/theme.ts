import { amber, green, lightBlue, red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: lightBlue,
    secondary: amber,
    success: green,
    error: red
  }
})

export default theme
