import React, {useEffect, useState} from "react";
import {Col, Row, Progress} from '@douyinfe/semi-ui';
import FloatInfo from "./components/FloatInfo";
import Loading from "./components/Loading";
import ProjectItem from "./components/ProjectItem";
import {getProfile} from "./api";
import './App.scss';
import axios from "axios";
import DarkModeSwitcher from "./components/DarkModeSwitcher";

export default function App() {

    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [sentence, setSen] = useState('')

    useEffect(() => {
        getProfile().then(res => {
            setProfile(res.data)
            setLoading(false)
        })
        axios.get('https://v1.hitokoto.cn/?c=k').then(res => {
            setSen(res.data.hitokoto)
        })
    }, [])

    const skills = [
        {
            title: 'Programming',
            skills: [
                {
                    title: 'HTML',
                    percent: 70,
                    color: 'rgba(var(--semi-blue-6), 1)'
                },
                {
                    title: 'CSS',
                    percent: 80,
                    color: ''
                },
                {
                    title: 'JS',
                    percent: 60,
                    color: 'rgba(var(--semi-pink-4), 1)'
                },
                {
                    title: 'Git',
                    percent: 70,
                    color: 'rgba(var(--semi-blue-6), 1)'
                },
                {
                    title: 'PHP',
                    percent: 50,
                    color: ''
                },
            ]
        },
        {
            title: 'Other',
            skills: [
                {
                    title: 'Work With Team',
                    percent: 80,
                    color: ''
                },
                {
                    title: 'Design',
                    percent: 30,
                    color: ''
                },
                {
                    title: 'Communication',
                    percent: 70,
                    color: ''
                },
                {
                    title: 'Self-control',
                    percent: 70,
                    color: 'rgba(var(--semi-blue-6), 1)'
                }
            ]
        }
    ]

    const projects = [
        {
            title: 'G',
            desc: 'a graceful typecho theme',
            github: 'youranreus/G',
            url: 'https://blog.mitsuha.space'
        },
        {
            title: 'note',
            desc: '季悠然の便签',
            github: 'youranreus/note',
            url: 'https://note.imouto.tech'
        },
        {
            title: 'Homepod',
            desc: '个人练手自制的PHP框架',
            github: 'youranreus/Homepod',
            url: ''
        },
        {
            title: '博客新手村',
            desc: '为博客小白搭建的从零开始的入门教程网站',
            github: 'ImoutoTech/tutorial',
            url: 'https://imouto.tech'
        }
    ]

    const userInfo = {
        username: 'youranreus',
        desc: `零二年生少年🧑，坐标深圳技术大学🏫<br>a ${getGrade(2020)} who majors in CS<br> 爱好是 { 踢球⚽ / 做饭👨‍🍳 / 发呆😶 }<br>平时喜欢做计划，在意仪式感`
    }

    function getGrade(enter) {
        return [0, 'fresh man', 'sophomore', 'junior', 'senior'][new Date().getFullYear() - enter]
    }

    return (
        <div id="main">
            <DarkModeSwitcher/>
            <Loading sentence={sentence} loading={loading}/>
            <Row>
                <Col span={8}>
                    <FloatInfo profile={profile}/>
                </Col>
                <Col span={16}>
                    <div className={'content'}>
                        <h1>README</h1>
                        <div className="readme">
                            <p dangerouslySetInnerHTML={{__html: userInfo.desc}}></p>
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
                    </div>
                </Col>
            </Row>
        </div>
    )
}
