import React from 'react';
import Sales from "../../containers/Sales"
export default class CustomerRetention extends React.Component{
 
    constructor(){
        super()
 
    }
 
    render(){
        return(
            <Sales current="CustomerRetention">
                <h1>我是客户挽留CustomerRetention</h1>
            </Sales>
        )
    }
}