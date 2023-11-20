import { IconButton, Tooltip } from "@mui/material";
import anime from "animejs";
import React, { useEffect } from "react";

const randomAnimations: Record<string, { rotate: string, duration: number, translateY: number }> = {
    discordmedia: { translateY: 150, rotate: "1turn", duration: 10000 },
    linkedinmedia: { translateY: -100, rotate: "-1turn", duration: 5000 },
    emailmedia: { translateY: 50, rotate: "1turn", duration: 4000 },
    githubmedia: { translateY: 250, rotate: "-1turn", duration: 7000 }
}

export default function Connections() {
    const spinIcon = (id: string) => {
        anime({
            targets: `#${id}`,
            translateY: [randomAnimations[id].translateY, randomAnimations[id].translateY],
            rotate: randomAnimations[id].rotate,
            duration: randomAnimations[id].duration,
            loop: true,
            easing: "linear"
        });
    }

    const moveIcon = (id: string) => {
        anime({
            targets: `#${id}`,
            translateY: [500, randomAnimations[id].translateY],
            duration: 200,
            easing: "easeOutQuad",
            complete: () => spinIcon(id),
            opacity: [0, 1]
        });
    }

    useEffect(() => {
        anime({
            targets: ".talktome",
            translateY: {
                value: [500, 130],
                duration: 1000
            },
            rotate: {
                value: [-10, 10],
                duration: 6000
            }
        });
        const keys = Object.keys(randomAnimations);
        let counter = 0;
        const intervalid = setInterval(() => {
            if (counter > 3) {
                clearInterval(intervalid);
            } else {
                moveIcon(keys[counter]);
                ++counter;
            }
        }, 200);

        return () => clearInterval(intervalid);
    }, []);

    return <div style={{ marginTop: "6em", height: "400px" }}>
        <div className="talktome">wanna talk to me?</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="@taowo" arrow>
                <IconButton style={{ opacity: 0 }} id="discordmedia" onMouseEnter={() => { }} size="large">
                    <img width={50} style={{ padding: "6px 0" }} src="./discord.png"></img>
                </IconButton>
            </Tooltip>
            <Tooltip title="in/bobby-tao" arrow>
                <IconButton style={{ opacity: 0 }} id="linkedinmedia" onMouseEnter={() => { }} size="large">
                    <img width={50} src="./linkedin.png"></img>
                </IconButton>
            </Tooltip>
            <Tooltip title="/1nvisibilia" arrow>
                <IconButton style={{ opacity: 0 }} id="githubmedia" onMouseEnter={() => { }} size="large">
                    <img width={50} src="./github.png"></img>
                </IconButton>
            </Tooltip>
            <Tooltip title="jiaditao@gmail.com" arrow>
                <IconButton style={{ opacity: 0 }} id="emailmedia" onMouseEnter={() => { }} size="large">
                    <img width={50} src="./email.png"></img>
                </IconButton>
            </Tooltip>
        </div>
    </div>
}