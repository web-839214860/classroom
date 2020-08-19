<template>

    <div class="login">

      <el-carousel height="480px" indicator-position="outside">
        <el-carousel-item >
          <img src="../assets/images/a.jpg">
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/images/b.jpg">
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/images/c.jpg">
        </el-carousel-item>
        <el-carousel-item >
          <img src="../assets/images/d.jpg">
        </el-carousel-item>
      </el-carousel>
      
      <div id="right">

        <div id="div1"><router-link to="/">学生</router-link></div>
        
        <div id="div2"><router-link to="/administrator">管理员</router-link></div>

      </div>

    </div>

</template>


<style>

.login {
  padding: 15px;
  width: 650px;
}
.login #right{
  border: 1px solid rgb(161, 161, 161);
  width: 350px;
  height: 370px;
  position: absolute;
  margin-left: 670px;
  margin-top: -450px;
}
.login #right a {
  font-size: 16px;
  font-weight :bold;
  color :#4d4d4d;
  text-decoration:none; 
}
.login #div1{
  width: 175px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
}
.login #div2{
  position: absolute;
  margin-left: 175px;
  margin-top: -50px;
  width: 175px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight :bold;
}

</style>