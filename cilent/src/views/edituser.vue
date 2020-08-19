<template>

<div class="first">

      <div id="div4"></div>

<br>

<div style="text-align:center;">
<p>姓名:{{oneuserinfo.u_name}} 账号/学号:{{oneuserinfo.u_id}} 身份:{{oneuserinfo.u_role}}</p>
<p>性别:{{oneuserinfo.u_sex}} 生日:{{oneuserinfo.u_birthday}} 地区:{{oneuserinfo.u_position}}</p>
</div>

<div id="a">

        <el-form :model="oneUserForm" :rules="rules" ref="oneUserForm" style="width:400px;margin:0 auto">

        <el-form-item label="用户姓名" prop="u_name">
        <el-input @keyup.enter.native ="submitForm('oneUserForm')"   type="text"  v-model="oneUserForm.u_name" clearable style="width:290px"></el-input>
        </el-form-item>



        <el-form-item label="学号/工号" prop="u_id"> 
        <el-input @keyup.enter.native ="submitForm('oneUserForm')"  type="text"  v-model="oneUserForm.u_id" clearable style="width:290px" ></el-input>
        </el-form-item>

        <el-form-item label="修改密码" prop="u_password"> 
        <el-input @keyup.enter.native ="submitForm('oneUserForm')"  type="text"  v-model="oneUserForm.u_password" clearable style="width:290px" ></el-input>
        </el-form-item>

          <el-form-item prop="u_role" label="用户身份">
          <el-radio @keyup.enter.native ="submitForm('oneUserForm')"  v-model="oneUserForm.u_role" label="1">学生</el-radio>
          <el-radio @keyup.enter.native ="submitForm('oneUserForm')"  v-model="oneUserForm.u_role" label="2">老师</el-radio>
          </el-form-item>



          <el-form-item prop="u_sex" label="性别">
          <el-radio @keyup.enter.native ="submitForm('oneUserForm')"  v-model="oneUserForm.u_sex" label="1">男</el-radio>
          <el-radio @keyup.enter.native ="submitForm('oneUserForm')"  v-model="oneUserForm.u_sex" label="2">女</el-radio>
          </el-form-item>



          <el-form-item prop="u_birthday" label="生日时间">
          <el-date-picker  @keyup.enter.native ="submitForm('oneUserForm')"  v-model="oneUserForm.u_birthday" type="date"  style="width:290px" clearable></el-date-picker>
          </el-form-item>


          <el-form-item prop="u_position" label="所在地区">
          <el-input  @keyup.enter.native ="submitForm('oneUserForm')"   type="text"  v-model="oneUserForm.u_position" clearable style="width:290px"></el-input>
          </el-form-item>

<el-form-item>
        <el-button type="primary" plain style="width:140px;height:40px;font-size:15px"  @click="submitForm('oneUserForm')">提交</el-button>
        <el-button type="danger" plain style="width:140px;height:40px;font-size:15px;margin-left: 10px" @click="$refs['oneUserForm'].resetFields()">重置</el-button>
</el-form-item>


</el-form>



</div>

</div>

</template>

<script>

	export default {
    data(){
return {
  oneuserinfo:[],
   oneUserForm: {
      u_name: '',
      u_id: '',
      u_password: '',
      u_role:'',
      u_sex:'',
      u_birthday:'',
      u_position:''
    },
       rules: {
    u_name: [
 { required: true, message: '请输入姓名', trigger: 'blur' }
  ]
    } 
   }
 },
     created() {
        this.getoneuserinfo(this.$route.params.id)
    },
    methods: {
      showMessage(type,message){
       this.$message({
        type: type,
         message: message
      });
     },

       submitForm(oneUserForm) {
    this.$refs[oneUserForm].validate((valid) => {
        if (valid) {
  let userinfo = this.oneUserForm;
         this.$api.user.putoneuserinfo(userinfo,this.$route.params.id).then(res =>{
      if(res.code == 1){
              this.showMessage("info",res.data.message)
              this.$router.push({ path: '/teacher/third' })
      }else{
      this.showMessage("info","未知错误")
      }
    })
    }
  });
 },

        getoneuserinfo(u_id){

            this.$api.user.getoneuserinfo(u_id).then(res =>{
            if(res.code==1){
                this.oneuserinfo=res.data.oneuserinfo
            }else{
                 this.showMessage("info","未知错误")
      }
        })
            // this.$http.get('http://localhost:3000/userList').then(res =>{
            //     this.userList=res.body
            // })
        }

 }
 }
</script>

<style  scoped>
#div4{
  width: 249px;
  height: 5px;
  background: rgb(0, 183, 255);
  position: absolute;
  margin-left: 249px;
  margin-bottom: 15px;
}
 #a{
  text-align: center;
  margin-top: 25px;
}
.first{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -530px;
}
</style>
