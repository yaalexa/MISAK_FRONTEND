<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <form @submit.prevent="actualizar">
        <div class="contenedorusuario">
          <section>
            <h4>Editar Usuario</h4>
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
                    v-model="Usuario.full_name"
                    placeholder="Enter your Last Name"
                    class="form-control last"
                    required minlength="4"
                  maxlength="35"
                  size="35"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="row">
                <div class="col-xs-4">
                  <label class="firstname">Usuario :</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="text"
                    name="fname"
                    id="name"
                    v-model="Usuario.name"
                    placeholder="Enter your First Name"
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
                  <label class="mail">Email :</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="Usuario.email"
                    placeholder="Enter your email"
                    class="form-control"
                    disabled
                    required minlength="4"
                  maxlength="40"
                  size="40"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="row">
                <div class="col-xs-4">
                  <label class="firstname">Tipo de Documento: </label>
                </div>
                <div class="col-xs-8">
                  <select
                    name="document_type"
                    id="document_type"
                    v-model="Usuario.document_type"
                    class="form-control"
                  >
                    <br />
                    <option value="CC">Cedula ciudadania</option>
                    <option value="CE">Cedula De Extrangeria</option>
                    <option value="TI">Targeta de identidad</option>
                    <option value="PEP">PEP</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="row">
                <div class="col-xs-4">
                  <label class="firstname">Numero de Documento :</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="number"
                    name="document_number"
                    id="document_number"
                    v-model="Usuario.document_number"
                    placeholder="Número de documento"
                    class="form-control"
                    disabled
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
                  <label class="pass">NÚMERO Certificado misak</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="text"
                    name="certificado misak"
                    id="certificate_misak"
                    v-model="Usuario.certificate_misak"
                    placeholder="NÚMERO Certificado misak"
                    class="form-control"
                    required minlength="4"
                  maxlength="20"
                  size="20"
                  />
                  <br />
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="row">
                <div class="col-xs-4">
                  <label class="pass">Rol</label>
                </div>
                <div class="col-xs-8">
                  <select class="form-control" v-model="Usuario.rol_id">
                    <option v-for="rol in rol" v-bind:value="rol.id">
                      {{ rol.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="botonusuario">
          <button type="submit" class="btn btn-warning">Guardar</button>
          <button type="button" class="btn btn-secondary" v-on:click="salir()">
            Salir
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "actualizarusuarios",
  components: {
    Header,
  },
  data() {
    return {
      rol: null,
      Usuario: {
        name: "",
        full_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        document_type: "",
        document_number: "",
        certificate_misak: "",
        rol_id: "",
      },
    };
  },

  mounted() {
    this.mostrarusuario();
    this.axios
      .get("/rols", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user")),
        },
      })
      .then((response) => {
        this.rol = response.data;
      });
  },
  methods: {
    salir() {
      this.$router.push({ name: "usuarios" });
    },
    async mostrarusuario() {
      axios.get("/users/" + this.$route.params.id).then((datos) => {
        this.Usuario.name = datos.data[0].name;
        this.Usuario.full_name = datos.data[0].full_name;
        this.Usuario.email = datos.data[0].email;
        this.Usuario.document_type = datos.data[0].document_type;
        this.Usuario.document_number = datos.data[0].document_number;
        this.Usuario.certificate_misak = datos.data[0].certificate_misak;
        this.Usuario.rol_id = datos.data[0].rol_id;
      });
    },
    async actualizar() {
      await this.axios
        .put(`/users/${this.$route.params.id}`, this.Usuario)
        .then((response) => {
          console.log(response);
          this.format = response.data;
          var icono = "success";
          if (this.format.mensaje != "Usuario actualizado correctamente") {
            icono = "error";
          }
          Swal.fire({
            title: this.format.mensaje,
            icon: icono,
            confirmButtonColor: "#ffc107",
            iconColor: "#ffc107",
          });
          this.$router.push({ name: "usuarios" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
.contenedorusuario {
  margin-top: 3%;
  width: 70%;
  display: block;
  margin-left: 10%;
}
.botonautor {
  margin: 5%;
}
</style>