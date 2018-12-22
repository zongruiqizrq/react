import React from 'react';
import Purchase from "../../containers/Purchase"

export default class SupplierDocumentInquiry extends React.Component{
 
    constructor(){
        super()
 
    }
 
    render(){
        return(
            <Purchase current="SupplierDocumentInquiry">
                <h1>我是供应商单据查询SupplierDocumentInquiry</h1>
            </Purchase>
        )
    }
}