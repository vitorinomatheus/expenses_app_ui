'use client';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const violetBase = '#5a00b5';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
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
        white: {
            main: '#fff'
        }
    }
});

export default theme;