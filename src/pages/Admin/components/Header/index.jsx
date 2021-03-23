import React, { Component } from 'react'
import { Layout } from 'antd';
import { Right } from './style'
const { Header } = Layout;

export default class index extends Component {
    render() {
        return (
            <Header style={{ display:'flex' }}>
                <h1>logo</h1>
                <Right>
                    <span>欢迎 , admin</span>
                    <span>退出</span>
                </Right>
            </Header>
        )
    }
}
