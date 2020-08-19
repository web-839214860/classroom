import { getLocalStorage, removeLocalStorage } from '@/utils/localStorage'


const user = {
    namespaced: true,
    state: {  //数据源，保存的数据放在这里，在页面通过 this.$store.state来获取数据
        name: '',
        token: '',
        roles: '',
        userId: '',
        sex:'',
        birthday:'',
        position:'',
        browserHeaderTitle: getLocalStorage('browserHeaderTitle') || '开会易'
    },
    getters: { //监听state中的值的变化，返回结果
        token: state => state.token,
        roles: state => state.roles,
        name: state => state.name,
        userId: state => state.userId,
        sex: state => state.sex,
        birthday: state => state.birthday,
        position: state => state.position,
        browserHeaderTitle: state => state.browserHeaderTitle,
    },
    mutations: { //修改state中的值
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_BROWSERHEADERTITLE: (state, action) => {
            state.browserHeaderTitle = action.browserHeaderTitle
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_USERID: (state, userId) => {
            state.userId = userId
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_SEX: (state, sex) =>{
            state.sex = sex
        },
        SET_BIRTHDAT: (state, birthday) => {
            state.birthday = birthday
        },
        SET_POSITION: (state, position) => {
            state.position = position
        }
    },
    actions: { //通过store.disPatch 方法触发
        //登出
        LogOut() {
            return new Promise((resolve, reject) => {
                removeLocalStorage('Token')
                resolve()
            })
        },


    }
}

export default user;


/*vuex：

disPatch：异步操作
存储：this.$store.disPatch('action 方法名'，值)
取值：this.$store.getters.方法名

commit：同步操作
存储：this.$store.commit('mutations 方法名'，值)
取值：this.$store.state.方法名*/