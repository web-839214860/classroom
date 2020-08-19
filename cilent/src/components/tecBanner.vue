<template>

    <div id="nav">
        <div id="chaxunjiaoshi"><router-link to="/teacher">审核 / 分配</router-link></div>
        <div id="shenhe"><router-link to="/teacher/tecsecond">查询课室</router-link></div>
        <div id="chakandongtai"><router-link to="/teacher/third">用户管理</router-link></div>
        <div id="yonghuxingxi"><router-link to="/teacher/tecforth/my">个人信息</router-link></div>
    </div>
      
</template>

<style>

#nav {
  position: relative;
  padding: 20px;
  margin-left: -40px;
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

#chaxunjiaoshi{
  width: 198px;
  height: 133px;
  background: rgb(251,80,83);
  text-align: center;
  line-height: 133px;
  position: relative;
  margin-left: 50px;
  border-radius: 5px; 
  box-shadow: 3px 3px 6px #666; 
}

#shenhe{
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

#chakandongtai{
  width: 198px;
  height: 133px;
  background: rgb(106,173,35);
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
  background: rgb(75,129,252);
  text-align: center;
  line-height: 133px;
  position: relative;
  margin-left: 50px;
  margin-top: 13px;
  border-radius: 5px; 
  box-shadow: 3px 3px 6px #666; 
}

</style>
