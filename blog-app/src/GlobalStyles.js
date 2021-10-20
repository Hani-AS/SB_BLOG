import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xss: 400,
      s: 530,
      sm: 600,
      md: 900,
      mdlg: 1000,
      lg: 1190,
      xl: 1536,
    },
  },
});
