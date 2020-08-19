import api from '../index'
import urls from './urls'
export default { 
  userinfo () { 
    // return出去了一个promise
    return api.get(urls.userinfo)
  },
  postlogin (params) {  //登录
    // return出去了一个promise
    params={user_id:params.username,
      password:params.password}
      return api.post(urls.postlogin,params)
  },
  putpassword(params){ //修改密码
        // return出去了一个promise
        params={
          user_id:params.user_id,
          old_password:params.oldpassword,
          new_password:params.newpassword
        }
    return api.put(urls.putpassword, params)
  },
  postuser(params) { //注册
    // return出去了一个promise
    params = {
      user_id: params.number,
      password: params.password,
      name: params.name,
      sex:params.sex,
      birthday:params.birthday,
      position:params.position
    }
    return api.post(urls.postuser, params)
  },


  getallinfo(){
    // return出去了一个promise
    return api.get(urls.getallinfo)
  },
  deleteuser(params) {
    // return出去了一个promise
    params = {
      u_id: params
    }
    return api.delete(urls.deleteuser + '/' + params.u_id)
  },
  getoneuserinfo(params){
    // return出去了一个promise
    params={
      u_id: params
    }
    return api.get(urls.getoneuserinfo + '/' + params.u_id)
  },
  putoneuserinfo(params,id){ //修改用户信息
    // return出去了一个promise
    return api.put(urls.putoneuserinfo + '/' + id,params)
  },
  postoneuser(params){  //增加用户
    // return出去了一个promise
    return api.post(urls.postoneuser, params)
  }

}

