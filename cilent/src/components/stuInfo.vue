<template>

    <div class="info">
        
       <div id="div1"><router-link to="/student/stuforth/my">个人资料</router-link></div>

       <div id="div2"><router-link to="/student/stuforth/password">修改密码</router-link></div>

    </div>

</template>


<style>

.info{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -540px;
}
.info a {
  font-size: 16px;
  font-weight :bold;
  color :#4d4d4d;
  text-decoration:none; 
}
.info #div1{
  width: 374px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
}
.info #div2{
  position: absolute;
  margin-left: 374px;
  margin-top: -50px;
  width: 374px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
}

</style>