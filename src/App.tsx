import React from 'react'
import Name from './Name';
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        },
    },
});


function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <NavBar />
                <Name></Name>
            </ThemeProvider>
        </>
    )
}

export default App
