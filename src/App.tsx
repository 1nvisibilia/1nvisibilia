import React from 'react'
import Name from './Name';
import NavBar from './NavBar';
import { createTheme, ThemeProvider } from '@mui/material';
import Intro from './Intro';
import Milestone from './Milestone';
import WorkExperiences from './WorkExperiences';
import Observable from './utils/Observable';
import Education from './Education';
import Projects from "./Projects";
import Connections from './Connections';

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
                    <Observable threshold={0.2}><Intro /></Observable>
                    <Observable threshold={0.4}><Milestone /></Observable>
                    <WorkExperiences />
                    <Observable threshold={0.6}><Education /></Observable>
                    <Observable threshold={0.4}><Projects /></Observable>
                    <Observable threshold={0.5}><Connections /></Observable>
                    <div style={{ height: "50vh" }}></div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
