<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <div class="container izquierda">
          <h1>EDITAR MATERIAL</h1>

          <form action="" class="form-horizontal">
            <div class="col"></div>
            <div class="form-group left">
              <div class="col-sm-10">
                <label for="" class="control-label col-sm-3">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  v-model="form.name"/>
              </div>
            </div>
            <br />
            <button type="button" class="btn btn-primary" v-on:click="editar()">
              Editar
            </button>
            <a type="button" @click="salir()" class="btn btn-danger">
            <font-awesome-icon icon="fa-solid fa-trash-can" />Salir
            </a>
          </form>
        </div>
      </section>
    </div>
    <!-- <Footer />   -->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
//import Footer from '@/components/Footer.vue';
import axios from "axios";
export default {
  name: "EditarEditorial",
  components: {
    Header,
    //Footer
  },
  data: function () {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    editar() {
      axios
        .put(
          `/editorials/${this.form.editorialid}`,
          this.form
        )
        .then((response) => {
          console.log(response);
          this.$router.push("/Editorial");
        });
    },
    salir() {
      this.$router.push("/Editorial");
    },
    eliminar() {
      var enviar = {
        editorialid: this.form.editorialid,
      };
      axios
        .delete("/editorials", { headers: enviar })
        .then((datos) => {
          console.log(datos);
          this.$router.push("/Editorial");
        });
    },
  },
  mounted: function () {
    this.form.editorialid = this.$route.params.id;
    axios
      .get("/editorials/?id=" + this.form.editorialid)
      .then((datos) => {
        this.form.name = datos.data[0].name;
        console.log(this.form);
      });
  },
};
</script>
<style scoped>
body {
  margin: 0%;
}
.pantalla {
  display: flex;
}
.cara1 {
  height: 100vh;
  width: 20%;
}
.cara2 {
  width: 80%;
  height: 100vh;
}
.izquierda {
  text-align: left;
  width: 50%;
}
</style>