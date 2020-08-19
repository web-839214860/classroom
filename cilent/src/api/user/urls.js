// const baseUrl = 'http://172.16.124.101:3000/api'
const baseUrl = '/api'
export default {
  userinfo: baseUrl + '/users/userinfo',
  postlogin: baseUrl + '/users/postlogin',
  putpassword: baseUrl + '/users/putpassword',
  postuser: baseUrl +'/users/postuser',
  getallinfo: baseUrl + '/users/getallinfo',
  deleteuser: baseUrl + '/users/deleteuser',
  getoneuserinfo: baseUrl + '/users/getoneuserinfo',
  putoneuserinfo: baseUrl + '/users/putoneuserinfo',
  postoneuser: baseUrl + '/users/postoneuser'
}

