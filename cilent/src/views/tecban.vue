<template>
    <div>
        <tecBanner></tecBanner>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
    </div>
</template>

<script>

import tecBanner from '../components/tecBanner.vue'

export default {
    name: 'tecBan',
    components: {
        tecBanner
    }
}

</script>