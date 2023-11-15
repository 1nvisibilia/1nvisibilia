import anime from "animejs";
import React, { useEffect, useState } from "react";

export default function SectionTitle({ id, titleText }: { id: string, titleText: string }) {
    useEffect(() => {
        anime({
            targets: `#${id} .letters`,
            translateX: [400, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 500,
            delay: anime.stagger(100)
        })
    }, []);

    return <div style={{ fontSize: "2em" }} id={id}>
        {titleText.split("").map((char: string) =>
            <span className="letters" style={{ display: "inline-block" }}>
                {char !== " " ? char : "\u00a0"}
            </span>)}
    </div>
}
