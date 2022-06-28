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
              <h1>Crear Nuevo Editorial</h1>
              <label for="">name: </label>
              <input type="text" v-model="editorial.name" />
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
  name: "CrearEditorial",
  data() {
    return {
      editorial: {
        name: "",
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    async crear() {
      await this.axios
        .post("/editorials", this.editorial)
        .then((response) => {
          this.$router.push({ name: "MostrarEditorial" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>