import axios from './axios'
let instance = axios()
export default {
  get(url, params){    
    return new Promise((resolve, reject) =>{        
        instance.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
        })    
    })
  },
  post(url, params) { //新增
    return new Promise((resolve, reject) => {
      instance.post(url,params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
  },
  put(url, params) { //修改
    return new Promise((resolve, reject) => {
      instance.put(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data)
        })
    });
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      instance.delete(url, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data)
        })
    });
  },
}




