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
              <h1>Crear Nuevo Nivel Educativo</h1>
              <label for="">name: </label>
              <input type="text" v-model="NivelEducativo.name" />
              <br /><br />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "CrearNivelEducativo",
  data() {
    return {
      NivelEducativo: {
        name: "",
      },
    };
  },
  components: {
    Header,
    //  Footer
  },
  methods: {
    async crear() {
      await this.axios
        .post(
          "/educational_levels",
          this.NivelEducativo
        )
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "MostrarNivelEducativo" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>