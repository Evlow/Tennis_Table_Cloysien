<template>
    <div class="public">
      <publicNav/>  
          <Footer/>
        <router-view/>
    </div>
</template>

<script>
import PublicNav from '@/components/PublicNav.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:'PublicLayout',
    components:{
        PublicNav,
        Footer,
    }
}
</script>

<style scoped>

</style>