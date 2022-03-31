import React, {useEffect, useState} from "react";
import {Col, Row, Progress, Typography} from '@douyinfe/semi-ui';
import FloatInfo from "./components/FloatInfo";
import Loading from "./components/Loading";
import ProjectItem from "./components/ProjectItem";
import Experience from "./components/Experience";
import UserData from './data.json'
import './App.scss';
import axios from "axios";
import DarkModeSwitcher from "./components/DarkModeSwitcher";
import {IconGithubLogo, IconMail} from '@douyinfe/semi-icons';

export default function App() {

    const [loading, setLoading] = useState(true)
    const [sentence, setSen] = useState('')
    const {skills, projects, userInfo, experiences} = UserData
    const {Text} = Typography

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
        <>
            <div id="main">
                <DarkModeSwitcher/>
                <Loading sentence={sentence} loading={loading}/>
                <Row>
                    <Col xs={0} sm={8} md={8} lg={8} xl={8} xxl={8}>
                        <FloatInfo profile={userInfo}/>
                    </Col>
                    <Col xs={24} sm={16} md={16} lg={16} xl={16} xxl={16}>
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
                                            <ProjectItem key={item.title} title={item.title} desc={item.desc}
                                                         url={item.url}
                                                         github={item.github}/>))
                                    }
                                </div>
                            </div>

                            <div className="experience">
                                {
                                    experiences.map(item => (<Experience data={item} key={item.title}/>))
                                }
                            </div>

                            <div className="contact">
                                <h2>Contact</h2>
                                <p>你可以通过以下方式找到我</p>
                                <p><IconMail size={"inherit"}/> youranreus@qq.com | <IconGithubLogo
                                    size={"inherit"}/> @youranreus</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <footer>
                <p>made with ❤ by 季悠然</p>
                <span className="beian">
                    <Text
                        link={{href: "https://beian.miit.gov.cn/", target: "_blank"}}>粤ICP备19008557号-2</Text>
                </span>
            </footer>
        </>

    )
}
