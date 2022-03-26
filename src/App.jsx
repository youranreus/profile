import React, {useEffect, useState} from "react";
import { Col, Row } from '@douyinfe/semi-ui';
import {getProfile} from "./api";
import './App.css';

export default function App() {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile().then(res => {
            setProfile(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <div id="main">
            <Row>
                <Col span={8}>
                    <h2>侧边栏</h2>
                </Col>
                <Col span={16}>
                    <h2>main</h2>
                </Col>
            </Row>
        </div>
    )
}
