<template>
  <div class="contenedor">
    <div class="shadow-sm bg-white rounded">
      <Menu1 />
    </div>

    <!--inicio form-->
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
                  <img
                    class="rounded-circle mt-5"
                    width="150px"
                    src="../../assets/loginImg.png"
                  /><span class="font-weight-bold">{{ per.full_name }}</span
                  ><span class="text-black-50">{{ per.email }}</span
                  ><span> </span>
                  <div class="">
                    <button
                      class="btn btn-warning btn-sm"
                      type="button"
                      v-b-modal.modal-xl
                    >
                      Cambio contraseña
                    </button>
                  </div>
                </div>
              </div>
              <div class="conte2 col-md-5 border-right">
                <div class="p-3 py-5">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-3
                    "
                  >
                    <h4 class="text-right">CONFIGURACIÓN DE PERFIL</h4>
                  </div>

                  <div class="row mt-3">
                    <div class="col-md-15">
                      <label class="labels">Nombre</label
                      ><input
                        class="form-control"
                        type="text"
                        name="lname"
                        id="full_name"
                        v-model="per.full_name"
                      />
                    </div>

                    <div class="col-md-15">
                      <label class="labels">Usuario</label
                      ><input
                        type="text"
                        name="fname"
                        id="name"
                        v-model="per.name"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-15">
                      <label class="labels">Correo elecotronico</label
                      ><input
                        type="email"
                        name="email"
                        id="email"
                        v-model="per.email"
                        class="form-control"
                        disabled
                        value=""
                      />
                    </div>

                    <div class="col-md-15">
                      <label class="labels">Codigo misak</label
                      ><input
                        disabled
                        type="text"
                        class="form-control"
                        placeholder="enter address line 2"
                        v-model="per.certificate_misak"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-15">
                      <label class="labels">Tipo de documento</label>
                      <div class="col-xs-8">
                        <select
                          disabled
                          name="document_type"
                          id="document_type"
                          v-model="per.document_type"
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
                    <div class="col-md-15">
                      <label class="labels">Documento</label
                      ><input
                        disabled
                        class="form-control"
                        type="text"
                        name="document_number"
                        id="document_number"
                        v-model="per.document_number"
                      />
                    </div>

                    <div class="mt-3 text-center">
                      <button
                        class="btn btn-primary profile-button"
                        type="button"
                        v-on:click="actualizarU()"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- aqui comienza el modal de cambio de contraseña -->

            <div>
              <b-modal id="modal-xl" size="lg" title="Cambio de contraseña">
                <template #modal-header>
                  <h3>Cambio de Contraseña</h3>
                </template>

                <form action="">
                  <div class="form">
                    <div class="col-sm-6">
                      <div class="col-sm-12">
                        <div class="row1">
                          <div class="col-xs-4">
                            <label class="">Email:</label>
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
                            <label class="">Contraseña Antigua:</label>
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
                            <label class="">Nueva Contraseña:</label>
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
                            <label class=""
                              >Confirmacion de Contraseña Nueva:</label
                            >
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
                        <b-button
                          id="guardar5"
                          type="button"
                          class="btn btn-warning"
                          v-on:click="restablecer()"
                          >Guardar
                        </b-button>
                      </div>
                    </div>
                  </div>
                </form>
                <template #modal-footer="{ close }">
                  <b-button class="btn btn-secondary" @click="close()">
                    Cerrar
                  </b-button>
                </template>
              </b-modal>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Menu1 from "@/components/Menu1.vue";
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "perfilu",
  data() {
    return {
      cancelar: false,
      json: {
        email: "",
        password: "",
        newpassword: "",
        newpassword_confirmation: "",
      },
      per: {
        name: "",
        full_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        document_type: "",
        document_number: "",
        certificate_misak: "",
        rol_id: "",
        contra_des: "",
      },
    };
  },
  components: {
    Menu1,
  },
  mounted() {
    this.mostrarusuariou();
  },
  methods: {
    restablecer() {
      var token = JSON.parse(sessionStorage.getItem("user"));
      axios
        .put("/restablecer", this.json, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
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
        })
        .catch((errorgrave) => console.log(errorgrave));
    },

    async mostrarusuariou() {
      var id = JSON.parse(sessionStorage.getItem("userid"));
      console.log("el id es ", id);
      axios.get("/users/" + id).then((datos) => {
        this.per.name = datos.data[0].name;
        this.per.full_name = datos.data[0].full_name;
        this.per.email = datos.data[0].email;
        this.per.password = datos.data[0].password;
        this.per.password_confirmation = datos.data[0].password_confirmation;
        this.per.document_type = datos.data[0].document_type;
        this.per.document_number = datos.data[0].document_number;
        this.per.certificate_misak = datos.data[0].certificate_misak;
        this.per.rol_id = datos.data[0].rol_id;
      });
    },
    actualizarU() {
      var id = JSON.parse(sessionStorage.getItem("userid"));
      axios.put("/users1/" + id, this.per)
      .then((response) => {
          this.form = response.data;
          console.log("formulario: ", this.form.mensaje);
          var icono = "success";
          var colorb = "#ffc107";
          var colori = "#ffc107";
          if (this.form.res == true){
          }
          else{
            icono = "error";
            colorb = "#c42a2a";
            colori = "#c42a2a";
          }
          Swal.fire({title:this.form.mensaje,
                    icon: icono,
                    confirmButtonColor: colorb,
                    iconColor:colori});
          this.$router.push("/UsuarioU");
        });
    },
    restable() {
      this.$router.push("/Restablecer");
    },
    cancelar() {
      this.$router.push("/perfilu");
    },
  },
};
</script>
<style scoped>
.contenedor {
  width: 100%;
  overflow: auto;
  height: 100vh;
  display: block;
}
body {
  background: rgb(99, 39, 120);
}
.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}
.profile-button {
  background: #23282e;
  box-shadow: none;
  border: none;
}
.profile-button:hover {
  background: #682773;
}
.profile-button:focus {
  background: #682773;
  box-shadow: none;
}
.profile-button:active {
  background: #682773;
  box-shadow: none;
}
.back:hover {
  color: #682773;
  cursor: pointer;
}
.labels {
  font-size: 11px;
}
.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}
.hola {
  color: rgb(7, 7, 7);
  width: 650px;
  border-radius: 10px;
  background: linear-gradient(145deg, #fcfcfc, #fcfcfc);
  box-shadow: 20px 20px 60px #cac9ca, 20px 20px 60px #cac9ca;
  border: none;
}
.conte {
  width: 100%;
  display: flex;
}
.conte1 {
  width: 40%;
}
.conte2 {
  width: 60%;
}
#guardar5 {
  margin-top: 10px;
}
</style>