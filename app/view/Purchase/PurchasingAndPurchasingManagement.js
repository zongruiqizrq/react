import React from 'react';
import Purchase from "../../containers/Purchase"

export default class PurchasingAndPurchasingManagement extends React.Component{
 
    constructor(){
        super()
 
    }
 
    render(){
        return(
            <Purchase current="PurchasingAndPurchasingManagement">
                <h1>我是采购进货管理PurchasingAndPurchasingManagement</h1>
            </Purchase>
        )
    }
}