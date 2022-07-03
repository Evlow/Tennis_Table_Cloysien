<template>
<header>
    <h1><router-link to="/"></router-link>
<img class="logo" src="../assets/logo.svg " alt="Logo tennis de table Cloysien" /></h1>
</header>

  <nav>
    <router-link to="/club">Le club</router-link>
    <router-link to="/teams">Les équipes</router-link>
    <router-link to="/competitions">Les compétitions</router-link>
    <router-link to="/usefulLinks">Liens utiles</router-link>
    <router-link to="/contact">Nous contacter</router-link>
    <router-link to="/admin/dasboard">Admin</router-link>
  </nav>
</template>

<script>
export default {
  name: "PubicNav",
};

</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}
</style>
