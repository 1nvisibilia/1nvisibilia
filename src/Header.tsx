import React, { useEffect } from "react";
import NavBar from "./NavBar";
import LightBulb, { ThemeType } from "./LightBulb";
import { useMemo } from "react";
import anime from "animejs";

export default function Header({ switchTheme }: { switchTheme: (type: ThemeType) => void }) {
    const navbarElement = useMemo(() => <NavBar />, []);

    useEffect(() => {
        setTimeout(() => {
            anime({
                targets: "#lightbulb",
                translateY: [-150, -75],
                duration: 1000,
                opacity: 1
            });
        }, 1000);
    }, []);
    return <div style={{ position: "sticky", top: 0, left: 0, zIndex: 10 }}>
        {navbarElement}
        <LightBulb switchTheme={switchTheme} />
    </div>;
}
