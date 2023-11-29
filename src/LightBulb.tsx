import { useTheme } from "@mui/material";
import React, { useState } from "react";

export type ThemeType = "light" | "dark";

export default function LightBulb({ switchTheme }: { switchTheme: (type: ThemeType) => void }) {
    const theme = useTheme();
    const [type, setType] = useState<ThemeType>("light");

    const toggleTheme = () => {
        if (type === "light") {
            setType("dark");
            switchTheme("dark");
        } else {
            setType("light");
            switchTheme("light");
        }
    }

    return <div id="lightbulb" style={{
        display: "flex", flexDirection: "column", opacity: 0,
        marginRight: "4em", alignItems: "center", float: "right"
    }}>
        <div style={{
            width: "3px", height: "200px",
            backgroundColor: theme.palette.primary.main === "#000000" ? "black" : "white"
        }}></div>
        <div style={{ marginTop: "-2px" }} onClick={toggleTheme}>
            {type === "light"
                ? <img height={50} src="./lightoff.png" />
                : <img height={50} src="./lighton.png" />}
        </div>
    </div>
}
