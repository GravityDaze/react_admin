import React, { Component } from 'react'
import { Layout, Button,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import { Right } from './style'
// api
import { reqWeather } from '../../api'
// utils
import store from 'store'
import { formateDate } from '../../utils/time'

import  menuList from "../../config/menuConfig";
const { confirm } = Modal;
const { Header } = Layout;

class HeaderComp extends Component {

    state = {
        currentTime: formateDate(Date.now()),
    }

    componentDidMount() {
        this.getWeather()
        this.getCurrentTime()
        
    }

    componentWillUnmount(){
        clearInterval( this.timer )
    }

    // 动态获取天气
    getWeather = async () => {
        const res = await reqWeather('北京')
        console.log(res)
    }

    // 动态获取时间
    getCurrentTime = () => {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: formateDate(Date.now())
            })
        }, 1000)
    }

    getTitle = ()=>{
        const { pathname } = this.props.history.location
        let title
        menuList.forEach( v=>{
            if(v.key === pathname){
                title = v.title 
            }else if ( v.children ){
                const cItem = v.children.find( v=> v.key === pathname )
                if( cItem ){
                    title = cItem.title
                }
            }   
        } )
        return title
    }

    logout = ()=>{
        confirm({
            title: '提示',
            icon: <ExclamationCircleOutlined />,
            content: '确定退出吗?',
            okText: '是的',
            cancelText:'取消',
            centered:true,
            onOk:()=> {
                store.clearAll()
                this.props.history.replace('/login')
            },
            onCancel() {
              console.log('Cancel');
            },
        })
    }


    render() {
       
        return (
            <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ color: '#fff' }}>{ this.getTitle() }</h1>
                <Right>
                    <div>
                        <span style={{ marginRight: '25px' }}>成都,晴</span>
                        <span>{this.state.currentTime}</span>
                    </div>
                    <span style={{ margin: '0 25px' }}>欢迎 , admin</span>
                    <Button type="danger" onClick={ this.logout }>退出</Button>
                </Right>
            </Header>
        )
    }
}

export default withRouter( HeaderComp )
