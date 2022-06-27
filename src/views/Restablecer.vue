<template>
  <div class="contenedor">
        <div class="shadow-lg bg-white rounded">
      <Menu1 />
          <div
      class="d-flex justify-content-center container rounded bg-white mt-1 mb-1"
    >
      <div class="hola">


        <form action="">
          <div class="conte">
            <div class="row">
              <div class="conte1 col-md-3 border-right">
                <div
                  class="
                    d-flex
                    flex-column
                    align-items-center
                    text-center
                    p-3
                    py-5
                  "
                >
                  <span> </span>
                </div>
              </div>
              <div class="conte2 col-md-5 border-right">
                <div class="p-4 py-5">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-3
                    "
                  >
                    <h4 class="text-right">CAMBIO DE CONTRASEÑA</h4>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-15">
                      <label class="labels">Correo elecotronico</label
                      ><input
                   type="email"
                    name="email"
                    id="email"
                    v-model="json.email"
                    placeholder="Enter your email"
                        class="form-control"
                        
                        value=""
                      />
                    </div>
                     <div class="col-md-15">
                      <label class="labels">Contraseña antigüa</label
                      ><input
                     type="password"
                    name="password"
                    id="password"
                    v-model="json.password"
                    placeholder="Enter your Password"
                        class="form-control"
                        
                        value=""
                      />
                    </div>                   
                    <div class="col-md-15">
                      <label class="labels"> Nueva contraseña</label
                      ><input
                        
                type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder="Enter your New Password"
                    class="form-control"
                    v-model="json.newpassword"
                      />
                    </div>
                      <div class="col-md-17">
                      <label class="labels">confirmación de Contraseña</label
                      ><input
                    name="newpassword_confirmation"
                    id="newpassword_confirmation"
                    placeholder="Enter your Confirmation Password"
                    class="form-control"
                    v-model="json.newpassword_confirmation"
                      />
                    </div>
                  </div>
                                      <div class="mt-3 text-center">
                      <button
              class="btn btn-primary profile-button"
                        type="button"
                v-on:click="restablecer()"
                      >
                        Guardar
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        </div>
        </div>
                <br><br><br><br><br><br>

    </div>
    
  </div>
</template>
<script>
import Menu1 from "@/components/Menu1.vue";
import axios from "axios";
export default {
  name: "Restablecer",
  components: {
    Menu1
  },
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
        .put("http://127.0.0.1:8000/api/restablecer", this.json)
        .then((response) => {
          this.form = response.data;
          console.log("Hola", this.form);
                this.$router.push("/perfilU");
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
  },
};
</script>
<style scoped>
.hola {
  color: rgb(7, 7, 7);
  width: 650px;
  border-radius: 20px;
  background: linear-gradient(145deg, #fcfcfc, #fcfcfc);
  box-shadow: 20px 20px 60px #cac9ca, 20px 20px 60px #cac9ca;
  border: none;
}
.profile-button {
  background: #23282e;
  box-shadow: none;
  border: none;
}
.contenedor {
  width: 100%;
  overflow: auto;
  height: 100vh;
  display: block;
}
.conte1 {
  width: 20%;
}
.conte2 {
  width: 60%;
}
</style>>