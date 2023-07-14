import { createTheme } from '@mui/material';



const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ["CustomFont", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["CustomFont", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontFamily: 'CustomFont',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `
            url('/fonts/Caprasimo-Regular.ttf') format('truetype'),
            url('/fonts/Caprasimo-Regular.ttf') format('truetype')
            `,
          },
        ],
      },
    },
  },
});

export default theme;