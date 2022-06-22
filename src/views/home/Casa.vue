<template>
  <div>
    <div>
      <MenuInicial />
    </div>
    <div class="fondo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import MenuInicial from "@/components/MenuInicial.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Casa",
  components: {
    MenuInicial,
    Footer,
  },
};
</script>
<style scoped>
.fondo {
  background-image: url("@/assets/fondo33.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
img {
  position: relative;
  width: 40vw;
  margin-top: 20vw;
}
</style>