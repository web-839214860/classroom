<template>

    <div class="first">
        <div  v-if="person.a">
            <el-form :model="applyForm" :rules="rules" ref="applyForm">
            <div class="a">

                <b>申请人：</b>
                <el-form-item prop="username">
                <el-input @keyup.enter.native ="submitForm('applyForm')"   type="text" placeholder="请输入姓名" v-model="applyForm.username" clearable style="width:110px" ></el-input>
                </el-form-item>
                <!-- <input type="text"  v-model="person.name" style="width:200px" /> -->

                <b>参加人数：</b>
                <el-form-item prop="number">
                <el-input @keyup.enter.native ="submitForm('applyForm')"   type="text" placeholder="请输入人数" v-model="applyForm.number" clearable style="width:180px"></el-input>
                </el-form-item>
                <!-- <input type="text" v-model="person.num"  style="width:74px" /> -->
                <b>手机号码：</b>
                <el-form-item prop="phone">
                <el-input @keyup.enter.native ="submitForm('applyForm')"   type="text" placeholder="请输入手机号码" v-model="applyForm.phone" clearable style="width:151px"></el-input>
                </el-form-item>
                <!-- <input type="text" v-model="person.number" style="width:200px" /> -->
            </div>
            <br><br><br>

            <div class="a">
                <b>使用教室开始时间：</b>
                <el-form-item prop="usetime">
                <el-date-picker  @keyup.enter.native ="submitForm('applyForm')" v-model="applyForm.usetime" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" ></el-date-picker>
                </el-form-item>
                <!-- <el-date-picker v-model="person.date" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间"></el-date-picker> -->
               
               
                <b>使用教室结束时间：</b>
                <el-form-item prop="endtime">
                <el-date-picker  @keyup.enter.native ="submitForm('applyForm')" v-model="applyForm.endtime" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
                <!-- <el-date-picker v-model="person.date" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间"></el-date-picker> -->
            </div>
            <br><br>
            
            <div class="a">
            <b>使用教室原因：</b>
                <el-form-item prop="reason">
                <el-input @keyup.enter.native ="submitForm('applyForm')"   type="text" placeholder="请输入原因" v-model="applyForm.reason" clearable style="width:632px"></el-input>
                </el-form-item>
            </div>
            <!-- <input type="text" v-model="person.reason" style="width:632px" /> -->
            <br><br>

            <div class="a">
                <b>是否需要多媒体设备：</b>
                <el-form-item prop="media">
                <el-radio @keyup.enter.native ="submitForm('applyForm')"  v-model="applyForm.media" label="是">是</el-radio>
                <el-radio @keyup.enter.native ="submitForm('applyForm')"  v-model="applyForm.media" label="否">否</el-radio>
                </el-form-item>
                <!-- <el-radio v-model="person.radio" label="是">是</el-radio><el-radio v-model="person.radio" label="否">否</el-radio> -->



                <b>填写申请时间：</b>
                <el-form-item prop="applytime">
                <el-date-picker  @keyup.enter.native ="submitForm('applyForm')" v-model="applyForm.applytime" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
                <!-- <el-date-picker v-model="person.date" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间"></el-date-picker> -->
            </div>

            <!-- <div id="b">
                <b>是否需要电脑机房：</b><el-radio v-model="person.radios" label="是">是</el-radio><el-radio v-model="person.radios" label="否">否</el-radio>
            </div> -->
            <br><br><br>

            <!-- <div class="a">
                <b>负责老师姓名：</b><input type="text" v-model="person.tname" style="width:89px" />
                <b>负责老师工号：</b><input type="text" v-model="person.id" style="width:89px" />
                <b>负责老师联系方式：</b><input type="text" v-model="person.tnumber" style="width:145px" />
            </div> -->

            <div class="a">
                <el-button type="primary" plain  v-on:click="person.a = !person.a" style="width:140px;height:40px;font-size:15px">预览信息</el-button>
                <el-button type="primary" plain style="width:140px;height:40px;font-size:15px" @click="submitForm('applyForm')">确定申请</el-button>
            </div>

</el-form>

        </div> 

        <div id="show" v-if="!person.a" >
            <el-button type="info" plain  v-on:click="person.a=true" style="margin-left: 692px;">关闭</el-button>
            <br><br>

            <div class="a">
                <b>申请人：</b>{{applyForm.username}}
                <b>参加人数：</b>{{applyForm.number}}
                <b>手机号码：</b>{{applyForm.phone}}
            </div>
            <br><br>

            <div class="a">
                <b>使用教室原因：</b>{{applyForm.reason}}
                <b>填写申请时间：</b>{{applyForm.applytime}}
            </div>
            <br><br>

            <div class="a">
                <b>使用教室开始时间：</b>{{applyForm.usetime}}
                <b>使用教室结束时间：</b>{{applyForm.endtime}}
            </div>
            <br><br>

            <div class="a">
                <b>是否需要多媒体设备：</b>{{applyForm.media}}
                <!-- <b>是否需要电脑机房：</b>{{person.radios}} -->
            </div>
            <br><br>

            <!-- <div class="a">
                <b>参加人数：</b>{{person.num}}
                <b>使用日期及时间：</b>{{person.date}}
            </div> -->

        </div>

    </div>

</template>

<script>

export default {
  inject:['reload'],
  data() {
    return {
        person:{
            a: true
        },
      user_id:'',
      applyForm: {
      user_id:this.$store.state.user.userId,
      number:'',
      phone: '',
      username:'',
      usetime: '',
      endtime:'',
      applytime:'',
      reason:'',
      media:''
    },
       rules: {
    number: [
 { required: true, message: '请输入参加人数', trigger: 'blur' },
  ],
    username: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
     ],
    phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' }
     ],
    usetime: [
    { required: true, message: '请输入使用课室时间', trigger: 'blur' }
     ],
    endtime: [
    { required: true, message: '请输入使用课室结束时间', trigger: 'blur' }
     ],
    applytime: [
    { required: true, message: '请填写申请时间', trigger: 'blur' }
     ],
    reason: [
    { required: true, message: '请填写申请原因', trigger: 'blur' }
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
       submitForm(applyForm) {
    this.$refs[applyForm].validate((valid) => {
        if (valid) {
  let applyinfo = this.applyForm;
         this.$api.table.posttable(applyinfo).then(res =>{
      if(res.code == 1){
        this.showMessage("info",res.data.message)
        this.reload()
      }else if(res.code == -1){
      this.showMessage("info",res.data.message)
      }else if(res.code == 0){
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

<style>

.first{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -530px;
}
.first .a{
    display: flex;
    justify-content: space-around;
}
.first #show{
    height: 350px;
    margin-top: 50px;
    background: rgba(192, 192, 192, 0.137);
}

</style>

