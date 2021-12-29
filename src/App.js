import './App.css';
import {Layout} from "@douyinfe/semi-ui";

function App() {
    const {Header, Footer, Content, Sider} = Layout;
    return (
        <Layout>
            <Sider className={"sider blocks"}>
                Sidebar
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

export default App;
