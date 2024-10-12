'use client';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const violetBase = '#5a00b5';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          color: 'white'
        }
      },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              width: '60%'
            }
          }
        }
      },
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    cssVariables: true,
    palette: {
        mode: 'dark',
        primary: {
            main: violetBase,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
        secondary: {
            main: '#fff'
        }
    }
});

export default theme;