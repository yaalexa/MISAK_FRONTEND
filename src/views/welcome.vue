<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <img class="" src="@/assets/LocoWeb3.png" id="icon" alt="User Icon" />
      </section>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

import axios from "axios";
export default {
  name: "welcome",
  data() {
    return {
      material: null,
      pagina: 1,
    };
  },
  components: {
    Header,
    //  Footer
  },
};
</script>
<style  scoped>
body {
  margin: 0%;
}
.pantalla {
  background-image: url("@/assets/Screenshot_2.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  filter: alpha(opacity=50);
  width: 100%;
  height: 100vh;
}
.cara1 {
  height: 100vh;
  width: 20%;
}
.cara2 {
  width: 80%;
  height: 100vh;

  overflow: auto;
}

#icon {
  width: 70%;
  position: flex;
  background-position: center center;
  background-size: 100px auto;
  margin-left: 10em;
  margin-top: 23em;
}
</style>