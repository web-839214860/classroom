<template>

    <div class="register">

      <el-steps :active="active" finish-status="success">
        <el-step title="账号密码"></el-step>
        <el-step title="填写资料"></el-step>
        <el-step title="注册成功"></el-step>
      </el-steps>

<el-form :model="registerForm" ref="registerForm">

<el-form :rules="rules" :model="registerForm" style="width:365px;margin: 0 auto;">

        <div id="one" v-if="active==0">

          <el-form-item prop="number">
          设置账号：
          <el-input @keyup.enter.native ="submitForm('registerForm')"   type="text" placeholder="请输入学号" v-model="registerForm.number" clearable style="width:290px"></el-input>
          </el-form-item>
          <br><br>


        
          <el-form-item prop="password"> 
          设置密码：
          <el-input @keyup.enter.native ="submitForm('registerForm')"  type="password" placeholder="请输入密码" v-model="registerForm.password" show-password style="width:290px"></el-input>
          </el-form-item>

          <br><br>

          <p style="font-size:15px;color:#969191;margin-left:18px;">同意 《服务协议》和《隐私政策》</p>


        </div>

</el-form>


        <div id="two" v-if="active==1">

          <p style="position: absolute;margin-top:30px;margin-left:349px;">头像：</p><el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" >
               <img v-if="imageUrl" :src="imageUrl" class="avatar">
               <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
               <p style="font-size:14px;color:#969191;position: absolute;margin-left:570px;margin-top:-55px;">点击方框上传</p>

          <br>

<el-form :rules="rule" style="width:305px;margin: 0 auto;" :model="registerForm" >

          <el-form-item prop="name">
          姓名：
          <el-input class="a" @keyup.enter.native ="submitForm('registerForm')"   type="text" placeholder="请输入姓名" v-model="registerForm.name" clearable style="width:220px"></el-input>
          </el-form-item>

         <br>
          <p style="position: absolute;margin-top:0px;">性别：</p>
          <el-form-item prop="sex">
          <el-radio @keyup.enter.native ="submitForm('registerForm')" class="a" v-model="registerForm.sex" label="1">男</el-radio>
          <el-radio @keyup.enter.native ="submitForm('registerForm')" class="a" v-model="registerForm.sex" label="2">女</el-radio>
          </el-form-item>


          <el-form-item prop="birthday">
          生日：
          <el-date-picker  @keyup.enter.native ="submitForm('registerForm')" class="a" v-model="registerForm.birthday" type="date" placeholder="请选择日期"></el-date-picker>
          </el-form-item>

          <el-form-item prop="position">
          地区：
          <el-input class="a" @keyup.enter.native ="submitForm('registerForm')"   type="text" placeholder="请输入地区" v-model="registerForm.position" clearable style="width:220px"></el-input>
          </el-form-item>

</el-form>

        </div>

        <div id="three" v-if="active==2">
          恭喜
        </div>
  

</el-form>
        

        <div id="a">
          <el-button type="primary" plain style="width:140px;height:40px;font-size:15px" v-if="active==1" @click="prev">上一步</el-button>

          <el-button type="primary" plain style="width:140px;height:40px;font-size:15px" v-if="active==0 || active==1 || active==2 || active==3" @click="next">下一步</el-button>

           <el-button type="primary" plain style="width:140px;height:40px;font-size:15px" v-if="active==1" @click="submitForm('registerForm');next()">确认注册</el-button>

          <router-link to="/">
          <el-button type="primary" plain style="width:140px;height:40px;font-size:15px;margin-left: 10px;" v-if="active==1">返回登录</el-button>
          </router-link>
        </div>

    </div>

</template>

<script>

  export default {
    data() {
      return {
      active: 0,
      imageUrl: '',
      registerForm: {
      number:'',
      password: '',
      name:'',
      sex: '',
      birthday:'',
      position:''
    },
       rules: {
    number: [
 { required: true, message: '请输入学号', trigger: 'blur' },
 { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
    password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
     ]
    },

       rule: {
    name: [
 { required: true, message: '请输入用户名', trigger: 'blur' },
 { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
   birthday: [
    { required: true, message: '请选择生日', trigger: 'blur' }
     ],
        position: [
    { required: true, message: '请输入地区', trigger: 'blur' }
     ],
    }

   }
},

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0, this.data.rules.number='';
      },
      prev() {
        if (this.active-- < 0) this.active = 0;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },


      showMessage(type,message){
       this.$message({
        type: type,
         message: message
      });
     },
       submitForm(registerForm) {
    this.$refs[registerForm].validate((valid) => {
        if (valid) {
  let regisierinfo = this.registerForm;
         this.$api.user.postuser(regisierinfo).then(res =>{
      if(res.code == 1){
        this.showMessage("info",res.data.message)
      }else if(res.code == -1){
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

<style>
.register{
  width: 1000px;
  height: 490px;
  padding: 25px;
}
.register #a{
  padding-top: 35px;
  text-align: center;
}
.register #one{
  padding-top: 80px;
  text-align: center;
}
.register #two{
  margin-top: 25px;
  text-align: center;
}
.register .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
}
.register .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.register .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.register .avatar {
  width: 80px;
  height: 80px;
  display: block;
}
.register .a {
  margin-left: 35px;
}

</style>