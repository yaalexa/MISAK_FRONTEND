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
            <div class="contenedorautor">
              <section>
                <h1>Editar Autor</h1>
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-xs-4">
                      <label class="lastname">Nombre Completo:</label>
                    </div>
                    <div class="col-xs-8">
                      <input
                        type="text"
                        name="lname"
                        id="full_name"
                        v-model="Autor.name"
                        class="form-control last"
                        required minlength="4"
                        maxlength="35"
                        size="30"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-xs-4">
                      <label class="firstname">Direccion :</label>
                    </div>
                    <div class="col-xs-8">
                      <input
                        type="text"
                        name="fname"
                        id="name"
                        v-model="Autor.address"
                        class="form-control"
                        required minlength="4"
                        maxlength="20"
                        size="20"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-xs-4">
                      <label class="firstname">Telefono :</label>
                    </div>
                    <div class="col-xs-8">
                      <input
                        type="number"
                        name="fname"
                        id="name"
                        v-model="Autor.phone"
                        class="form-control"
                        required minlength="4"
                        maxlength="13"
                        size="14"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="botonautor">
              <button type="submit" class="btn btn-warning">Guardar</button>
              <button
                type="button"
                class="btn btn-secondary"
                v-on:click="salir()"
              >
                Salir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "EditarAutor",
  data() {
    return {
      Autor: {
        name: "",
        address: "",
        phone: "",
      },
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.mostrarAutor();
  },
  methods: {
    salir() {
      this.$router.push({ name: "MostrarAutor" });
    },
    async mostrarAutor() {
      axios
        .get("/authors/" + this.$route.params.id, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((datos) => {
          this.Autor.name = datos.data[0].name;
          this.Autor.address = datos.data[0].address;
          this.Autor.phone = datos.data[0].phone;
        });
    },
    async actualizar() {
      await this.axios
        .put(`/authors/${this.$route.params.id}`, this.Autor, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.form = response.data;
          console.log("formulario: ", this.form.mensaje);
          var icono = "success";
          var colorb = "#ffc107";
          var colori = "#ffc107";
          if (this.form.res == true) {
          } else {
            icono = "error";
            colorb = "#c42a2a";
            colori = "#c42a2a";
          }
          Swal.fire({
            title: this.form.mensaje,
            icon: icono,
            confirmButtonColor: colorb,
            iconColor: colori,
          });
          this.$router.push({ name: "MostrarAutor" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
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
  overflow: auto;
  height: 100vh;
  width: 80%;
}
.contenedorautor {
  margin-top: 3%;
  width: 70%;
  display: block;
  margin-left: 10%;
}
.botonautor {
  margin: 5%;
}
</style>