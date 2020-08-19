<template>

    <div class="info">
        
       <div id="div1"><router-link to="/teacher/third">用户信息管理</router-link></div>
       <div id="div2">编辑用户</div>
       <div id="div"><router-link to="/teacher/third/postoneuser">添加用户</router-link></div>

    </div>

</template>


<style scoped>

.info{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -580px;
}
.info a {
  font-size: 16px;
  font-weight :bold;
  color :#4d4d4d;
  text-decoration:none; 
}
.info #div1{
  width: 249px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
}
.info #div2{
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
.info #div{
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

</style>