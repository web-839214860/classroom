<template>

    <div class="third">
       <el-input type="textarea" placeholder="请输入内容" v-model="desc" style="width:556px;"></el-input>
       <el-button type="primary" plain id="button">发布</el-button>
       
       <div class="block"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
       <div class="blocks">ID</div>
       <p>哈哈哈哈哈哈</p>
       <el-divider></el-divider>

       <div class="block"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
       <div class="blocks">ID</div>
       <p>老师，我的申请表怎么还没通过审核？</p>
       <el-divider></el-divider>

       <div class="block"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
       <div class="blocks">ID</div>
       <p>好</p>

    </div>

</template>

<script>
export default {
  data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        desc: '',
      }
  }
}
</script>


<style>

.third{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -535px;
}

.third #button{
  width:140px;
  height:40px;
  font-size:15px;
  position: absolute;
  margin-left: 55px;
  margin-top: 5px;
}
.third .block{
  position: relative;
  margin-top: 50px;
}
.third .blocks{
  width: 120px;
  background: rgb(212, 211, 211);
  text-align: center;
  color: white;
  position: absolute;
  margin-top: -33px;
  margin-left: 60px;
}
.third p{
  position: relative;
  font-size: 15px;
  margin-left: 65px;
}
</style>

