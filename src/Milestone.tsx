import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import anime from "animejs";
import { Tooltip } from "@mui/material";
import { gotoUrl } from "./utils/url";

export default function MilestoneContent() {
    const gotoSite = (url: string) => {
        gotoUrl(url);
    }

    useEffect(() => {
        anime.timeline({})
            .add({
                targets: "#whereamatsection .summary",
                opacity: [0, 1],
                duration: 500,
                translateY: [50, 0],
                easing: "easeInOutQuad"
            })
            .add({
                targets: "#whereamatsection img",
                scale: [0, 1],
                rotate: "4turn"
            })
            .add({
                targets: "#whereamatsection strong",
                duration: 300,
                opacity: [0, 1],
                translateY: [-50, 0],
                easing: "easeInOutQuad"
            })
            .add({
                targets: "#whereamatsection em",
                duration: 300,
                opacity: [0, 1],
                translateY: [-50, 0],
                easing: "easeInOutQuad"
            });
    }, []);
    return <div id="whereamatsection" style={{ marginTop: "2.5em" }}>
        <SectionTitle id="whereamat" titleText="「 Where I'm at 」" />
        <div style={{ display: "flex", justifyContent: "space-around", margin: "1em 0" }}>
            <div style={{ textAlign: "center", flex: "1 1 0" }}>
                <div className="summary">Studying my 4A Term of Computer Science @</div>
                <Tooltip title="University of Waterloo" arrow>
                    <img onClick={() => gotoSite("https://cs.uwaterloo.ca")} style={{ margin: "2em", borderRadius: "50%" }} width={100} src="./uwaterloo.png"></img>
                </Tooltip>
                <div>
                    <strong style={{ display: "inline-block" }}>Focusing on</strong>
                    <br /><br />
                    <em style={{ display: "inline-block" }}>Big Data • Concurrency • System Security</em>
                </div>
            </div>
            <div style={{ textAlign: "center", flex: "1 1 0" }}>
                <div className="summary">DevOps Engineering Intern @</div>
                <Tooltip title="Shakudo" arrow>
                    <img onClick={() => gotoSite("https://shakudo.io")} style={{ margin: "2em", borderRadius: "50%" }} width={100} src="./shakudo.jpg"></img>
                </Tooltip>
                <div>
                    <strong style={{ display: "inline-block" }}>Developing on</strong>
                    <br /><br />
                    <em style={{ display: "inline-block" }}>Kubernetes • Helm • Azure • GCP</em>
                </div>
            </div>
        </div>
    </div>;
}
