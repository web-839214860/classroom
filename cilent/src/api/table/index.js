import api from '../index'
import urls from './urls'
export default {
    posttable(params) {
        // return出去了一个promise
        params = {
            user_id: params.user_id,
            number: params.number,
            phone:params.phone,
            username:params.username,
            usetime:params.usetime,
            endtime:params.endtime,
            applytime:params.applytime,
            reason:params.reason,
            media:params.media
        }
        return api.post(urls.posttable, params)
    },

    tableinfo(params){
     // return出去了一个promise
     return api.get(urls.tableinfo,params)
    },


    alltableinfo(){
             // return出去了一个promise
             return api.get(urls.alltableinfo)
    },


    deletetable(params){
         // return出去了一个promise
          params={
              t_id: params
          }
          return api.delete(urls.deletetable+'/'+params.t_id)
    },


    puttable(params){
        // return出去了一个promise
        params = {
            t_id: params
        }
        return api.put(urls.puttable + '/' + params.t_id)
    },

    onetableinfo(params){
        // return出去了一个promise
        return api.get(urls.onetableinfo + '/' + params)
    },

    postclass(params){
        // return出去了一个promise
        params = {
            user_id: params.userid,
            class_id: params.classid,
            result: params.result,
            table_id: params.tableid
        }
        return api.post(urls.postclass + '/' + params.table_id,params)
    }
}

