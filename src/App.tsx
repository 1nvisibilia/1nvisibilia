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
                    <Observable scrollref="intro" threshold={0.5} height={247}><Intro /></Observable>
                    <Observable scrollref="milestone" threshold={0.4} height={304}><Milestone /></Observable>
                    <WorkExperiences />
                    <Observable scrollref="education" threshold={0.6} height={454.4}><Education /></Observable>
                    <Observable scrollref="projects" threshold={0.4} height={486}><Projects /></Observable>
                    <Observable threshold={0.5} height={400}><Connections /></Observable>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
