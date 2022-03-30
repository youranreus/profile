import React, {useEffect, useState} from "react";
import {Col, Row, Progress} from '@douyinfe/semi-ui';
import FloatInfo from "./components/FloatInfo";
import Loading from "./components/Loading";
import ProjectItem from "./components/ProjectItem";
import Experience from "./components/Experience";
import UserData from './data.json'
import './App.scss';
import axios from "axios";
import DarkModeSwitcher from "./components/DarkModeSwitcher";

export default function App() {

    const [loading, setLoading] = useState(true)
    const [sentence, setSen] = useState('')
    const {skills, projects, userInfo, experiences} = UserData

    userInfo.desc = userInfo.desc.replace(/\${getGrade\((.*?)\)}/g, (v, p1) => {
        return getGrade(parseInt(p1))
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        axios.get('https://v1.hitokoto.cn/?c=k').then(res => {
            setSen(res.data.hitokoto)
        })
    }, [])

    function getGrade(enter) {
        return [0, 'fresh man', 'sophomore', 'junior', 'senior'][new Date().getFullYear() - enter]
    }

    return (
        <div id="main">
            <DarkModeSwitcher/>
            <Loading sentence={sentence} loading={loading}/>
            <Row>
                <Col span={8}>
                    <FloatInfo profile={userInfo}/>
                </Col>
                <Col span={16}>
                    <div className={'content'}>
                        <h1>README</h1>
                        <div className="readme">
                            <p dangerouslySetInnerHTML={{__html: userInfo.desc}}/>
                        </div>

                        {
                            skills.map(item => (
                                <div key={item.title} className="skill">
                                    <h2>{item.title}</h2>
                                    <div className={"skill-list"}>
                                        <Row>
                                            <Col span={12}>
                                                {
                                                    item.skills.map((item, index) => index % 2 === 0 ? (
                                                        <div className="skill-item" key={item.title}>
                                                            <span>{item.title}</span>
                                                            <Progress percent={item.percent} showInfo
                                                                      stroke={item.color || ""}/>
                                                        </div>
                                                    ) : (""))
                                                }
                                            </Col>
                                            <Col span={12}>
                                                {
                                                    item.skills.map((item, index) => index % 2 !== 0 ? (
                                                        <div className="skill-item" key={item.title}>
                                                            <span>{item.title}</span>
                                                            <Progress percent={item.percent} showInfo
                                                                      stroke={item.color || ""}/>
                                                        </div>
                                                    ) : (""))
                                                }
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="projects">
                            <h2>Projects</h2>
                            <div className="project-list">
                                {
                                    projects.map(item => (
                                        <ProjectItem key={item.title} title={item.title} desc={item.desc} url={item.url}
                                                     github={item.github}/>))
                                }
                            </div>
                        </div>

                        <div className="experience">
                            {
                                experiences.map(item => (<Experience data={item} key={item.title}/>))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
