import React, { Component } from 'react'
import store from 'store'
import { Redirect,Route,Switch } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd';

// comps
import Header from '../../components/Header'
import Sider from '../../components/Sider'
// sub-page
import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Product from '../../pages/Product'
import Role from '../../pages/Role'
import Bar from '../../pages/charts/Bar'
import Pie from '../../pages/charts/Pie'
import Line from '../../pages/charts/Line'

const { Content } = Layout;

export default class Admin extends Component {
    render() {

        if (!store.get('user')) {
            return <Redirect to="/login" />
        }

        return (
            <Layout style={{height:'100vh'}}>
                <Header />
                <Layout>
                    <Sider />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {/* Content */}
                            <Switch>
                                <Route path="/home" component={ Home } />
                                <Route path="/category" component={ Category } />
                                <Route path="/product" component={ Product } />
                                <Route path="/charts/bar" component={ Bar } />
                                <Route path="/charts/pie" component={ Pie } />
                                <Route path="/charts/line" component={ Line } />
                                <Route path="/role" component={ Role } />
                                <Redirect to="/home" /> 
                            </Switch> 
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
