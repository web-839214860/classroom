<template>

    <div id="nav">


        <div id="shenqingbiao"><router-link to="/student">申请表</router-link></div>
        <div id="yishenqing"><router-link to="/student/stusecond">已申请</router-link></div>
        <div id="fabiaodongtai"><router-link to="/student/third">发表动态</router-link></div>
        <div id="yonghuxingxi"><router-link to="/student/stuforth/my">用户信息</router-link></div>
    </div>
      
</template>

<style>

#nav {
  position: relative;
  padding: 20px;
  margin-left: -40px;
  width: 1050px;
}
#nav a {
  font-size: 20px;
  font-weight :bold;
  color :#4d4d4d;
  text-decoration:none; 
}

#nav a.router-link-exact-active {
  color :white;
}

#shenqingbiao{
  width: 198px;
  height: 133px;
  background: rgb(106,173,35);
  text-align: center;
  line-height: 133px;
  position: relative;
  margin-left: 50px;
  border-radius: 5px; 
  box-shadow: 3px 3px 6px #666; 
}

#yishenqing{
  width: 198px;
  height: 133px;
  background: rgb(255,168,33);
  text-align: center;
  line-height: 133px;
  position: relative;
  margin-left: 50px;
  margin-top: 13px;
  border-radius: 5px; 
  box-shadow: 3px 3px 6px #666; 
}

#fabiaodongtai{
  width: 198px;
  height: 133px;
  background: rgb(36,204,170);
  text-align: center;
  line-height: 133px;
  position: relative;
  margin-left: 50px;
  margin-top: 13px;
  border-radius: 5px; 
  box-shadow: 3px 3px 6px #666; 
}

#yonghuxingxi{
  width: 198px;
  height: 133px;
  background: rgb(151,89,255);
  text-align: center;
  line-height: 133px;
  position: relative;
  margin-left: 50px;
  margin-top: 13px;
  border-radius: 5px; 
  box-shadow: 3px 3px 6px #666; 
}

</style>
