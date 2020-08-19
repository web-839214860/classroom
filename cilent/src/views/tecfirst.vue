<template>
    <div>
        <classtableInfo></classtableInfo>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import classtableInfo from '../components/classtableInfo.vue'

export default {
    name: 'tecFirst',
    components: {
        classtableInfo
    }
}

</script>