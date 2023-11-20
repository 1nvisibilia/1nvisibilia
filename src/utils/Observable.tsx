import React from "react"
import { useInView } from "react-intersection-observer"

type ObservableProp = {
    height: number;
    threshold: number;
    children: JSX.Element;
}

export default function Observable(props: ObservableProp) {
    const { threshold, children, height } = props;
    const [introRef, introInView, entry] = useInView({ threshold });

    const showContent = (introInView || (entry && entry.boundingClientRect.top < 0));

    return <>
        <div ref={introRef} style={{ height: showContent ? 0 : height }}></div>
        {showContent ? children : null}
    </>;
}
