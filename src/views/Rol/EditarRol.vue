<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <br />
    <div class="container izquierda">
      <div class="col text-left">
        <h1>Roles</h1>
      </div>
      <form @submit.prevent="actualizar" class="form-horizontal">
        <div class="form-group row">
          <label for="" class="control-label"> Editando rol </label>
          <div class="col-sm-4">
            <input
              type="text"
              class="form-control"
              v-model="rol.name"
              placeholder="rol.name"
            />
          </div>
          <div class="col-sm-4">
            <button type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </form>
      <div class="form-group left">
        <button type="button" class="btn btn-dark margen" v-on:click="salir()">
          Salir
        </button>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "EditarRol",
  data() {
    return {
      rol: {
        name: "",
      },
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.mostrarRol();
  },
  methods: {
    /* alert:${this.$route.params.id}, */
    async mostrarRol() {
      await this.axios
        .get(`/rols/{$this.$route.params.id}`)
        .then((response) => {
          const { name } = response.data;
          this.rol.name = name;
          console.log("estoy en then metodo mostrar rol");
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
      /* 
            /* this.$router.push("/mostrar"); */
    },
    async actualizar() {
      await this.axios
        .put(
          `/rols/${this.$route.params.id}`,
          this.rol
        )
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "mostrarRol" });
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push("/mostrar");
    },
    salir() {
      this.$router.push("/mostrar");
    },
  },
};
</script>
<style scoped>
.left {
  text-align: left;
}
.izquierda {
  text-align: left;
  width: 50%;
}
</style>