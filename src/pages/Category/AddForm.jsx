import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Select, Input } from 'antd'
const { Option } = Select

export default class AddForm extends Component {

    static propTypes = {
        cate: PropTypes.array,
        getFormRef: PropTypes.func
    }

    formRef = React.createRef()

    componentDidMount() {
        this.props.getFormRef(this.formRef.current)
    }

    render() {
        const { cate } = this.props

        return (
            <Form
                ref={ this.formRef } 
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="所属分类"
                    name="parentId"
                    rules={[{ required: true, message: '!' }]}
                >
                    <Select
                        placeholder="请选择分类"
                        allowClear
                    >
                        {
                            cate.map(v => (
                                <Option key={v._id} value={v.key}>{v.name}</Option>
                            ))
                        }

                    </Select>
                </Form.Item>

                <Form.Item
                    label="分类名称"
                    name="categoryName"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }
}
