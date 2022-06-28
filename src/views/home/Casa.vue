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
  name: "Home",
  components: {
    MenuInicial,
    Contenidocasa,
    Footer,
  },
};
</script>
<style scoped>
.fondo {
  background-image: url("@/assets/fondo33.jpg");
  background-size: cover;
  width: 100%;
  height: 80vh;
}
img {
  position: initial;
  width: 30vw;
  margin-top: 10vw;
}
</style>