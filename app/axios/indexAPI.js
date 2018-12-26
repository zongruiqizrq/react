import server from "./server"
import querystring from "querystring"

import  mock from "mockjs"
// 得到日常销售的数据

export const getTubiao = (qs) => {   
    // 真实的接口
    // return server({
    //     method : "get",
    //     url : "/getTubiao?" + querystring.stringify(qs)
    // })
    return {
        "results" : [
            {value:(function(){
                return mock.Random.integer(10,999)
            })(), name:'直接访问'},
            {value:(function(){
                return mock.Random.integer(10,999)
            })(), name:'邮件营销'},
            {value:(function(){
                return mock.Random.integer(10,999)
            })(), name:'联盟广告'},
            {value:(function(){
                return mock.Random.integer(10,999)
            })(), name:'视频广告'},
            {value:(function(){
                return mock.Random.integer(10,999)
            })(), name:'搜索引擎'}
        ]
    }
}