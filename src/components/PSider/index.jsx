/**
 * @author 季悠然
 * @date 2021-12-30
 */
import React from 'react';
import {Typography, Avatar, Tag, Space} from "@douyinfe/semi-ui";
import './style.css';

function Index() {
    const {Text, Title} = Typography;
    return (
        <div className="sider">
            <div className={"sider-content"}>
                <div className="sider-header">
                    <Space vertical={true} spacing={"loose"}>
                        <Avatar size={"extra-large"}>季</Avatar>
                        <div className="sider-header-content">
                            <Space vertical={true} spacing={"loose"}>
                                <Space wrap={true}>
                                    <Tag color={"violet"} size={"large"}>Frontend</Tag>
                                    <Tag color={"blue"} size={"large"}>Coder</Tag>
                                    <Tag color={"cyan"} size={"large"}>Blogger</Tag>
                                </Space>
                                <Title heading={2}>季悠然</Title>
                                <Text>
                                    初中某一天做梦的时候，虽然不记得梦到了什么，但是醒来之后脑子里只有四个字——“四季悠然”。于是便有了季悠然这个ID。而youranreus是由两部分组成的，youran为“悠然”的拼音，reus取自最喜欢的足球运动员马尔科·罗伊斯（Marco
                                    Reus）。（没想到吧，我还是个足球少年
                                    其他常用ID
                                </Text>
                            </Space>
                        </div>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Index;