<template>

    <div class="first">
               <div id="div3"></div>
        <div class="crumbs">

            <el-breadcrumb separator="/">
             
             <el-breadcrumb-item><i class="el-icon-date"></i> 用户管理 </el-breadcrumb-item>
             <el-breadcrumb-item>用户列表</el-breadcrumb-item>

            </el-breadcrumb>

            <div class="cantainer">

    <div class="searchBox">
      <el-input  v-model="searchTableInfo" placeholder="请输入搜索内容" style="width:240px"></el-input>
    </div>

             
             <el-table style="width:100%;" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" ><!--对数据请求的处理，最为重要-->
             
             <el-table-column type="index" width="30">
             </el-table-column>

             <el-table-column label="用户姓名" prop="u_name" width="80" align="center">
             </el-table-column>

             <el-table-column label="学号/工号" prop="u_id" width="80" align="center">
             </el-table-column>

             <el-table-column label="用户身份" prop="u_role" width="70" align="center">
                <template slot-scope="scope">                    
                    <p v-if="scope.row.u_role=='1'">学生</p>
                    <p v-if="scope.row.u_role=='2'">老师</p>               
                </template>
             </el-table-column>

             <el-table-column label="用户性别" prop="t_joinPeople" width="70" align="center">
                <template slot-scope="scope">                    
                    <p v-if="scope.row.u_sex=='1'">男</p>
                    <p v-if="scope.row.u_sex=='2'">女</p>               
                </template>
             </el-table-column>

             <el-table-column label="用户生日" prop="u_birthday" width="105" align="center">
             </el-table-column>

             <el-table-column label="地区" prop="u_position" width="100" align="center">
             </el-table-column>


            <el-table-column label="操作" prop="doit" width="300" align="center">
                <template slot-scope="scope"> 
                  <el-button size="small" type="primary" @click="edituser(scope.row.u_id)">编辑</el-button>
                <el-button size="small" type="danger" @click="deleteuser(scope.row.u_id)">删除</el-button>
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
    inject:['reload'],//注入依赖
    data(){
        return{
            currentPage:1,//初始页
            pagesize:2,//每页的数据
            searchTableInfo:"",
            getSearchInfo:[]
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

            this.$api.user.getallinfo().then(res =>{
            if(res.code==1){
                this.getSearchInfo=res.data;
            }else{
                 this.showMessage("info","未知错误")
      }
        })
            // this.$http.get('http://localhost:3000/userList').then(res =>{
            //     this.userList=res.body
            // })
        },

        deleteuser(val){
            this.$api.user.deleteuser(val).then(res =>{
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
                }else if(res.code==-1){
                    this.showMessage("info",res.data.message)
                }
            })
        },

        edituser(val){
            this.$router.push('/teacher/third/putuser/'+val)
        }
    },

     computed: {
      // 根据计算属性模糊搜索
      userList () {
        const searchTableInfo = this.searchTableInfo
        if (searchTableInfo) {
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          return this.getSearchInfo.filter(data => {
            // console.log("success"+data)
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data).some(key => {
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(searchTableInfo) > -1
            })
          })
        }
        return this.getSearchInfo
      }
    },
}
</script>


<style scoped>

.first{
  width: 748px;
  height: 418px;
  position: absolute;
  margin-left: 270px;
  margin-top: -530px;
}

 #div3{
  width: 249px;
  height: 5px;
  background: rgb(0, 183, 255);
  margin-bottom: 15px;
}
.searchBox{
    margin-top: 10px;
}
</style>

