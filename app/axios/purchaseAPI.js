import server from "./server"
import querystring from "querystring"

import dailpurchase_data from "./dailpurchase_data.json"
//得到车辆
export const findcar = (qs) => {
    // 真实的接口
    // return server({
    //     method : "get",
    //     url : "/findcar?"+ querystring.stringify(qs),
    // })

    // 模拟接口返回的是一个常数
    // hasOwnProperty 判断自身属性是否存在
   
    
   
    // // region 地区
   
    // // if(!qs.page){
    // //     qs.page=1
    // // }   或者这么写
    // if(!qs.hasOwnProperty("page")){
    //     qs.page = 1
    // }

    
    // 筛选后的结果
    var results = dailpurchase_data.filter(item => {
        var flag = true
        // 商品类型
        if(qs.type && !qs.type.split("v").includes(item.type)){
            flag = false; 
        }
        // 供应商等级
        if(qs.level && !qs.level.split("v").includes(item.level)){
            flag = false
        }
        return flag
    })
    
    return {
        // integer返回一个随机的整数。
        "total" : results.length,
        "results" : results

    }
}

