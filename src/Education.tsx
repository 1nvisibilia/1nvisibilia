import React, { useEffect } from "react"
import SectionTitle from "./SectionTitle"
import anime from "animejs";
import AmpSvg from "./assets/AmpSvg";

export default function Education() {
    useEffect(() => {
        anime.timeline({})
            .add({
                targets: "#crossleft",
                height: [0, 100],
                easing: "easeInOutQuad",
                duration: 500,
            }).add({
                targets: "#crossleft",
                translateX: [0, 48],
                easing: "easeInOutQuad",
                duration: 500,
                rotate: "45"
            });

        anime.timeline({})
            .add({
                targets: "#crossright",
                height: [0, 100],
                easing: "easeInOutQuad",
                duration: 500,
            }).add({
                targets: "#crossright",
                translateX: [0, -48],
                easing: "easeInOutQuad",
                duration: 500,
                rotate: "-45"
            });
        anime({
            targets: ".uwdegree path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: function (el, i) { return i * 150 },
            direction: 'normal'
        });
        anime({
            targets: ".uwdegree .hcs",
            easing: "easeOutExpo",
            translateX: [-100, 0],
            opacity: [0, 1],
            duration: 1000
        });
        anime({
            targets: ".uwdegree .ais",
            easing: "easeOutExpo",
            translateX: [100, 0],
            opacity: [0, 1],
            duration: 1000
        });
    });

    return <div style={{ margin: "4em 0" }}>
        <SectionTitle id="education" titleText="「 What I've learned 」" />
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "1em 0" }}>
            <img height={100} src="./uwaterloo.png" style={{ padding: "0 38px" }}></img>
            <div style={{ width: 100, display: "flex", justifyContent: "space-between" }}>
                <div id="crossleft"></div>
                <div id="crossright"></div>
            </div>
            <img height={100} src="./uwcs.png"></img>
        </div>
        <div className="uwdegree">
            <div className="hcs">Honours Computer Science</div>
            <div><AmpSvg /></div>
            <div className="ais">A.I. Specialization</div>
        </div>
    </div>
}