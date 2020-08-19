<template>

<div class="add">

      <div id="div6"></div>

<br>


<div id="o">

        <el-form :model="newUserForm" :rules="rules" ref="newUserForm" style="width:400px;margin:0 auto">

        <el-form-item label="用户姓名" prop="u_name">
        <el-input @keyup.enter.native ="submitForm('newUserForm')"   type="text"  v-model="newUserForm.u_name" clearable style="width:290px"></el-input>
        </el-form-item>



        <el-form-item label="学号/工号" prop="u_id"> 
        <el-input @keyup.enter.native ="submitForm('newUserForm')"  type="text"  v-model="newUserForm.u_id" clearable style="width:290px" ></el-input>
        </el-form-item>

        <el-form-item label="添加密码" prop="u_password"> 
        <el-input @keyup.enter.native ="submitForm('newUserForm')"  type="text"  v-model="newUserForm.u_password" clearable style="width:290px" ></el-input>
        </el-form-item>

          <el-form-item prop="u_role" label="用户身份">
          <el-radio @keyup.enter.native ="submitForm('newUserForm')"  v-model="newUserForm.u_role" label="1">学生</el-radio>
          <el-radio @keyup.enter.native ="submitForm('newUserForm')"  v-model="newUserForm.u_role" label="2">老师</el-radio>
          </el-form-item>



          <el-form-item prop="u_sex" label="性别">
          <el-radio @keyup.enter.native ="submitForm('newUserForm')"  v-model="newUserForm.u_sex" label="1">男</el-radio>
          <el-radio @keyup.enter.native ="submitForm('newUserForm')"  v-model="newUserForm.u_sex" label="2">女</el-radio>
          </el-form-item>



          <el-form-item prop="u_birthday" label="生日时间">
          <el-date-picker  @keyup.enter.native ="submitForm('newUserForm')"  v-model="newUserForm.u_birthday" type="date"  style="width:290px" clearable></el-date-picker>
          </el-form-item>


          <el-form-item prop="u_position" label="所在地区">
          <el-input  @keyup.enter.native ="submitForm('newUserForm')"   type="text"  v-model="newUserForm.u_position" clearable style="width:290px"></el-input>
          </el-form-item>

<el-form-item>
        <el-button type="primary" plain style="width:140px;height:40px;font-size:15px"  @click="submitForm('newUserForm')">提交</el-button>
        <el-button type="danger" plain style="width:140px;height:40px;font-size:15px;margin-left: 10px" @click="$refs['newUserForm'].resetFields()">重置</el-button>
</el-form-item>


</el-form>



</div>

</div>

</template>

<script>

	export default {
    data(){
return {
   newUserForm: {
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
    methods: {
      showMessage(type,message){
       this.$message({
        type: type,
         message: message
      });
     },

       submitForm(newUserForm) {
    this.$refs[newUserForm].validate((valid) => {
        if (valid) {
  let userinfo = this.newUserForm;
         this.$api.user.postoneuser(userinfo).then(res =>{
      if(res.code == 1){
              this.showMessage("info",res.data.message)
              this.$router.push({ path: '/teacher/third' })
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
#div6{
  width: 249px;
  height: 5px;
  background: rgb(0, 183, 255);
  position: absolute;
  margin-left: 498px;
  margin-bottom: 15px;
}
 #o{
  text-align: center;
  margin-top: 25px;
}
.add{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -530px;
}
</style>
