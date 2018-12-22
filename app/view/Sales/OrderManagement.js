import React from 'react';
import Sales from "../../containers/Sales"

export default class OrderManagement extends React.Component{
 
    constructor(){
        super()
 
    }
 
    render(){
        return(
            <Sales current="OrderManagement">
                <h1>我是订单管理OrderManagement</h1>
            </Sales>
        )
    }
}