<template>
    <div>
        <tecInfo></tecInfo>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import tecInfo from '../components/tecInfo.vue'

export default {
    name: 'tecForth',
    components: {
        tecInfo
    }
}

</script>