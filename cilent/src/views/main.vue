<template>
    <div>
        <Header></Header>
        <!-- <keep-alive> -->
            <router-view />
        <!-- </keep-alive> -->
        <Footer></Footer>
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Main',
    components: {
        Header,
        Footer
    }
}

</script>

