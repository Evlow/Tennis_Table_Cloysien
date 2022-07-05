<template>
<header>

    <h1><router-link to="/"></router-link>
<img class="logo" src="../assets/images/logo.svg " alt="Logo tennis de table Cloysien" /></h1>

 <nav>
    <router-link to="/club">Le club</router-link>
    <router-link to="/teams">Les équipes</router-link>
    <router-link to="/competitions">Les compétitions</router-link>
    <router-link to="/usefulLinks">Liens utiles</router-link>
    <router-link to="/contact">Nous contacter</router-link>
    <router-link to="/admin/dasboard">Admin</router-link>
  </nav>
  </header>

</template>

<script>
export default {
  name: "PubicNav",
};

</script>

<style scoped>

header {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ff9e40;

}.logo{
  width: 100px;
}

nav {
  width: 100%;
  font-size: 18px;
  top: 0;
  display: flex;
    justify-content: space-evenly;
}

nav ul {
  display: flex;
}

nav a {
  text-decoration: none;
  color: black;
  font-size: 1.2em;
}
</style>
