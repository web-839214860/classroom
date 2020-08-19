import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(key, value) {  //保存
    return localStorage.set(key, value)
}

export function getLocalStorage(key) {  //读取
    return localStorage.get(key)
}

export function removeLocalStorage(key) { //删除
    return localStorage.delete(key)
}