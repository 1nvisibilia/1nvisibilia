import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Name1nvisibilia, Nameiiiinvy, Nametaowo, NameBobbyTao, NameJiadiTao } from "./assets/nameSvgs";

const names = [Name1nvisibilia, Nameiiiinvy, Nametaowo, NameBobbyTao, NameJiadiTao];

export default function Name() {
    const [idx, setIdx] = useState(1);

    const toggle = async () => {
        // while (true) {
            anime({
                targets: 'path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 800,
                delay: function (el, i) { return i * 80 },
                direction: 'normal',
            });
            await new Promise(r => setTimeout(r, 4000));
            anime({
                targets: 'path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 800,
                delay: function (el, i) { return i * 80 },
                direction: 'reverse',
            });
            await new Promise(r => setTimeout(r, 3000));
            setIdx((idx + 1) % names.length);
        // }
    }

    useEffect(() => {
        toggle();
    }, []);

    return <div id="myname">{names[idx]()}</div>
}
