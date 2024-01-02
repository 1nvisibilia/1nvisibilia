import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import anime from "animejs";
import { gotoUrl } from "./utils/url";

function Divider() {
    const theme = useTheme();

    return <div className="projectdivider" style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0),
        ${theme.palette.primary.main === "#000000" ? "black" : "white"},
        rgba(0, 0, 0, 0))`
    }}></div>
}

export default function Projects() {
    useEffect(() => {
        anime({
            targets: ".projectname, #projectlist li, .projectdivider, .tobecontinued",
            translateX: [100, 0],
            delay: anime.stagger(100),
            duration: 1000,
            opacity: [0, 1]
        });
    }, []);

    const openProject = (paramUrl: string) => {
        gotoUrl("https://github.com/1nvisibilia/" + paramUrl);
    }

    return <div style={{ marginTop: "2.5em" }}>
        <SectionTitle id="projects" titleText="「 What I do 」" />
        <div style={{ margin: "0 2em" }}>
            <div style={{ margin: "1em 0" }}>Currently learning K8s and UI animation techniques...</div>

            <div>Here are some cool stuffs I did for fun :3</div>
            <div id="projectlist">
                <div style={{ margin: "1em 0" }}>
                    <div className="projectname">
                        Regression
                        <Tooltip title="/1nvisibilia/cation" arrow placement="right">
                            <IconButton size="small" onClick={() => openProject("regression")}>
                                <CodeIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <ul style={{ marginTop: 0 }}>
                        <li>Developed a 97% accuracy neural network model with PyTorch to predict real-time stock data.</li>
                        <li>Leveraged Apache Kafka to pull 20,000+ stock records from Yahoo API to
                            continuously train the model with real-time Kafka consumers.</li>
                    </ul>
                </div>
                <Divider />
                <div style={{ margin: "1em 0" }}>
                    <div className="projectname">
                        Cation
                        <Tooltip title="/1nvisibilia/cation" arrow placement="right">
                            <IconButton size="small" onClick={() => openProject("cation")}>
                                <CodeIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <ul style={{ marginTop: 0 }}>
                        <li>Created a minimalist web music player with Vue, TypeScript, and Firebase SDK,
                            where users can upload and enjoy
                            listening and save their favourite tracks with third-party OAuth sign-ins.</li>
                    </ul>
                </div>
                <Divider />
                <div>
                    <div className="projectname">
                        Singular
                        <Tooltip title="/1nvisibilia/singular-backend" arrow placement="right">
                            <IconButton size="small" onClick={() => openProject("singular-backend")}>
                                <CodeIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <ul style={{ marginTop: 0 }}>
                        <li>Developed a real multi-player shooter game with a NodeJS service that
                            handles game-related APIs and WebSocket events with the server
                            authority architecture</li>
                    </ul>
                </div>
                <div className="tobecontinued">•</div>
                <div className="tobecontinued">•</div>
                <div className="tobecontinued">•</div>
            </div>
        </div>
    </div>
}
