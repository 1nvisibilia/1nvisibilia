import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Observable from "./utils/Observable";
import { Tooltip } from "@mui/material";
import anime from "animejs";
import { gotoUrl } from "./utils/url";

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
                    <img onClick={() => gotoUrl("https://www.nimblerx.com")} width={100} src="./nimblerx.jpg" style={{ borderRadius: "50%" }}></img>
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
                <Tooltip arrow title="Voiceform" placement="left">
                    <img onClick={() => gotoUrl("https://www.voiceform.com")} width={100} src="./voiceform.jpg" style={{ borderRadius: "50%" }}></img>
                </Tooltip>
            </div>
            <div className="workinfo">
                <div style={{ fontWeight: "bold" }}>
                    <div>Full-stack Engineering Intern @ Voiceform</div>
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

function OpenTextExp() {
    useEffect(() => {
        animationSection("opentext");
    }, []);

    return <div id="opentext">
        <div className="workexperiencerow">
            <div className="companylogo">
                <Tooltip arrow title="OpenText" placement="left">
                    <img onClick={() => gotoUrl("https://www.opentext.com")} width={100} src="./opentext.jpg" style={{ borderRadius: "50%" }}></img>
                </Tooltip>
            </div>
            <div className="workinfo">
                <div style={{ fontWeight: "bold" }}>
                    <div>Software Developer Intern @ OpenText</div>
                    <div><em>Jan. 2022 - Apr. 2022</em></div>
                </div>
                <div>
                    <div><em>NodeJS • AngularJS • ExpressJS • Manta</em></div>
                    <div><em>Waterloo, Ontario, Canada</em></div>
                </div>
            </div>
        </div>
        <div className="workexperiencerow">
            <div style={{ minWidth: "164px" }}>
                <div className="workexplinker"></div>
            </div>
            <div>
                <ul>
                    <li>Improved the data-transfer microservice system that serves
                        100,000 API requests per day using a scatter-gather design method that
                        results in a 16 times faster data transfer process.</li>
                    <li>and more...</li>
                </ul>
            </div>
        </div>
    </div>;
}

function UWExp() {
    useEffect(() => {
        animationSection("uwexp");
    }, []);

    return <div id="uwexp">
        <div className="workexperiencerow">
            <div className="companylogo">
                <Tooltip arrow title="U of Waterloo" placement="left">
                    <img onClick={() => gotoUrl("https://uwaterloo.ca")} width={100} src="./uwaterloo.png" style={{ borderRadius: "50%" }}></img>
                </Tooltip>
            </div>
            <div className="workinfo">
                <div style={{ fontWeight: "bold" }}>
                    <div>Software Developer Intern @ U of Waterloo</div>
                    <div><em>May. 2021 - Aug. 2021</em></div>
                </div>
                <div>
                    <div><em>Python • PyPandoc • PyQuery</em></div>
                    <div><em>Waterloo, Ontario, Canada</em></div>
                </div>
            </div>
        </div>
        <div className="workexperiencerow">
            <div style={{ minWidth: "164px" }}>
                <div className="workexplinker"></div>
            </div>
            <div>
                <ul>
                    <li>Reduced onlines assessment's question generation time down to less than 5
                        seconds by writing a python integration tool that automatically generates
                        assessment contents on the Mobius platform.
                    </li>
                    <li>and more...</li>
                </ul>
            </div>
        </div>
    </div>;
}

export default function WorkExperiences() {
    return <div>
        <Observable scrollref="workexperience" threshold={1.0} height={41.6}>
            <SectionTitle id="workexperience" titleText="「 Whom I've worked 」" />
        </Observable>

        <Observable threshold={0.7} height={309.6}>
            <NimbleExp />
        </Observable>
        <Observable threshold={0.7} height={290.4}>
            <VoiceFormExp />
        </Observable>
        <Observable threshold={0.7} height={233.6}>
            <OpenTextExp />
        </Observable>
        <Observable threshold={0.7} height={233.6}>
            <UWExp />
        </Observable>
    </div>
}
