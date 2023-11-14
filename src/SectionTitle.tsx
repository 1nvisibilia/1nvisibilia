import React, { useEffect, useState } from "react";

export default function SectionTitle({ id, titleText }: { id: string, titleText: string }) {
    const [literalText, setText] = useState("");
    const [underScore, setUnderScore] = useState("_");
    useEffect(() => {
        let curIdx = 0;
        let underScoreIntervalId: number | null = null
        let show = true;
        const id = setInterval(() => {
            setText(titleText.substring(0, curIdx));
            curIdx++;
            if (curIdx > titleText.length) {
                clearInterval(id);
                underScoreIntervalId = setInterval(() => {
                    if (show) {
                        setUnderScore("_");
                    } else {
                        setUnderScore("");
                    }
                    show = !show;
                }, 500);
            }
        }, 100);

        return () => {
            clearInterval(id);
            underScoreIntervalId && clearInterval(underScoreIntervalId);
        };
    }, []);

    return <div style={{ fontFamily: "Consolas", fontSize: "2em" }} id={id}>{literalText}{underScore}</div>
}
