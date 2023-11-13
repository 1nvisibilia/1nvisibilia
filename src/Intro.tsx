import anime from "animejs";
import React, { useEffect, useState } from "react";

const spacing = 10; // px
const names = ["Bobby Tao", "invy", "1nvisibilia", "taowo"]

export default function Intro() {
    const [name, setName] = useState(names[0]);

    useEffect(() => {
        anime({
            targets: "#avatar",
            rotate: "1turn",
            duration: 5000,
            easing: "linear",
            loop: true
        });

        let curIdx = 0;
        const intervalId = setInterval(() => {
            curIdx = (curIdx + 1) % names.length;
            setName(names[curIdx]);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ padding: "1em" }}>
            <img id="avatar" style={{ borderRadius: "50%" }} src="./avatar.png" loading="lazy" />
        </div>
        <div style={{ padding: "1em" }}>
            <p style={{ marginBottom: spacing }}>
                This is Jiadi Tao, you might also know me as{" "}
                <span style={{ display: "inline-block" }}>{name}</span>...
            </p>
            <p style={{ marginBottom: spacing }}>
                I am a senior computer science student @ University of Waterloo, specializing
                in Big Data, Concurrency, and Feedback Control Systems.
            </p>
            <p style={{ marginBottom: spacing }}>
                I also worked at NimbleRx, Voiceform, OpenText, and my own school :D
            </p>
        </div>
    </div>
}