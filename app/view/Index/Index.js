import React from 'react';
import App from "../../containers/App"
import { connect } from 'dva';
class Index extends React.Component{
 
    constructor(props){
        super(props)
        
        props.dispatch({"type" : "indexModel/getTubiao"})
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
         this.myChart = echarts.init(this.refs.main);
        // 指定图表的配置项和数据
        var option = {
            // 悬浮框
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            // 图例
            legend: {
                orient: 'vertical',
                x: 'left',
                data:this.props.name
            },
            
        };
        // 使用指定的配置项和数据显示图表
       this.myChart.setOption(option)
    }
    // 组件即将得到的数据
    componentWillReceiveProps(props){
        this.myChart.setOption({
             series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: props.results
                }
            ]   
        })
    }
    render(){
        return(
            <App current="Index">
               
               {/* 为 ECharts 准备一个具备大小（宽高）的 DOM  */}
                <div id="main" style={{
                    "width" : 600,
                    "height" : 400
                }} ref="main"></div>
                
            </App>
        )
    }
}
export default connect(
    ({indexModel}) => ({
        results : indexModel.results,
        name : indexModel.name
    })
)(Index)