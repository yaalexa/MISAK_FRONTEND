<template>
  <div>
    <div>
      <div class="pantalla">
        <div class="cara1">
          <header>
            <Header />
          </header>
        </div>
        <div class="cara2">
          <form @submit.prevent="actualizar">
            <div>
              <section>
                <h1>Editar Nivel Educativo</h1>
                <label for="">Nivel Educativo: </label>
                <input type="text" v-model="NivelEducativo.name" />
                <br />
                <br />
              </section>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  name: "EditarNivelEducativo",
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
  mounted() {
    this.mostrarNivelEducativo();
  },
  methods: {
    async mostrarNivelEducativo() {
      await this.axios
        .get(
          `/educational_levels/${this.$route.params.id}`
        )
        .then((response) => {
          const { name } = response.data;
          this.NivelEducativo.name = name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async actualizar() {
      await this.axios
        .put(
          `/educational_levels/${this.$route.params.id}`,
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