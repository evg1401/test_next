import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: '#003362',
            dark: '#fff',
        },

        info: {
            main: '#EE823D',
        },

        success: {
            main: '#27AE60'
        },

        secondary: {
            main: '#8D8D8D'
        },

        warning: {
            main: '#AD4D42',
        },

        background: {
            default: '#F6E8CE',
        }
    },

    typography: {
        fontFamily: '"Montserrat"',
        h1: {
            fontSize: '30px',
            fontWeight: 500,
            lineHeight: '36.57px',
        },

        h2: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: '1.4rem',
        },

        h3: {
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '36px',
        },

        h4: {
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: '1.3rem',
        },

        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.2rem',
        }
    },
});