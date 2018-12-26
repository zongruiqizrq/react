import React from 'react';
import Purchase from "../../containers/Purchase";

import { Steps } from 'antd';

const Step = Steps.Step;

export default class PurchasingAndPurchasingManagement extends React.Component{
 
    constructor(){
        super()
 
    }
 
    render(){
        return(
            <Purchase current="PurchasingAndPurchasingManagement">
                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </Purchase>
        )
    }
}