import React, { useEffect, useRef } from "react";
import { Divider, IconButton, Tooltip } from "@mui/material";
import { AccountCircleTwoTone, RoomTwoTone, WorkTwoTone, SchoolTwoTone, TerminalTwoTone } from "@mui/icons-material";
import anime from "animejs";

export default function NavBar() {
    const navBarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            anime({
                targets: "#navbar",
                translateY: 52,
                complete: () => {
                    if (navBarRef.current) {
                        navBarRef.current.style.position = "sticky"
                        navBarRef.current.style.transform = "";
                    }
                }
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

    return <div ref={navBarRef} id="navbar" style={{
        padding: "0 1em", justifyContent: "space-around", width: "34em",
        position: "absolute", top: -52, left: 0, textAlign: "left",
        display: "flex", alignItems: "center", overflow: "hidden", float: "left"
    }}>
        <Tooltip title="1nvisibilia" arrow>
            <IconButton onMouseEnter={() => spinIcon("navitem1")} id="navitem1">
                <span>🍑</span>
            </IconButton>
        </Tooltip>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tooltip title="What I am" arrow>
            <IconButton onMouseEnter={() => spinIcon("navitem2")} id="navitem2" size="large">
                <AccountCircleTwoTone />
            </IconButton>
        </Tooltip>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tooltip title="Where I'm at" arrow>
            <IconButton onMouseEnter={() => spinIcon("navitem3")} id="navitem3" size="large">
                <RoomTwoTone />
            </IconButton>
        </Tooltip>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tooltip title="Whom I've worked" arrow>
            <IconButton onMouseEnter={() => spinIcon("navitem4")} id="navitem4" size="large">
                <WorkTwoTone />
            </IconButton>
        </Tooltip>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tooltip title="Where I've learned" arrow>
            <IconButton onMouseEnter={() => spinIcon("navitem5")} id="navitem5" size="large">
                <SchoolTwoTone />
            </IconButton>
        </Tooltip>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tooltip title="What I do" arrow>
            <IconButton onMouseEnter={() => spinIcon("navitem6")} id="navitem6" size="large">
                <TerminalTwoTone />
            </IconButton>
        </Tooltip>
    </div>
}
