import {findcar} from "../axios/purchaseAPI"
var R = require("ramda");
export default {
    // 日常采购的model
    namespace : 'dailyProcurementModel',
    state : {
        // 过滤器
        filters:[
            {"k" : "type" , "v" : "文具v耗材"},
            {"k" : "level" , "v" : "一级v二级"}
        ],
        // 页码
        page : 1 ,
        // 页面容量
        pagesize : 10,
        // 结果
        results : [], 
        // 总条数
        total : 0
    },
    reducers : {
        // 关于filter的操作，有三种
        // 增加一项
        addItem(state,{k,v}){
            return R.set(R.lensProp("filters") ,R.insert(state.filters.length,{k,v},state.filters) , state);
        },
        // 删除一项
        removeItem(state,{k,v}){
            return R.set(R.lensProp("filters") ,R.filter(item=>item.k != k,state.filters) , state);
        },
        //更改一项
        updateItem(state,{k,v}){
            return R.set(R.lensProp("filters") ,R.map(item=>item.k == k ? R.set(R.lensProp("v"),v,item): item,state.filters) , state);
        },
        changeResults(state,{results}){
            return R.set(R.lensProp("results") , results , state);
        },
        changeTotal(state,{total}){
            return R.set(R.lensProp("total"),total,state)
        },
        changePageReducer(state,{page}){
            return R.set(R.lensProp("page"),page,state) 
        },
        changePagesizeReducer(state,{pagesize}){
            return R.set(R.lensProp("pagesize"),pagesize,state) 
        }
    },
    effects : {
        *loadData(action,{put,select,call}){
            yield call(loadData, { select, put });     
        },
        *changePageOrSort({ page , pagesize},{put,select,call}){
            // 判断是换页还是排序
            const state = yield select(({dailyProcurementModel})=>dailyProcurementModel);
            if(pagesize != state.pagesize){
                yield put({"type" : "changePageReducer" , "page" : 1});
                yield put({"type" :"changePagesizeReducer" , pagesize})
                yield call(loadData, { select, put }); 
            }else{
                yield put({"type" : "changePageReducer" , page});
                yield call(loadData, { select, put }); 
               
            }
        }
    }
}
function * loadData({select , put}){
    const { page ,pagesize ,filters} = yield select(({dailyProcurementModel})=>dailyProcurementModel)
    //查询对象
    var queryObj = {
        page,
        pagesize
    }

    // // 遍历过滤器，给查询对象添加一项
    for (let i = 0; i < filters.length; i++) {
       queryObj[filters[i].k] = filters[i].v       
    }
    // 真正发出请求
    const {results , total} = yield findcar(queryObj)

    yield put({"type" : "changeResults" , results})
    // console.log(results)
    yield put({"type" : "changeTotal" , total })

}