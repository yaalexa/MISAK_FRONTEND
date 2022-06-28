<template>
  <div>
    <div class="pantalla">
      <div class="cara1">
        <header>
          <Header />
        </header>
      </div>
      <div class="cara2">
        <section>
          <form @submit.prevent="crear">
            <div>
              <h1>Crear Area</h1>
              <label for="">Nombre: </label>
              <input type="text" v-model="areas.name" />
              <br /><br />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Guardar</button>
              <a type="button" @click="salir()" class="btn btn-danger"
                ><font-awesome-icon icon="fa-solid fa-trash-can" />Salir</a
              >
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  name: "CrearAreas",
  data() {
    return {
      areas: {
        name: "",
      },
    };
  },
  components: {
    Header,
    //  Footer
  },
  methods: {
    salir() {
      this.$router.push("/Areas");
    },
    async crear() {
      await this.axios
        .post("/areas", this.areas)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "MostrarAreas" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.cara2 {
  margin-top: 5%;

  overflow: hidden;
}
</style>