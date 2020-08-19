import api from '../index'
import urls from './urls'
export default {
    
    getclassroominfo() {
        // return出去了一个promise
        return api.get(urls.getclassroominfo)
    },
    deleteclassroom(params) {
        // return出去了一个promise
        params = {
            c_id: params
        }
        return api.delete(urls.deleteclassroom + '/' + params.c_id)
    },
    postclassroom(params){
        // return出去了一个promise
        return api.post(urls.postclassroom,params)
    },
    getclassroomtimeinfo(){
         // return出去了一个promise
        return api.get(urls.getclassroomtimeinfo)
    },
    deletetimetable(params) {
        // return出去了一个promise
        params = {
            o_id: params
        }
        return api.delete(urls.deletetimetable + '/' + params.o_id)
    }
    
}

