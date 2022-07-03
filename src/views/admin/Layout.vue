<template>
    <div class="admin">
    <AdminHeader/>
    <div class="admin_nav">
    <AdminNav/>
    <router-view/>
    </div>
    </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue';
import AdminNav from '@/components/AdminNav.vue';

export default {
    name: "AdminLayout",
    components: { AdminHeader,
    AdminNav }
}
</script>

<style scoped>
.admin{
    border: solid 1px;
}
</style>