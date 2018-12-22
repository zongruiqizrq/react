import React from 'react';
import App from "../../containers/App"
export default class Index extends React.Component{
 
    constructor(){
        super()
 
    }
 
    render(){
        return(
            <App current="Index">
                <h1>我是首页</h1>
            </App>
        )
    }
}