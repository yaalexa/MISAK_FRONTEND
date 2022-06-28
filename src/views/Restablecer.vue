<template>
  <div class="restablecer">
    <div class="rcontainer">
      <header class="heading">RESTABLECIMIENTO DE CONTRASEÑA</header>
      <form action="">
        <div class="form">
          <div class="col-sm-4">
            <div class="col-sm-12">
              <div class="row1">
                <div class="col-xs-4">
                  <label class="email">Email:</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="json.email"
                    placeholder="Enter your email"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="row1">
                <div class="col-xs-4">
                  <label class="rpass">Contraseña Antigua:</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="json.password"
                    placeholder="Enter your Password"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="row1">
                <div class="col-xs-4">
                  <label class="rpass">Nueva Contraseña:</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder="Enter your New Password"
                    class="form-control"
                    v-model="json.newpassword"
                  />
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="row1">
                <div class="col-xs-4">
                  <label class="rpass">Confirmacion de Contraseña Nueva:</label>
                </div>
                <div class="col-xs-8">
                  <input
                    type="password"
                    name="newpassword_confirmation"
                    id="newpassword_confirmation"
                    placeholder="Enter your Confirmation Password"
                    class="form-control"
                    v-model="json.newpassword_confirmation"
                  />
                </div>
              </div>
            </div>

            <div>
              <br />
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="restablecer()"
              >
                Guardar
              </button>
              Guardar
            </div>
            <router-link class="fadeIn fourth volverv" to="/Casa"
              >Volver</router-link
            ><br /><br />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Restablecer",
  components: {},
  data: function () {
    return {
      json: {
        email: "",
        password: "",
        newpassword: "",
        newpassword_confirmation: "",
      },
    };
  },
  methods: {
    restablecer() {
      axios
        .put("/restablecer", this.json)
        .then((response) => {
          this.form = response.data;
          console.log("Hola", this.form);
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
  },
};
</script>
<style>
.restablecer {
  background-image: url("@/assets/Screenshot_2.png");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  filter: alpha(opacity=50);
}
.rcontainer {
  background-image: url("@/assets/fondo.png");
  opacity: 0.8;
  box-shadow: 2px 5px 5px 0px #eee;
  padding-top: 10px;
  height: 450px;
  margin-top: 50px;
  background-repeat: no-repeat;
  background-size: cover;
}
.form {
  display: flex;
  justify-content: center;
}
.row1 {
  width: 100%;
  align-items: center;
  flex-direction: column;
}

.heading {
  font-size: 30px;
  color: #f96;
  padding-top: 10px;
}
#email {
  margin-top: 5px;
}
.email {
  margin-left: 44px;
  font-family: sans-serif;
  color: white;
  font-size: 14px;
  margin-top: 13px;
}
.rpass {
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
</style>