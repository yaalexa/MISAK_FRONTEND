<template>
  <div>
    <div>
      <MenuInicial />
    </div>
    <div class="fondo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <Contenidocasa/>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import MenuInicial from "@/components/MenuInicial.vue";
import Contenidocasa from "@/components/Contenidocasa.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Casa",
  components: {
    MenuInicial,
    Contenidocasa,
    Footer,
  },
};
</script>
<style scoped>
.fondo {
  background-image: url("@/assets/fondoweb1.png");
  background-size: cover;
  width: 100%;
  height: 80vh;
}
img {
  position: initial;
  width: 30vw;
  margin-top: 10vw;
}
@media all and (max-width: 700px) {
  .fondo {
  background-image: url("@/assets/fondoweb1.png");
  background-size: cover;
  width: 100%;
  height: 30vh;
}
img {
  position: initial;
  width: 15vw;
  margin-top: 20vw;
  margin-right: 75vw;
  display: none;
}
}
@media only screen and (min-width: 701px) and (max-width: 850px){
  .fondo {
  background-image: url("@/assets/fondoweb1.png");
  background-size: cover;
  width: 100%;
  height: 40vh;
}
img {
  position: initial;
  width: 50vw;
  margin-top: 10vw;
  display: none;
}
}
@media only screen and (min-width: 851px) and (max-width: 1130px){
  .fondo {
  background-image: url("@/assets/fondoweb1.png");
  background-size: cover;
  width: 100%;
  height: 60vh;
}
img {
  position: initial;
  width: 50vw;
  margin-top: 10vw;
}
}
</style>