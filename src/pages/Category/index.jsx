import React, { Component } from 'react'
import { Table, Card, Space, Button,Modal, message } from 'antd';
import { queryCate,addCate } from '../../api/product'
import AddForm from './AddForm'

export default class index extends Component {

    state = {
        data: [],
        loading: true,
        isvisible:false
    }

    componentDidMount() {
        this.initCols()
        this.getCate()
    }

    initCols = () => {
        this.columns = [
            {
                title: '分类列表',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '操作',
                key: 'action',
                render: (row) => (
                    <Space>
                        <a>修改分类</a>
                        {
                            this.parentId === 0 ?
                                <a onClick={() => this.getCate(row._id)}>查看子分类</a>
                                :
                                null
                        }
                    </Space>
                ),
            },
        ];
    }

    getCate = async (parentId = 0) => {
        // debugger
        this.parentId = parentId
        const res = await queryCate({ parentId })
        const { data } = res.data
        this.setState({ data, loading: false })

    }

    addCate = () =>{
        this.setState({isvisible:true})
    }

    submitCate = ()=>{
        this.form.validateFields().then( async values => {
            try{
                const res= await addCate( values )
                message.success(`添加分类${ res.data.data.name }成功`)
                this.setState({isvisible:false}) 
                this.getCate()
            }catch{}
       } ).catch(_=>{})
       

    }

    handleCancel =()=>{
        this.setState({isvisible:false})
    }

    render() {
        const { loading, data,isvisible } = this.state
        const title = this.parentId === 0 || this.parentId === undefined ? '一级分类列表' : (
            <a onClick={() => this.getCate()}>一级分类列表</a>
        )
        return (
            <Card title={title} extra={<Button type="primary" onClick={ this.addCate }>添加</Button>}>
                <Table
                    rowKey="_id"
                    bordered
                    columns={this.columns}
                    dataSource={data}
                    loading={loading}
                />
                <Modal centered title="添加分类" visible={isvisible} onOk={this.submitCate} onCancel={  this.handleCancel }>
                    <AddForm  cate={ data } getFormRef={ (form)=>{ this.form = form  } } /> 
                </Modal>

            </Card>

        )
    }
}
