<template>

    <div class="classinfo">

        
       <div id="dv1"><router-link to="/teacher/tecsecond">课室信息管理</router-link></div>

       <div id="dv3"><router-link to="/teacher/tecsecond/postoneclassroom">添加课室</router-link></div>

       <div id="dv2"><router-link to="/teacher/tecsecond/getclassroomtimeinfo">课室占用情况</router-link></div>

    </div>

</template>


<style scoped>

.classinfo{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -580px;
}
.classinfo a {
  font-size: 16px;
  font-weight :bold;
  color :#4d4d4d;
  text-decoration:none; 
}
.classinfo #dv1{
  width: 249px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
}
.classinfo #dv2{
  position: absolute;
  margin-left: 498px;
  margin-top: -50px;
  width: 249px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
  color :#4d4d4d;
}
.classinfo #dv3{
  position: absolute;
  margin-left: 249px;
  margin-top: -50px;
  width: 249px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
  color :#4d4d4d;
}


</style>