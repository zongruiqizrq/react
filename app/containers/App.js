import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,} from 'antd';
// 引入routerRedux为了跳转路由
import { Router, Route, routerRedux } from "dva/router";
import {connect} from "dva";

// 引入样式表
import "../../styles/app.less"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component{
    constructor(){
        super();
        // 导航的数据
        this.state = {
            menus : [
                {"e" : "Index" , "c" : "首页"},
                {"e" : "Purchase" , "c" : "采购管理"},
                {"e" : "Sales" , "c" : "销售管理"},
            ]
        }
    }
    render(){
        return(
            <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[this.props.current]}
                style={{ lineHeight: '64px' }}
                onClick={({key})=>{
                    this.props.dispatch(routerRedux.push("/" + key.toLocaleLowerCase()))
                }}
              >
                {this.state.menus.map((item)=><Menu.Item key={item.e}>{item.c}</Menu.Item>)}
              </Menu>
            </Header>
                <Content style={{
                  background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}
                >
                 {this.props.children}
                </Content>
            </Layout>
            
        )
    }
}
export default connect()(App)