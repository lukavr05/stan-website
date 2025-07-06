import { createTheme } from '@mui/material/styles';
import '@fontsource/cutive'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#233623',
    },
    secondary: {
      main: '#53716F',
    },
    background: {
      default: '#EEE9D5',
      paper: '#ffffff',   
    },
    text: {
      primary: '#1C1712',
      secondary: '#4D5154',
    },
  },
  typography: {
    fontFamily: '"Cutive", serif',
    fontWeight: 400,
  },
});
export default theme;
