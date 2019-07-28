import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import './admin.css'
import styles from './admin.module.css';
import Main from "../pages/main/Index";
import Table from "../pages/table/Index";
import Lazy from "../pages/lazy/Index";
import ReduxPage from "../pages/redux/Index";
import ReduxUserPage from "../pages/redux/user.js";
import HomePage from '../pages/demo/index1';

import { signOut } from "../utils/gather";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const UserPage = () => <div>user page</div>

export default class AdminLayout extends React.Component {
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
    signOutHandle = () => {
        signOut();
        this.props.history.replace('/login');
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <NavLink to="/admin/index" activeStyle={{
                                fontWeight: "bold"
                            }}> <Icon type="user" /><span>index</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.clickNav}>
                            <NavLink to="/admin/table" activeStyle={{
                                fontWeight: "bold"
                            }}><Icon type="video-camera" /><span>table</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={this.clickNav}>
                            <NavLink to="/admin/lazy" activeStyle={{
                                fontWeight: "bold"
                            }}><Icon type="video-camera" /><span>lazy</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="5" onClick={this.clickNav}>
                            <NavLink to="/admin/redux" exact activeStyle={{
                                fontWeight: "bold"
                            }}><Icon type="video-camera" /><span>redux</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="6" onClick={this.clickNav}>
                            <NavLink to="/admin/redux/user" exact activeStyle={{
                                fontWeight: "bold"
                            }}><Icon type="video-camera" /><span>redux user</span></NavLink>
                        </Menu.Item>


                        <Menu.Item key="7" onClick={this.clickNav}>
                            <NavLink to="/admin/page" exact activeStyle={{
                                fontWeight: "bold"
                            }}><Icon type="video-camera" /><span>demo1</span></NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <div style={{ float: "left" }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
                        <div style={{ float: "right", paddingRight: "50px" }}>
                            {/* <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                                <li style={{ float: "left", padding: "0 5px" }}>
                                    <Icon type="global" />
                                </li>
                                <li style={{ float: "left", padding: "0 5px" }}><Icon type="user" /></li>
                            </ul> */}
                            <Menu mode="horizontal">
                                <Menu.Item key="global">
                                    <Icon type="global" />
                                </Menu.Item>
                                <SubMenu
                                    title={
                                        <span className="submenu-title-wrapper">
                                            <Icon type="user" />ggc
                                        </span>
                                    }>

                                    <Menu.Item key="setting:1" onClick={this.signOutHandle}>退出</Menu.Item>
                                    {/* <Menu.Item key="setting:2">Option 2</Menu.Item> */}

                                </SubMenu>
                            </Menu>
                        </div>
                        <div style={{ clear: "both" }}></div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {/*<Route path={`${this.props.match.path}/admin/index`} component={Main}/>*/}
                            {/*<Route path={`${this.props.match.path}/admin/table`} component={Table}/>*/}
                            {/*<Route path={`${this.props.match.path}/admin/page`} component={HomePage}/>*/}
                            {/*<Route path={`${this.props.match.path}/admin/page/user`} component={UserPage}/>*/}

                            <Route path={`/admin/index`} component={Main} />
                            <Route path={`/admin/table`} component={Table} />
                            <Route path={`/admin/lazy`} component={Lazy} />
                            <Route exact path={`/admin/redux`} component={ReduxPage} />
                            <Route exact path={`/admin/redux/user`} component={ReduxUserPage} />
                            <Route path={`/admin/page`} component={HomePage} />
                            <Route path={`/admin/page/user`} component={UserPage} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
