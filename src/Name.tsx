import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

// const names = ["1nvisibilia", "IIIInvy", "taowo", "Bobby Tao", "Jiadi Tao"];
const names = ["1nvisibilia"];

export default function Name() {
    const myName = useRef<HTMLDivElement>(null);
    const scale = { value: 0 };
    const [curName, setCurName] = useState(names[0]);

    const switchName = async () => {
        for (let i = 0; i < names.length; ++i) {
            anime({
                targets: scale,
                value: 100,
                round: 1,
                duration: 500,
                easing: 'linear',
                update: function() {
                    console.log(scale.value);
                    myName.current && (myName.current.style.scale = `1 ${scale.value / 100}`);
                }
              });
            await new Promise(r => setTimeout(r, 500));
            setCurName(names[i]);
        }
    };

    useEffect(() => { switchName(); }, []);

    return <div ref={myName} className="font-sans Roboto text-9xl font-thin">{curName}</div>;
}
