import React, { useEffect } from "react";
import { Divider, IconButton, Tooltip } from "@mui/material";
import { AccountCircleTwoTone, RoomTwoTone, WorkTwoTone, SchoolTwoTone, TerminalTwoTone } from "@mui/icons-material";
import anime from "animejs";

export default function NavBar() {
    const scrollTo = (id?: string) => {
        if (!id) {
            document.querySelector("#root")?.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
        }
    }
    useEffect(() => {
        setTimeout(() => {
            anime({
                targets: ".navele",
                delay: anime.stagger(50),
                translateY: [-50, 0],
                opacity: 1
            });
        }, 1000);
    });

    const spinIcon = (id: string) => {
        anime({
            targets: `#${id}`,
            rotate: "1turn",
            duration: 600,
            complete: (anim) => {
                anim.animatables[0].target.style.transform = "";
            }
        });
    }

    return <div style={{
        padding: "0 1em", justifyContent: "space-around", width: "34em",
        textAlign: "left", display: "flex", alignItems: "center"
    }}>
        <Tooltip title="1nvisibilia" arrow>
            <IconButton onClick={() => scrollTo()} className="navele" onMouseEnter={() => spinIcon("navitem1")} id="navitem1">
                <span>🍑</span>
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip title="Who I am" arrow>
            <IconButton onClick={() => scrollTo("intro")} className="navele" onMouseEnter={() => spinIcon("navitem2")} id="navitem2" size="large">
                <AccountCircleTwoTone color="primary" />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip onClick={() => scrollTo("milestone")} title="Where I'm at" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem3")} id="navitem3" size="large">
                <RoomTwoTone color="primary" />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip onClick={() => scrollTo("workexperience")} title="Whom I've worked" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem4")} id="navitem4" size="large">
                <WorkTwoTone color="primary" />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip onClick={() => scrollTo("education")} title="What I've learned" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem5")} id="navitem5" size="large">
                <SchoolTwoTone color="primary" />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip onClick={() => scrollTo("projects")} title="What I do" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem6")} id="navitem6" size="large">
                <TerminalTwoTone color="primary" />
            </IconButton>
        </Tooltip>
    </div>
}
