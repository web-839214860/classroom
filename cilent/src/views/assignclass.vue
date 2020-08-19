<template>

<div class="first">

      <div id="div4"></div>

<br>

<div style="text-align:center;">
<p>申请人:{{tableList.t_name}} 参加人数:{{tableList.t_joinPeople}}</p>
<p>课室使用时间:{{tableList.t_useTime}}----{{tableList.t_endTime}}</p>
</div>


<div id="a">

<el-form :model="classForm" :rules="rules" ref="classForm" style="width:400px;margin:0 auto">

<el-form-item label="审核人工号" prop="userid">
<el-input @keyup.enter.native ="submitForm('classForm')"   type="text" placeholder="请输入审核人工号" v-model="classForm.userid" clearable style="width:290px"></el-input>
</el-form-item>

<br>

<el-form-item label="分配教室的ID" prop="classid"> 
<el-input @keyup.enter.native ="submitForm('classForm')"  type="text" placeholder="请输入分配教室的ID" v-model="classForm.classid" clearable style="width:290px"></el-input>
</el-form-item>

<br>

<el-form-item label="审核结果" prop="result"> 
<el-input @keyup.enter.native ="submitForm('classForm')"  type="text" placeholder="请输入审核结果" v-model="classForm.result" clearable style="width:290px"></el-input>
</el-form-item>

<br>

<el-form-item>
        <el-button type="primary" plain style="width:140px;height:40px;font-size:15px"  @click="submitForm('classForm')">提交</el-button>
        <el-button type="danger" plain style="width:140px;height:40px;font-size:15px;margin-left: 10px" @click="$refs['classForm'].resetFields()">重置</el-button>
</el-form-item>


</el-form>



</div>

</div>

</template>

<script>

	export default {
    data(){
return {
  tableList:[],
   classForm: {
      userid: '',
      classid: '',
      result: '',
      tableid:this.$route.params.id
    },
   rules: {
    userid: [
 { required: true, message: '请输入审核人工号', trigger: 'blur' },
 { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
    classid: [
    { required: true, message: '请输入分配课室的ID', trigger: 'blur' }
     ],
    result: [
    { required: true, message: '请输入审核结果', trigger: 'blur' }
     ]
    } 
   }
 },
     created() {
        this.getTableList(this.$route.params.id)
    },
    methods: {
      showMessage(type,message){
       this.$message({
        type: type,
         message: message
      });
     },

       submitForm(classForm) {
    this.$refs[classForm].validate((valid) => {
        if (valid) {
  let classinfo = this.classForm;
         this.$api.table.postclass(classinfo).then(res =>{
    if(res.code == -1){
        this.showMessage("info",res.data.message)
    }else if(res.code == 1){
              this.showMessage("info",res.data.message)
    this.$router.push({ path: '/teacher' })
      }else{
      this.showMessage("info","未知错误")
      }
    })
    }
  });
 },

        getTableList(t_id){

            this.$api.table.onetableinfo(t_id).then(res =>{
            if(res.code==1){
                this.tableList=res.data.oneclassinfo
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
  width: 374px;
  height: 5px;
  background: rgb(0, 183, 255);
  position: absolute;
  margin-left: 374px;
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
