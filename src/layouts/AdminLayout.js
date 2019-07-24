import React from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import './admin.css'
import Main from "../pages/main/Index";
import Table from "../pages/table/Index";
import Lazy from "../pages/lazy/Index";
import {signOut} from "../utils/gather";

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;


const HomePage = () => <div>home page</div>
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
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <NavLink to="/admin/index" activeStyle={{
                                fontWeight: "bold"
                            }}> <Icon type="user"/><span>index</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.clickNav}>
                            <NavLink to="/admin/table" activeStyle={{
                                fontWeight: "bold"
                            }}><Icon type="video-camera"/><span>table</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={this.signOutHandle}>
                            <Icon type="logout"/><span>退出</span>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={this.clickNav}>
                            <NavLink to="/admin/lazy" activeStyle={{
                                fontWeight: "bold"
                            }}><Icon type="video-camera"/><span>lazy</span></NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <div>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </div>
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

                            <Route path={`/admin/index`} component={Main}/>
                            <Route path={`/admin/table`} component={Table}/>
                            <Route path={`/admin/lazy`} component={Lazy}/>
                            <Route path={`/admin/page`} component={HomePage}/>
                            <Route path={`/admin/page/user`} component={UserPage}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
