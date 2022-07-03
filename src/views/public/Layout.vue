<template>
    <div class="public">
      <publicNav/>  
          <Footer/>
        <router-view/>
    </div>
</template>

<script>
import PublicNav from '@/components/PublicNav.vue'
import FooterVue from '@/components/Footer.vue'
export default {
    name:'PublicLayout',
    components:{
        PublicNav,
        FooterVue
    }
}
</script>

<style scoped>
.public{
    border: solid 1px;
}
</style>