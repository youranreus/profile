import React, {useEffect, useState} from "react";
import {Col, Row} from '@douyinfe/semi-ui';
import FloatInfo from "./components/FloatInfo";
import Loading from "./components/Loading";
import {getProfile} from "./api";
import './App.css';
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
    }, [])

    return (
        <div id="main">
            <Loading sentence={sentence} loading={loading}/>
            <Row>
                <Col span={8}>
                    <FloatInfo profile={profile}/>
                </Col>
                <Col span={16}>
                    <h2>main</h2>
                </Col>
            </Row>
        </div>
    )
}
