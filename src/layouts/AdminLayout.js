import React from 'react';
import {Route} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import './admin.css'

const {Header, Sider, Content} = Layout;

export class AdminLayout extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    clickNav = () => {
        // router.push('/table')
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.clickNav}>
                            <Icon type="video-camera"/>
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span>nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="upload"/>
                            <span>nav 4</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="upload"/>
                            <span>nav 5</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Route path={`${this.props.match.path}/demo`} component={Demo}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
