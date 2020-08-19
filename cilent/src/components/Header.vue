<template>

    <div id="flex">
          <div id="head">
      <div class="left">
      <p><img src="../assets/images/1.png"></p>
      </div>      
      
      <div class="right">
      <div id="a">开 会 易
      <router-link to="/">
      <el-button type="danger" @click="LogOut()" >注销</el-button>
      </router-link>
      </div>
      </div>

    </div>
    </div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')
export default {
  data(){
    return{
    }
  },
methods:{
  ...mapActions(// 语法糖
    ['LogOut']// 相当于this.$store.dispatch('modifyName'),提交这个方法
  )
}
  // computed:{
  //   ...mapState({
  //     user_id:state=>state.userId,
  //     user_name:state=>state.name,
  //     user_role:state=>state.roles,
  //     })
  // }
}
</script>

<style>

#flex{
  height: 70px;
  width: 1050px;
}
#head{
  width: 1050px;
  height: 70px;
  background: rgb(43,172,251);
  display:table-cell;
  vertical-align:middle;
}
#head p{
  position: absolute;
  padding-left: 60px;
  margin-top: -30px;
}
#head #a{
  font-size: 20px;
  color: white;
  position: absolute;
  margin-top: 20px;
  margin-left: 800px;
  margin-top: -15px;
}

.right{
  position: relative;
}

.left{
  position: relative;
}

</style>
