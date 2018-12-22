import React from "react";
import { Router, Route ,Redirect} from 'dva/router';


import Index from "./view/Index/Index"
import Purchase from "./containers/Purchase"
import Sales from "./containers/Sales"
import DailyProcurement from "./view/Purchase/DailyProcurement"
import PurchaseReturnManagement from "./view/Purchase/PurchaseReturnManagement"
import PurchasingAndPurchasingManagement from "./view/Purchase/PurchasingAndPurchasingManagement"
import SupplierDocumentInquiry from "./view/Purchase/SupplierDocumentInquiry"
import CustomerRetention from "./view/Sales/CustomerRetention"
import PromotionManagement from "./view/Sales/PromotionManagement"
import OrderManagement from "./view/Sales/OrderManagement"
export default ({ history }) => {
  return (
      <Router history={history}>
          <div>
            {/* exact是精准匹配路由 */}
            {/* 首页  */}
            {/* component 与  Redirect to 不能同时使用 */}
            <Route path="/" exact component={Index} />
            <Route path="/index" exact  render={()=>{
              return <Redirect to="/"/>
            }} />
            {/* 采购管理 */}
            <Route path="/purchase" exact  render={()=>{
              return <Redirect to="/purchase/dailyprocurement" />
            }} />
            <Route path="/purchase/dailyprocurement" exact component={DailyProcurement} />
            <Route path="/purchase/purchasereturnmanagement" exact component={PurchaseReturnManagement} />
            <Route path="/purchase/purchasingandpurchasingmanagement" exact component={PurchasingAndPurchasingManagement} />
            <Route path="/purchase/supplierdocumentinquiry" exact component={SupplierDocumentInquiry} />
            {/* 销售管理 */}
            <Route path="/sales" exact  render={()=>{
              return <Redirect to="/sales/customerretention" />
            }} />
            <Route path="/sales/customerretention" exact component={CustomerRetention} />
            <Route path="/sales/promotionmanagement" exact component={PromotionManagement} />
            <Route path="/sales/ordermanagement" exact component={OrderManagement} />         
          </div>
      </Router>
  );
};