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
       <p>tennisdetablecloysien@free.fr</p>
        <p>07 55 67 10 41</p>
      </div>

      <!--ADMIN-->
      <div class="footer-admin">
        <h2 class="h2-footer">Espace administrateur</h2>
          <ul>
    <li><router-link to="/admin/dasboard">Se connecter</router-link></li>
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
footer {
  display: flex;
  height: auto;
  width: 100%;
  background-color:#ff9e40;
  position: absolute;
  bottom:0;
}

.content-footer-flex {
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  padding-top: 20px;
}



.content-footer-flex  h2{
  padding-bottom: 15px;
}

.h2-footer{
  color: black;
}


</style>

