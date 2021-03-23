import React, { Component } from 'react'

import { Row, Col, Typography, Form, Input, Button, Space } from 'antd'
import { UserOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
// style
import { Wrapper,Left,Right,Vertical } from './style'

const { Title, Text } = Typography;


// 登录的路由组件
export default class Login extends Component {

    render() {
        const onFinish = (values) => {
            // 收集表单数据
            console.log('Received values of form: ', values);
        };


        return (
            <Wrapper>
                <Left>
                    <img src="https://www.17sucai.com/preview/1424582/2020-10-10/login/img/phone.png" alt="" />
                </Left>
                <Right>
                    <div className="login">
                        <Space size={15} direction="vertical" style={{ 'width': '100%' }}>
                            <Title level={3}> 用户登录</Title>
                            <Form
                                size="large"
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        { required: true, message: '请输入账号!' },
                                        { min: 4, message: '不能小于4个字符' }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="输入账号" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        { required: true, message: '请输入密码!' }
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="输入密码"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Row gutter={24}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="captcha"
                                                noStyle
                                                rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                                            >
                                                <Input
                                                    prefix={<SafetyCertificateOutlined />}
                                                    placeholder="输入验证码"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Button>验证码</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                                </Form.Item>
                            </Form>
                            <Vertical>
                                <Text type="secondary">不要在公共场所保存登录信息</Text>
                                <Text type="secondary">为了保证你的账号安全，不操作时请注销登录</Text>
                            </Vertical>
                        </Space>

                    </div>
                </Right>
            </Wrapper>
        )
    }
}
