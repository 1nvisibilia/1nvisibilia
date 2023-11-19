import { AccountCircleTwoTone } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import anime from "animejs";
import React, { useEffect } from "react";

export default function Connections() {
    useEffect(() => {
        anime({
            targets: ".talktome",
            translateY: {
                value: [500, 0],
                duration: 1000
            },
            rotate: {
                value: [-10, 10],
                duration: 6000
            }
        });
    }, []);

    return <div style={{ marginTop: "8em" }}>
        <div className="talktome">wanna talk to me?</div>

        <Tooltip title="@taowo" arrow>
            <IconButton className="socialmedia" onMouseEnter={() => { }} size="large">
                <img width={50} style={{ padding: "6px 0" }} src="./discord.png"></img>
            </IconButton>
        </Tooltip>
        <Tooltip title="in/bobby-tao" arrow>
            <IconButton className="socialmedia" onMouseEnter={() => { }} size="large">
                <img width={50} src="./linkedin.png"></img>
            </IconButton>
        </Tooltip>
        <Tooltip title="jiaditao@gmail.com" arrow>
            <IconButton className="socialmedia" onMouseEnter={() => { }} size="large">
                <img width={50} src="./email.png"></img>
            </IconButton>
        </Tooltip>
        <Tooltip title="/1nvisibilia" arrow>
            <IconButton className="socialmedia" onMouseEnter={() => { }} size="large">
                <img width={50} src="./github.png"></img>
            </IconButton>
        </Tooltip>
    </div>
}