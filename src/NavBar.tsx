import React, { useEffect, useRef } from "react";
import { Divider, IconButton, Tooltip } from "@mui/material";
import { AccountCircleTwoTone, RoomTwoTone, WorkTwoTone, SchoolTwoTone, TerminalTwoTone } from "@mui/icons-material";
import anime from "animejs";

export default function NavBar() {
    const navBarRef = useRef<HTMLDivElement>(null);
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

    return <div ref={navBarRef} style={{
        padding: "0 1em", justifyContent: "space-around", width: "34em",
        position: "sticky", top: 0, left: 0, textAlign: "left",
        display: "flex", alignItems: "center", zIndex: 10
    }}>
        <Tooltip title="1nvisibilia" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem1")} id="navitem1">
                <span>🍑</span>
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip title="Who I am" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem2")} id="navitem2" size="large">
                <AccountCircleTwoTone />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip title="Where I'm at" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem3")} id="navitem3" size="large">
                <RoomTwoTone />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip title="Whom I've worked" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem4")} id="navitem4" size="large">
                <WorkTwoTone />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip title="What I've learned" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem5")} id="navitem5" size="large">
                <SchoolTwoTone />
            </IconButton>
        </Tooltip>
        <Divider className="navele" orientation="vertical" variant="middle" flexItem />
        <Tooltip title="What I do" arrow>
            <IconButton className="navele" onMouseEnter={() => spinIcon("navitem6")} id="navitem6" size="large">
                <TerminalTwoTone />
            </IconButton>
        </Tooltip>
    </div>
}
