import React from "react";
import './App.css';
import {Layout} from "@douyinfe/semi-ui";
import {getProfile} from "./api";
import PSider from "./components/PSider";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: {}
        }
    }

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                getProfile: res.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        const {Header, Footer, Content, Sider} = Layout;
        return (
            <Layout>
                <Sider className={"sider-wrap"}>
                    <PSider/>
                </Sider>
                <Layout>
                    <Header className={"blocks"}>
                        Header
                    </Header>
                    <Content className={"blocks"}>
                        Content
                    </Content>
                    <Footer className={"blocks"}>
                        Footer
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
