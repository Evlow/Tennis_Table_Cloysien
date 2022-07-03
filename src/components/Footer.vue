<template>
<footer>
 <div class="content-footer-flex">
      <!--LIEU-->
      <div class="footer-lieu">
        <h2 class="h2-footer">Nous trouver</h2>
        <p>Gymnase des trois rivières</p>
        <p>9 route de Montigny</p>
        <p>28220 CLOYES LES TROIS RIVIÈRES</p>
      </div>

      <!--CONTACT-->
      <div class="footer-contact">
        <h2 class="h2-footer">Nous contacter</h2>
      </div>

      <!--ADMIN-->
      <div class="footer-admin">
        <h2 class="h2-footer">Espace administrateur</h2>
          <ul>
    <li><router-link to="/admin/dasboard">Admin</router-link></li>
          </ul>
      </div>
    </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
};

</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}
</style>

