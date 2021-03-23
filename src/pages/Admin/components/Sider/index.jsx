import React, { Component } from 'react'
import { Menu, Layout } from 'antd'
import * as Icon from '@ant-design/icons';
import { Link,withRouter } from 'react-router-dom'
import menuList from '../../../../config/menuConfig'
const { SubMenu } = Menu;
const { Sider } = Layout;

class HeaderComps extends Component {


    getMenuNode_map = menuList => {
        return menuList.map(v => {
            if (!v.children) {
                return (
                    <Menu.Item icon={React.createElement(Icon[v.icon])} key={v.key}>
                        <Link to={v.key} >{v.title}</Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={v.key} icon={React.createElement(Icon[v.icon])} title={v.title}>
                        {
                            this.getMenuNode(v.children)
                        }
                    </SubMenu>
                )
            }
        })
    }

    getMenuNode = menuList => {
        return menuList.reduce((pre, v) => {
            // 向pre中添加Menu.item或SubMenu
            if (!v.children) {
                pre.push(
                    (
                        <Menu.Item icon={React.createElement(Icon[v.icon])} key={v.key}>
                            <Link to={v.key} >{v.title}</Link>
                        </Menu.Item>
                    )
                )
            } else {
                const { pathname } = this.props.history.location
                const cItem = v.children.find( v=>v.key === pathname )
                if( cItem ){
                    this.openKey = v.key 
                }
                pre.push((
                    <SubMenu key={v.key} icon={React.createElement(Icon[v.icon])} title={v.title}>
                        {
                            this.getMenuNode(v.children)
                        }
                    </SubMenu>
                )
                )
            }
            return pre
        }, [])
    }

    // 为第一次render()之前做准备
    UNSAFE_componentWillMount(){
        this.MenuNode = this.getMenuNode(menuList)
    }

    render() {
        const { pathname } = this.props.history.location
        const openKey = this.openKey
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    selectedKeys={ [pathname] }
                    defaultOpenKeys={ [openKey] }
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        this.MenuNode
                    }
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(HeaderComps)