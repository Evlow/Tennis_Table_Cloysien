<template>
<nav>
  <router-link to='/club'>Le club</router-link>
   <router-link to='/teams'>Les équipes</router-link>
    <router-link to='/competitions'>Les compétitions</router-link>
      <router-link to='/usefulLinks'>Liens utiles</router-link>
    <router-link to='/contact'>Nous contacter</router-link>
</nav>
</template>

<script>
export default {
    name: 'PubicNav'
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
}
</style>