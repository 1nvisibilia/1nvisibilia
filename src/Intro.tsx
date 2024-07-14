import anime from "animejs";
import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";

const spacing = 10; // px

export default function Intro() {
    useEffect(() => {
        anime({
            targets: "#mainbody",
            opacity: [0, 1],
            duration: 8000
        });

        anime({
            targets: "#avatar",
            rotate: "1turn",
            duration: 10000,
            easing: "linear",
            loop: true
        });
    }, []);

    return (
        <div style={{ marginTop: "2.5em" }}>
            <SectionTitle id="whoiam" titleText="「 Who I am 」" />
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ padding: "1em" }}>
                    <img id="avatar" style={{ borderRadius: "50%" }} width="160" src="./avatar.jpg" loading="lazy" />
                </div>
                <div id="mainbody" style={{ padding: "1em" }}>
                    <p style={{ marginBottom: spacing, fontWeight: "bold" }}>
                        This is Jiadi Tao, a software engineer in North America.
                    </p>
                    <p style={{ marginBottom: spacing }}>
                        I am a senior computer science student @ University of Waterloo, specializing
                        in Computer Networks, Concurrency, and System Security.
                    </p>
                    <p style={{ marginBottom: spacing }}>
                        I also worked at Shakudo, NimbleRx, Voiceform, OpenText, and my own uni :D
                    </p>
                </div>
            </div>
        </div>
    );
}
