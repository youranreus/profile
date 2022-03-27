import React, {useEffect, useState} from "react";
import {Col, Row, Progress} from '@douyinfe/semi-ui';
import FloatInfo from "./components/FloatInfo";
import Loading from "./components/Loading";
import {getProfile} from "./api";
import './App.scss';
import axios from "axios";

export default function App() {

    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [sentence, setSen] = useState('')

    useEffect(() => {
        getProfile().then(res => {
            setProfile(res.data)
            console.log(res.data)
            setLoading(false)
        })
        axios.get('https://v1.hitokoto.cn/?c=k').then(res => {
            setSen(res.data.hitokoto)
        })

        // document.body.setAttribute('theme-mode', 'dark')
    }, [])

    const skills = [
        {
            title: 'HTML',
            percent: '70',
            color: 'rgba(var(--semi-blue-6), 1)'
        },
        {
            title: 'CSS',
            percent: '80',
            color: ''
        },
        {
            title: 'JS',
            percent: '60',
            color: 'rgba(var(--semi-pink-4), 1)'
        },
        {
            title: 'Git',
            percent: '70',
            color: 'rgba(var(--semi-blue-6), 1)'
        },
        {
            title: 'PHP',
            percent: '50',
            color: ''
        },
    ]

    return (
        <div id="main">
            <Loading sentence={sentence} loading={loading}/>
            <Row>
                <Col span={8}>
                    <FloatInfo profile={profile}/>
                </Col>
                <Col span={16}>
                    <div className={'content'}>
                        <h1>README</h1>
                        <div className="readme">
                            <p>{profile ? profile.about.README.content : ''}</p>
                        </div>

                        <div className="skill">
                            <h2>SKill</h2>
                            <div className={"skill-list"}>
                                <Row>
                                    <Col span={12}>
                                        {
                                            skills.map((item, index) => index % 2 === 0 ? (
                                                <div className="skill-item" key={item.title}>
                                                    <span>{item.title}</span>
                                                    <Progress percent={item.percent} showInfo stroke={item.color || ""}/>
                                                </div>
                                            ) : (""))
                                        }
                                    </Col>
                                    <Col span={12}>
                                        {
                                            skills.map((item, index) => index % 2 !== 0 ? (
                                                <div className="skill-item" key={item.title}>
                                                    <span>{item.title}</span>
                                                    <Progress percent={item.percent} showInfo stroke={item.color || ""}/>
                                                </div>
                                            ) : (""))
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
