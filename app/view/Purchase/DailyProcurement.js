import React from 'react';
// 设置路由使用的
import Purchase from "../../containers/Purchase"
import { connect } from 'dva';

import {Table } from "antd";
// 引入列
import getCol from "./getCol"

 class DailyProcurement extends React.Component{
    // 最早的生命周期
    constructor(props){
        super(props);
        props.dispatch({"type" : "dailyProcurementModel/loadData"})
    }
    render(){      
        return(
            <Purchase current="DailyProcurement">
               {/* <h1>我是日常采购DailyProcurement</h1> */}
               {/* 大表 */}
               <h3>根据当前的筛选条件，功能找到{this.props.total}条，每页{this.props.pagesize}条/共{Math.ceil (this.props.total/this.props.pagesize)}页</h3>
               <Table 
                rowKey="id" 
                columns={getCol()} 
                dataSource={this.props.results}
                pagination={{
                    current : this.props.page,
                    pageSize : this.props.pagesize,
                    total : this.props.total,
                    showSizeChanger : true
                }}
                onChange = {(pagination)=>{
                    this.props.dispatch({
                        "type" : "dailyProcurementModel/changePageOrSort" ,
                        "page" : pagination.current ,
                         "pagesize":pagination.pageSize
                        })
                }}     
                ></Table>
            </Purchase>
        )
    }
}
export default connect(
    ({dailyProcurementModel}) => ({
        results : dailyProcurementModel.results,
        total : dailyProcurementModel.total,
        page : dailyProcurementModel.page,
        pagesize : dailyProcurementModel.pagesize
    })
)(DailyProcurement)