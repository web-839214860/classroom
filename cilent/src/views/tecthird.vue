<template>
    <div>
        <usersInfo></usersInfo>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import usersInfo from '../components/usersInfo.vue'

export default {
    name: 'tecThird',
    components: {
        usersInfo
    }
}

</script>