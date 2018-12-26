import React from "react";
import Dva from "dva";
import logger from "redux-logger"
//引入路由文件
import router from "./router";
//引入model
// 日常采购的model
import dailyProcurementModel from "./model/dailyProcurementModel"
import indexModel from "./model/indexModel"
// 创建app
const app = Dva({
    onAction : [logger]
});
app.model(dailyProcurementModel)
app.model(indexModel)

// 路由
app.router(router);
// 挂载点
app.start("#app")