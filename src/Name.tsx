import React, { useEffect } from "react";
import anime from "animejs";
import { Animation } from "./assets/nameSvgs";

export default function Name() {
    const drawSvg = async () => {
        anime({
            targets: ".svgName path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function (el, i) { return i * 150 },
            direction: 'normal'
        });
    }

    useEffect(() => { drawSvg(); }, []);

    return <div style={{
        textAlign: "center", height: "calc(100vh - 48px)",
        display: "grid", marginBottom: "2em"
    }}>
        <Animation />
    </div>;
}
