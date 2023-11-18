import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { IconButton, Tooltip } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

export default function Projects() {
    useEffect(() => {

    }, []);

    const openProject = (paramUrl: string) => {
        window.open("https://github.com/1nvisibilia/" + paramUrl, '_blank')?.focus();
    }

    return <div>
        <SectionTitle id="projects" titleText="「 What I do 」" />
        <div style={{ margin: "0 2em" }}>
            <div style={{ margin: "1em 0" }}>Currently learning K8s and UI animation techniques...</div>

            <div>Here are some cool stuffs I did for fun :3</div>
            <div>
                <div style={{ margin: "1em 0" }}>
                    <div className="projectname">
                        Cation
                        <Tooltip title="/1nvisibilia/cation" arrow placement="right">
                            <IconButton size="small" onClick={() => openProject("cation")}>
                                <CodeIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <ul>
                        <li>Created a minimalist web music player with Vue, TypeScript, and Firebase SDK,
                            where users can upload and enjoy listening and save their favourite
                            tracks with third-party OAuth sign-ins.</li>
                        <li>Adapted Firebase's real-time database to sync-up user's the UIs and
                            backend data with zero-latency.</li>
                    </ul>
                </div>
                <div>
                    <div className="projectname">
                        Singular
                        <Tooltip title="/1nvisibilia/singular-backend" arrow placement="right">
                            <IconButton size="small" onClick={() => openProject("singular-backend")}>
                                <CodeIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <ul>
                        <li>Developed a real multi-player shooter game with a NodeJS/ExpressJS
                            service that handles game-related APIs and WebSocket events.</li>
                        <li>The server is capable of hosting multiple multi-player game rooms
                            while keeping the UI and sockets in sync with the server authority
                            architecture implementation</li>
                    </ul>
                </div>
                {/* <div>
                    <div className="projectname">
                        ASCII Game Engine
                        <Tooltip title="/1nvisibilia/singular-backend" arrow placement="right">
                            <IconButton size="small">
                                <CodeIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <ul>
                        <li>Engineered a real-time console game engine in C++17, adapting object
                            oriented architecture, SOLID principles, and MVC framework.
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    </div>
}
