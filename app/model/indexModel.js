import {getTubiao} from "../axios/indexAPI" 
import _ from "lodash/fp";
export default {
    namespace : 'indexModel',
    state : {
        results : [],
        // 图例的名称
        name : ""
    },
    reducers : {
        changeResults(state,{results}){
            return _.set("results",results,state)
        },
        changeName(state,{name}){
            return _.set("name",name,state)
        }
    },
    effects : {
        *getTubiao(action , {put}){
           const {results} =   yield getTubiao()
           yield put({"type" : "changeResults",results} )
           for (let i = 0; i < results.length; i++) {
               var name =  results[i].name
               yield put({"type" : "changeName" , name })
           }
        }
    }
}