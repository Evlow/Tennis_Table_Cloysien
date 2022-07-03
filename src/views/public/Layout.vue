<template>
    <div class="public">
      Public Layout
      <publicNav/>  
        <router-view/>
    </div>
</template>

<script>
import PublicNav from '@/components/PublicNav.vue'

export default {
    name:'PublicLayout',
    components:{
        PublicNav
    }
}
</script>

<style scoped>
.public{
    border: solid 1px;
}
</style>