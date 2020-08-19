<template>
    <div>
        <Login></Login>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import Login from '../components/Login.vue'

export default {
    name: 'Log',
    components: {
        Login
    }
}

</script>