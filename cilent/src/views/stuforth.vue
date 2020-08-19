<template>
    <div>
        <stuInfo></stuInfo>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import stuInfo from '../components/stuInfo.vue'

export default {
    name: 'stuForth',
    components: {
        stuInfo
    }
}

</script>