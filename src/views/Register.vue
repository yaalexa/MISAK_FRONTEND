<template>
  <div class="new_conten">
    <div class="home">
      <div class="container">
        <header class="heading">REGISTRO</header>

        <div class="row">
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
                    placeholder="Ingrese su nombre"
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
                    placeholder="Ingrese su nuevo usuario"
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
                    placeholder="Ingrese su correo electronico"
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
                    placeholder="Contraseña"
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
                    placeholder="Verifique contraseña"
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
                  <label class="firstname">Rol</label>
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
            <div>
              <br />
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="register()"
              >
                Registrarme
              </button>
              
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="Volver()"
              >
                Volver
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home {
  text-align: left;
  margin-left: 30%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}
.container {
  background-image: url("@/assets/fondo.png");
  border-style: 1px solid grey;
  opacity: 0.8;
  text-align: center;
  box-shadow: 2px 5px 5px 0px #eee;
  max-width: 500px;
  padding-top: 10px;
  height: 750px;
  margin-top: 10px;
  background-repeat: no-repeat;
  background-size: cover;
}
body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.new_conten {
  background-image: url("@/assets/Screenshot_2.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  filter: alpha(opacity=50);
}

.lastname {
  margin-left: 1px;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  margin-top: 10px;
}
.firstname {
  margin-left: 1px;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  margin-top: 5px;
}
#lname {
  margin-top: 5px;
}

.heading {
  text-decoration: bold;
  text-align: center;
  font-size: 30px;
  color: #f96;
  padding-top: 10px;
}

#email {
  margin-top: 5px;
}

.mail {
  margin-left: 44px;
  font-family: sans-serif;
  color: white;
  font-size: 14px;
  margin-top: 13px;
}
.pass {
  color: white;
  margin-top: 9px;
  font-size: 14px;
  font-family: sans-serif;
  margin-left: 6px;
  margin-top: 9px;
}
#password {
  margin-top: 6px;
}
.pno {
  font-size: 18px;
  margin-left: -13px;
  margin-top: 10px;
  color: #ff9;
}

.col-xs-4.male {
  color: white;
  font-size: 13px;
  margin-top: 9px;
  padding-bottom: 16px;
}
.col-xs-4.female {
  color: white;
  font-size: 13px;
  margin-top: 9px;
  padding-bottom: 16px;
  padding-right: 95px;
}
.sbutton {
  color: white;
  font-size: 20px;
  border: 1px solid white;
  background-color: #080808;
  width: 32%;
  margin-left: 41%;
  margin-top: 16px;
  box-shadow: 0px 2px 2px 0px white;
}
.btn.btn-warning:hover {
  box-shadow: 2px 1px 2px 3px #99ccff;
  background: #5900a6;
  color: #fff;
  transition: background-color 1.15s ease-in-out, border-color 1.15s ease-in-out,
    box-shadow 1.15s ease-in-out;
}
</style>
<script>
import axios from "axios";
export default {
  name: "Register",
  components: {},
  data: function () {
    return {
      rol: null,
      rolTmp: null,
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
    this.axios.get("/obtenerrols").then((response) => {
      this.rol = response.data.slice(1, response.data.length);
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
        if (data.data.status == "1") {
          // localStorage.token = data.data.result.token;

          this.$router.push("/");
        } else {
          this.error = true;
          this.error_msg = data.data.result.error_msg;
        }
      });
    },
    Volver(){
          this.$router.push("/");
    }
  },
};
</script>