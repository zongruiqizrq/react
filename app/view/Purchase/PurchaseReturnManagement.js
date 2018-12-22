import React from 'react';
import Purchase from "../../containers/Purchase"

export default class PurchaseReturnManagement extends React.Component{
 
    constructor(){
        super()
 
    }
 
    render(){
        return(
            <Purchase current="PurchaseReturnManagement">
                <h1>我是采购退货管理PurchaseReturnManagement</h1>
            </Purchase>
        )
    }
}