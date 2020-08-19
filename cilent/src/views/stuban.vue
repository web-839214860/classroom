<template>
    <div>
        <stuBanner></stuBanner>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import stuBanner from '../components/stuBanner.vue'

export default {
    name: 'stuBan',
    components: {
        stuBanner
    }
}

</script>