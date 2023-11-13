import React from 'react'
import Name from './Name';
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@mui/material';
import Intro from './Intro';

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
                <div style={{ margin: "0 10em", minWidth: 700 }}>
                    <Name />
                    <Intro />
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
