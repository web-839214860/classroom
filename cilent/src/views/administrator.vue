<template>

<div class="administrator">


      <div id="div4"></div>
      <br><br><br>

      <div id="b">

<el-form :model="loginForm" :rules="rules" ref="loginForm" style="width:290px;margin:0 auto">

<el-form-item prop="username">
<el-input @keyup.enter.native ="submitForm('loginForm')"   type="text" placeholder="请输入工号" v-model="loginForm.username" clearable style="width:290px"></el-input>
</el-form-item>

<br>

<el-form-item prop="password"> 
<el-input @keyup.enter.native ="submitForm('loginForm')"  type="password" placeholder="请输入密码" v-model="loginForm.password" show-password style="width:290px"></el-input>
</el-form-item>

<br>

<el-form-item>
        <el-button type="primary" plain style="width:140px;height:40px;font-size:15px"  @click="submitForm('loginForm')">登录</el-button>
</el-form-item>

  <p style="font-size:15px;color:#969191;">登录即代表您同意我们的协议和隐私政策</p>

</el-form>



</div>

</div>

</template>

<script>
    import {setLocalStorage} from '@/utils/localStorage'

	export default {
    data(){
return {
   loginForm: {
      username: '',
      password: ''
    },
   rules: {
    username: [
 { required: true, message: '请输入工号', trigger: 'blur' },
 { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
    password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
     ],
    } 
   }
 },
    methods: {
      showMessage(type,message){
       this.$message({
        type: type,
         message: message
      });
     },
       submitForm(loginForm) {
    this.$refs[loginForm].validate((valid) => {
        if (valid) {
  let userinfo = this.loginForm;
         this.$api.user.postlogin(userinfo).then(res =>{
    if(res.code == -1){
        this.showMessage("info",res.data.message)
    }else if(res.code == 0){
        this.showMessage("info",res.data.message)
    }else if(res.code == 2){
    //成功验证 本地保存token
    setLocalStorage("Token",res.data.token)
    this.$router.push({ path: '/teacher' })
      }else{
      this.showMessage("info","未知错误")
      }
    })
    }
  });
 }
 }
 }
</script>

<style  scoped>
.administrator{
  width: 350px;
  height: 380px;
  position: absolute;
  margin-left: 686px;
  margin-top: -414px;
}
.administrator #div4{
  position: absolute;
  margin-left: 175px;
  width: 175px;
  height: 5px;
  background: rgb(0, 183, 255);
}
.administrator #b{
  text-align: center;
  position: relative;
  margin-top: -10px;
}

</style>
