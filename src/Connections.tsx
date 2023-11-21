import { IconButton, Tooltip } from "@mui/material";
import anime from "animejs";
import React, { useEffect, useState } from "react";
import { gotoUrl } from "./utils/url";

const randomAnimations: Record<string, { rotate: string, duration: number, translateY: number }> = {
    discordmedia: { translateY: 150, rotate: "1turn", duration: 10000 },
    linkedinmedia: { translateY: 0, rotate: "-1turn", duration: 5000 },
    emailmedia: { translateY: 50, rotate: "1turn", duration: 4000 },
    githubmedia: { translateY: 250, rotate: "-1turn", duration: 7000 }
}

export default function Connections() {
    const [discordTooltip, setTooltip] = useState("@taowo");

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

    const handleDiscord = () => {
        navigator.clipboard.writeText("taowo");
        setTooltip("Copied!");
        setTimeout(() => {
            setTooltip("@taowo");
        }, 1000)
    }

    const handleLinkedIn = () => {
        gotoUrl("https://www.linkedin.com/in/bobby-tao/");
    }

    const handleEmail = () => {
        window.location.href = "mailto:jiaditao@gmail.com";
    }

    const handleGithub = () => {
        gotoUrl("https://github.com/1nvisibilia");
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

    return <div style={{ height: "400px", overflow: "hidden" }}>
        <div className="talktome">wanna talk to me?</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title={discordTooltip} arrow>
                <IconButton style={{ opacity: 0 }} id="discordmedia" onClick={handleDiscord} size="large">
                    <img width={50} style={{ padding: "6px 0" }} src="./discord.png"></img>
                </IconButton>
            </Tooltip>
            <Tooltip title="in/bobby-tao" arrow>
                <IconButton style={{ opacity: 0 }} id="linkedinmedia" onClick={handleLinkedIn} size="large">
                    <img width={50} src="./linkedin.png"></img>
                </IconButton>
            </Tooltip>
            <Tooltip title="/1nvisibilia" arrow>
                <IconButton style={{ opacity: 0 }} id="githubmedia" onClick={handleGithub} size="large">
                    <img width={50} src="./github.png"></img>
                </IconButton>
            </Tooltip>
            <Tooltip title="jiaditao@gmail.com" arrow>
                <IconButton style={{ opacity: 0 }} id="emailmedia" onClick={handleEmail} size="large">
                    <img width={50} src="./email.png"></img>
                </IconButton>
            </Tooltip>
        </div>
    </div>
}