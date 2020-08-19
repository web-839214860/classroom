<template>

    <div class="second">
      <div class="seconds">
          <div id="a"><b>待审核</b></div> <el-divider></el-divider>
          <div id="b"><b>审核通过</b></div><el-divider></el-divider>
          <div id="c"><b>历史记录</b></div>

          <div id="d">您提交使用日期为({{info.t_useTime}})-({{info.t_endTime}})的申请表正在审核中</div>
          <div id="e">您提交的申请表已通过审核,安排的课室为({{info.t_class}}),请自觉遵守《课室使用规则注意事项》</div>
          <div id="f">当前账号已经申请过（ 1 ）次课室</div>
      </div>

    </div>

</template>

<script>
export default {
    data(){
        return{
        user_id:this.$store.state.user.userId,
        info:{}
        }
    },

    created:function (){
        this.$api.table.tableinfo(this.user_id).then(res =>{
            if(res.code==1){
                this.info=res.data
            }else if(res.code==-1){
                 this.info=res.data
            }
        })
    }

}
</script>


<style>

.second{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 240px;
  margin-top: -560px;
}

.seconds #a{
    width: 196px;
    height:139px;
    position: relative;
    padding: 0;
    text-align: center;
    line-height: 139px;
}
.seconds #b{
    width: 196px;
    height:139px;
    position: relative;
    margin-left: 0;
    margin-top: 0;
    text-align: center;
    line-height: 139px;
}

.seconds #c{
    width: 196px;
    height:139px;
    position: relative;
    margin-top: 0px;
    text-align: center;
    line-height: 139px;
}
.seconds #d{
    height:139px;
    position: relative;
    margin-top: -515px;
    margin-left: 196px;
    text-align: center;
    line-height: 139px;
    font-size: 14px;
}
.seconds #e{
    height:139px;
    position: relative;
    margin-top: 49px;
    margin-left: 196px;
    text-align: center;
    line-height: 139px;
    font-size: 14px;
}
.seconds #f{
    height:139px;
    position: relative;
    margin-top: 49px;
    margin-left: 196px;
    text-align: center;
    line-height: 139px;
    font-size: 14px;
}
</style>

