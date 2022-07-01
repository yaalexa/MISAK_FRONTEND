<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <h1>REGISTRO DE NUEVO USUARIO</h1>
        <div class="container izquierda">
          <form action="" v-on:submit.prevent="register">
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
                    v-model="full_name"
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
                    v-model="name"
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
                    v-model="email"
                    placeholder="Enter your email"
                    class="form-control"
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
                    v-model="document_type"
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
                    v-model="document_number"
                    placeholder="Número de documento"
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
                  <label class="pass">Password :</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    placeholder="Enter your Password"
                    class="form-control"
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
                  <label class="pass">confirmar Password :</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="password"
                    name="password"
                    id="password_confirmation"
                    v-model="password_confirmation"
                    placeholder="Enter your Confirmation Password"
                    class="form-control"
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
                  <label class="pass">NÚMERO Certificado misak</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="number"
                    name="certificado misak"
                    id="certificate_misak"
                    v-model="certificate_misak"
                    placeholder="NÚMERO Certificado misak"
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
                  <label class="pass">Rol</label>
                </div>
                <div class="col-xs-8">
                  <select class="form-control" v-model="selected">
                    <option v-for="rol in rol" v-bind:value="rol.id">
                      {{ rol.name }}
                    </option>
                  </select>
                </div>
              </div>
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

            <div></div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
//import Footer from '@/components/Footer.vue'
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "unuevo",
  components: {
    Header,
  },

  data: function () {
    return {
      rol: null,
      selected: "",
      form: {
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
  mounted: function () {
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
    register() {
      let json = {
        name: this.name,
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        document_type: this.document_type,
        document_number: this.document_number,
        certificate_misak: this.certificate_misak,
        rol_id: this.selected,
      };
      axios.post("/register", json).then((data) => {
        this.format = data.data;
        var icono = "success";
        if (this.format.mensaje != "\u00a1Registro de usuario exitoso!") {
          icono = "error";
        }
        Swal.fire({
          title: this.format.mensaje,
          icon: icono,
          confirmButtonColor: "#ffc107",
          iconColor: "#ffc107",
        });
        this.$router.push("/usuarios");
        if (this.format.res == true) {
          // localStorage.token = data.data.result.token;
          this.$router.push("/usuarios");
        } else {
          this.error = true;
          this.error_msg = data.data.result.error_msg;
        }
        //this.$router.push("/usuarios");
      });
    },
    salir() {
      this.$router.push("/usuarios");
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
  width: 70%;
}
</style>
  
