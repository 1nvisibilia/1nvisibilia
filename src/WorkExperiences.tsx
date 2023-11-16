import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Observable from "./utils/Observable";
import { Tooltip } from "@mui/material";
import anime from "animejs";

function NimbleExp() {
    useEffect(() => {
        anime.timeline({})
            .add({
                targets: ".companylogo img",
                scale: [0, 1],
                rotate: "3turn",
                duration: 500
            })
            .add({
                targets: ".workinfo > div",
                translateX: [300, 0],
                duration: 200,
                delay: anime.stagger(100),
                opacity: [0, 1],
                easing: "easeInOutQuad"
            })
            .add({
                targets: ".workexplinker",
                translateY: [-100, 0],
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 200
            })
            .add({
                targets: ".workexperiencerow ul li",
                translateX: [-100, 0],
                delay: anime.stagger(100),
                opacity: [0, 1]
            });
    }, []);

    return <div style={{ display: "flex", flexDirection: "column", margin: "4em 0" }}>
        <div className="workexperiencerow">
            <div className="companylogo">
                <Tooltip arrow title="NimbleRx" placement="left">
                    <img width={100} src="./nimblerx.jpg"></img>
                </Tooltip>
            </div>
            <div className="workinfo">
                <div style={{ fontWeight: "bold" }}>
                    <div>Software Engineering Intern @ NimbleRx</div>
                    <div><em>May. 2023 - Aug. 2023</em></div>
                </div>
                <div>
                    <div><em>TypeScript • ReactJS • SpringBoot • AWS • PostgreSQL • Elastic</em></div>
                    <div><em>Redwood City, California, United States</em></div>
                </div>
            </div>
        </div>
        <div className="workexperiencerow">
            <div style={{ minWidth: "164px" }}>
                <div className="workexplinker"></div>
            </div>
            <div>
                <ul>
                    <li>Eliminated around 500 emails and phone calls from patient by developing a
                        real-time messaging service with GetStream.io and JWT authentication,
                        which is serving 10,000 users daily.</li>
                    <li>Lead to an increase of $20,000 in monthly revenue by Engineering a
                        UI application page with PDF and digital signature integrations that
                        enabled patients to purchase signature-required drugs online.</li>
                    <li>and more...</li>
                </ul>
            </div>
        </div>
    </div>;
}

export default function WorkExperiences() {
    return <div style={{}}>
        <Observable threshold={1.0}>
            <SectionTitle id="workexperience" titleText="「 Whom I've worked 」" />
        </Observable>

        <Observable threshold={0.5}>
            <NimbleExp />
        </Observable>
    </div>
}
