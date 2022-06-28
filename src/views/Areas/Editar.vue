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
          <h1>EDITAR AREAS</h1>

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
                  v-model="form.name"
                />
              </div>
            </div>

            <br />

            <button type="button" class="btn btn-primary" v-on:click="editar()">
              Editar
            </button>

            <a type="button" @click="salir()" class="btn btn-danger"
              ><font-awesome-icon icon="fa-solid fa-trash-can" />Salir</a
            >
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
  name: "EditarAreas",
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
        .put(`/areas/${this.form.areasid}`, this.form)
        .then((response) => {
          console.log(response);
          this.$router.push("/Areas");
        });
    },
    salir() {
      this.$router.push("/Areas");
    },
    eliminar() {
      var enviar = {
        areasid: this.form.areasid,
      };
      axios
        .delete("/areas", { headers: enviar })
        .then((datos) => {
          console.log(datos);
          this.$router.push("/areas");
        });
    },
  },
  mounted: function () {
    this.form.areasid = this.$route.params.id;
    axios
      .get(`/areas/${this.form.areasid}`)
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
  margin-top: 5%;
  text-align: left;
  width: 50%;
}
</style>