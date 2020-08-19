<template>
    <div>
        <classInfo></classInfo>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import classInfo from '../components/classInfo.vue'

export default {
    name: 'tecSecond',
    components: {
        classInfo
    }
}

</script>