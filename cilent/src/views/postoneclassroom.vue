<template>

<div class="post">

      <div id="diva"></div>

<br>


<div id="m">

        <el-form :model="newClassroomForm" :rules="rules" ref="newClassroomForm" style="width:400px;margin:0 auto">

        <el-form-item label="课室ID" prop="c_id">
        <el-input @keyup.enter.native ="submitForm('newClassroomForm')"   type="text"  v-model="newClassroomForm.c_id" clearable style="width:290px"></el-input>
        </el-form-item>



        <el-form-item label="课室名称" prop="c_name"> 
        <el-input @keyup.enter.native ="submitForm('newClassroomForm')"  type="text"  v-model="newClassroomForm.c_name" clearable style="width:290px" ></el-input>
        </el-form-item>

        <el-form-item label="容纳人数" prop="c_person"> 
        <el-input @keyup.enter.native ="submitForm('newClassroomForm')"  type="text"  v-model="newClassroomForm.c_person" clearable style="width:290px" ></el-input>
        </el-form-item>

          <el-form-item prop="c_media" label="是否拥有多媒体">
          <el-radio @keyup.enter.native ="submitForm('newClassroomForm')"  v-model="newClassroomForm.c_media" label="0">无</el-radio>
          <el-radio @keyup.enter.native ="submitForm('newClassroomForm')"  v-model="newClassroomForm.c_media" label="1">有</el-radio>
          </el-form-item>


          <el-form-item prop="c_position" label="课室地点">
          <el-input  @keyup.enter.native ="submitForm('newClassroomForm')"   type="text"  v-model="newClassroomForm.c_position" clearable style="width:290px"></el-input>
          </el-form-item>

<el-form-item>
        <el-button type="primary" plain style="width:140px;height:40px;font-size:15px"  @click="submitForm('newClassroomForm')">提交</el-button>
        <el-button type="danger" plain style="width:140px;height:40px;font-size:15px;margin-left: 10px" @click="$refs['newClassroomForm'].resetFields()">重置</el-button>
</el-form-item>


</el-form>



</div>

</div>

</template>

<script>

	export default {
    data(){
return {
   newClassroomForm: {
      c_id: '',
      c_name: '',
      c_person: '',
      c_media:'',
      c_position:''
    },
       rules: {
    c_id: [
 { required: true, message: '请输入课室ID', trigger: 'blur' }
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

       submitForm(newClassroomForm) {
    this.$refs[newClassroomForm].validate((valid) => {
        if (valid) {
  let classroominfo = this.newClassroomForm;
         this.$api.classroom.postclassroom(classroominfo).then(res =>{
      if(res.code == 1){
              this.showMessage("info",res.data.message)
              this.$router.push({ path: '/teacher/tecsecond' })
      }else if(res.code == -1){
            this.showMessage("info",res.data.message)
      }
      else{
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
#diva{
  width: 249px;
  height: 5px;
  background: rgb(0, 183, 255);
  position: absolute;
  margin-left: 249px;
  margin-bottom: 15px;
}
 #m{
  text-align: center;
  margin-top: 25px;
}
.post{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -530px;
}
</style>
