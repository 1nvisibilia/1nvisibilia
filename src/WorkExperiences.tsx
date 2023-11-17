import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Observable from "./utils/Observable";
import { Tooltip } from "@mui/material";
import anime from "animejs";

function animationSection(id: string) {
    anime.timeline({})
        .add({
            targets: `#${id} .companylogo img`,
            scale: [0, 1],
            rotate: "3turn",
            duration: 500
        })
        .add({
            targets: `#${id} .workinfo > div`,
            translateX: [300, 0],
            duration: 200,
            delay: anime.stagger(100),
            opacity: [0, 1],
            easing: "easeInOutQuad"
        })
        .add({
            targets: `#${id} .workexplinker`,
            translateY: [-100, 0],
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 200
        })
        .add({
            targets: `#${id} .workexperiencerow ul li`,
            translateX: [-100, 0],
            delay: anime.stagger(100),
            opacity: [0, 1]
        });
}

function NimbleExp() {
    useEffect(() => {
        animationSection("nimblerx");
    }, []);

    return <div id="nimblerx">
        <div className="workexperiencerow">
            <div className="companylogo">
                <Tooltip arrow title="NimbleRx" placement="left">
                    <img width={100} src="./nimblerx.jpg" style={{ borderRadius: "50%" }}></img>
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

function VoiceFormExp() {
    useEffect(() => {
        animationSection("voiceform");
    }, []);

    return <div id="voiceform">
        <div className="workexperiencerow">
            <div className="companylogo">
                <Tooltip arrow title="NimbleRx" placement="left">
                    <img width={100} src="./voiceform.jpg" style={{ borderRadius: "50%" }}></img>
                </Tooltip>
            </div>
            <div className="workinfo">
                <div style={{ fontWeight: "bold" }}>
                    <div>Full-stack Engineering Intern @ NimbleRx</div>
                    <div><em>Sept. 2022 - Dec. 2022</em></div>
                </div>
                <div>
                    <div><em>VueJS • Laravel • GCP • MySQL</em></div>
                    <div><em>Toronto, Ontario, Canada</em></div>
                </div>
            </div>
        </div>
        <div className="workexperiencerow">
            <div style={{ minWidth: "164px" }}>
                <div className="workexplinker"></div>
            </div>
            <div>
                <ul>
                    <li>Reduced 50% of manual releasing process by setting up GitHub Action pipelines
                        to build and upload static web embeds to the internal CDN.</li>
                    <li>Sped up the survey submission speed by 10 times with Google's
                        speech-to-text API service to dispatch and perform asynchronous
                        audio data processing events through Laravel's job queues.</li>
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

        <Observable threshold={0.7}>
            <NimbleExp />
        </Observable>
        <Observable threshold={0.7}>
            <VoiceFormExp />
        </Observable>
    </div>
}
