<template>

    <div class="my">
       <div id="div3"></div>

       <div id="connent">
         头像：<div class="block"><el-avatar shape="square" :size="70" :src="squareUrl"></el-avatar></div><br><br><br>
         身份：<span v-if="user_role===1">学生</span><span v-else-if="user_role===2">老师</span><br><br><br>
         姓名：{{user_name}}<br><br><br>
         性别：<span v-if="user_sex===1">男</span><span v-else-if="user_sex===2">女</span><br><br><br>
         生日：{{user_birthday}}<br><br><br>
         地区：{{user_position}}
       </div>
    </div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')
  export default {
    data () {
      return {
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      }
    },
      computed:{
    ...mapState({
      user_id:state=>state.userId,
      user_name:state=>state.name,
      user_role:state=>state.roles,
      user_sex:state=>state.sex,
      user_birthday:state=>state.birthday,
      user_position:state=>state.position
      })
  }
  }

</script>


<style>

.my{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 260px;
  margin-top: -490px;
}

.my #div3{
  width: 374px;
  height: 5px;
  background: rgb(0, 183, 255);
}

.my #connent{
  position: relative;
  margin-top: 90px;
  text-align: center;
}
.my #connent .block{
  position: absolute;
  margin-top: -50px;
  margin-left: 430px;
}

</style>