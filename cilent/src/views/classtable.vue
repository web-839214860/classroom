<template>

    <div class="first">
               <div id="div3"></div>
        <div class="crumbs">

            <el-breadcrumb separator="/">
             
             <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理 </el-breadcrumb-item>
             <el-breadcrumb-item>申请列表</el-breadcrumb-item>

            </el-breadcrumb>

            <div class="cantainer">
             
             <el-table style="width:100%;" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" ><!--对数据请求的处理，最为重要-->
             
             <el-table-column type="index" width="30">
             </el-table-column>

             <el-table-column label="申请人姓名" prop="t_name" width="80" align="center">
             </el-table-column>

             <el-table-column label="申请人学号" prop="user_id" width="80" align="center">
             </el-table-column>

             <el-table-column label="手机号码" prop="t_contact" width="70" align="center">
             </el-table-column>

             <el-table-column label="参加人数" prop="t_joinPeople" width="70" align="center">
             </el-table-column>

             <el-table-column label="是否需要多媒体" prop="t_media" width="105" align="center">
             </el-table-column>

             <el-table-column label="使用教室原因" prop="t_useReason" width="100" align="center">
             </el-table-column>

             <el-table-column label="申请教室时间" prop="t_time" width="100" align="center">
             </el-table-column>

            <el-table-column label="使用教室时间" prop="t_useTime" width="100" align="center">
             </el-table-column>

            <el-table-column label="使用教室结束时间" prop="t_endTime" width="120" align="center">
             </el-table-column>

             <el-table-column label="审核结果" prop="t_result" width="70" align="center">
             </el-table-column>

             <el-table-column label="分配教室" prop="classroom.c_name" width="70" align="center">
             </el-table-column>

             <el-table-column label="审批人" prop="user.u_name" width="60" align="center">
             </el-table-column>
      
            <el-table-column label="操作" prop="doit" width="300" align="center">
                <template slot-scope="scope"> 
                  <el-button size="small" type="primary" @click="assignclass(scope.row)">审批课室</el-button>
                  <el-button size="small" type="danger" @click="puttable(scope.row)">取消审批</el-button>
                <el-button size="small" type="danger" @click="deletetable(scope.row)">删除</el-button>
                </template>
             </el-table-column>

             </el-table>

             <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[2,10,20,40]" :page-size="pagesize" layout="total, sizes ,prev, pager,next,jumper" :total="userList.length">
             </el-pagination>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    inject:['reload'],
    data(){
        return{
            currentPage:1,//初始页
            pagesize:2,//每页的数据
            userList:[]
        }
    },
    created() {
        this.handleUserList()
    },
    methods:{

 showMessage(type,message){
       this.$message({
        type: type,
         message: message
      });
     },

        //初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange:function (size) {
            this.pagesize=size;
            console.log(this.pagesize) //每页下拉显示数据
        },
        handleCurrentChange:function(currentPage){
            this.currentPage=currentPage;
            console.log(this.currentPage)//点击第几页
        },
        handleUserList(){

            this.$api.table.alltableinfo().then(res =>{
            if(res.code==1){
                this.userList=res.data
            }else{
                 this.showMessage("info","未知错误")
      }
        })
            // this.$http.get('http://localhost:3000/userList').then(res =>{
            //     this.userList=res.body
            // })
        },

        deletetable(val){
            this.$api.table.deletetable(val.t_id).then(res =>{
            if(res.code==1){
                this.showMessage("info",res.data.message)
                  this.reload()
            }else{
                 this.showMessage("info","未知错误")
      }
            })
        },

        puttable(val){
            this.$api.table.puttable(val.t_id).then(res => {
                if(res.code==1){
                    this.showMessage("info",res.data.message)
                    this.reload()
                }else if(res.code==-1){
                    this.showMessage("info",res.data.message)
                }
            })
        },

        assignclass(val){
            this.$router.push('/teacher/assignclass/'+val.t_id)
        }
    }
}
</script>


<style>

.first{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 270px;
  margin-top: -530px;
}

 #div3{
  width: 374px;
  height: 5px;
  background: rgb(0, 183, 255);
  margin-bottom: 15px;
}
</style>

