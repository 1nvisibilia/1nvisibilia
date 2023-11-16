import React from "react"
import { useInView } from "react-intersection-observer"

export default function Observable({ threshold, children }: { threshold: number, children: JSX.Element }) {
    const [introRef, introInView, entry] = useInView({ threshold });

    return <>
        <div ref={introRef}></div>
        {(introInView || (entry && entry.boundingClientRect.top < 0)) ? children : null}
    </>;
}
