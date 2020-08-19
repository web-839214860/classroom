<template>

<div class="password">

 <div id="div4"></div>


<div id="connent">

<el-form :model="passwordForm" :rules="rules" ref="passwordForm" style="width:370px;margin:0 auto">

<el-form-item label="旧密码" prop="oldpassword">
<el-input @keyup.enter.native ="submitForm('passwordForm')"   type="password" placeholder="请输入旧密码" v-model="passwordForm.oldpassword" show-password style="width:290px"></el-input>
</el-form-item>

<br>

<el-form-item label="新密码" prop="newpassword">
<el-input @keyup.enter.native ="submitForm('passwordForm')"   type="password" placeholder="请设置新密码" v-model="passwordForm.newpassword" show-password style="width:290px"></el-input>
</el-form-item>

<br>


<el-form-item label="确认密码" prop="newpassword2">
<el-input @keyup.enter.native ="submitForm('passwordForm')"   type="password" placeholder="请确认新密码" v-model="passwordForm.newpassword2" show-password style="width:290px"></el-input>
</el-form-item>


<br>

<div id="a">
<el-form-item>
        <el-button type="primary" plain   @click="submitForm('passwordForm')">保存</el-button>
        <el-button type="danger" @click="$refs['passwordForm'].resetFields()">重置</el-button>
</el-form-item>
</div>

</el-form>

</div>

</div>


</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')
	export default {
    data(){
      //此处即表单发送之前验证
        let validateNewPassword = (rule, value, callback) => {
            if (value === this.passwordForm.oldpassword) {
                callback(new Error('新密码不能与原密码相同!'))
            } else {
              callback()
            }
        }
        let validateNewPassword2 = (rule, value, callback) => {
            if (value !== this.passwordForm.newpassword) {
                callback(new Error('与新密码不一致!'))
            } else{
              callback()
            }
        }
return {
  user_id:'',
   passwordForm: {
      user_id:this.$store.state.user.userId,
      oldpassword: '',
      newpassword: '',
      newpassword2:''
    },
            rules: {
                oldpassword: [
                     { required: true, message: '请输入旧密码', trigger: 'blur' }
                ],
                newpassword: [
                    { required: true, message: '请设置新密码', trigger: 'blur' },
                    { validator: validateNewPassword, trigger: 'blur' }
                ],
                newpassword2: [
                    { required: true, message: '请确认新密码', trigger: 'blur' },
                    { validator: validateNewPassword2, trigger: 'blur' }
                ]
            }
   }
 },
  //           computed:{
  //   ...mapState({
  //     user_id:state=>state.userId
  //     })
  // },
    methods: {
      showMessage(type,message){
       this.$message({
        type: type,
         message: message
      });
     },
       submitForm(passwordForm) {
    this.$refs[passwordForm].validate((valid) => {
        if (valid) {
  let passwordinfo = this.passwordForm;
         this.$api.user.putpassword(passwordinfo).then(res =>{
    if(res.code == -1){
        this.showMessage("info",res.data.message)
    }else if(res.code == 1){
        this.showMessage("info",res.data.message)
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
.password{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -485px;
}
.password #div4{
  width: 374px;
  height: 5px;
  background: rgb(0, 183, 255);
  position: absolute;
  margin-left: 374px;
  margin-top: -5px;
}
.password #connent{
  position: relative;
  margin-top: 90px;
  text-align: right;
}
.password #connent #a{
  position: relative;
  margin-right: 120px;
}
</style>
