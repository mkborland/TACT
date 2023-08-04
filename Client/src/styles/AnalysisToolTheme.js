import { createTheme } from '@mui/material/styles';
import { cyan, pink, amber, grey } from '@mui/material/colors';

const AnalysisToolTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: cyan[500]
        },
        secondary: {
          main: pink['A400'],
        },
        divider: pink['A400'],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        primary: {
          main: cyan[500]
        },
        secondary: {
          main: pink['A400'],
        },
        divider: grey[700],
        background: {
          default: '#303030',
          paper: '#424242',
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});
export default AnalysisToolTheme;