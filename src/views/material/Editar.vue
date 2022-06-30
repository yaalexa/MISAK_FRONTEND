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
          <!--form-->
          <form class="form-horizontal" action="">
            <div class="col"></div>
            <div class="form-group left">
              <div class="col-sm-10">
                <label for="" class="control-label col-sm-3">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  v-model="mate.name"
                  required minlength="4"
                  maxlength="35"
                  size="30"
                />
              </div>
            </div>
            <div class="form-group left row">
              <div class="col">
                <label for="" class="control-label col-sm-3">Año</label>
                <div class="col-sm-7">
                  <input
                    type="number"
                    class="form-control"
                    name="year"
                    id="year"
                    v-model="mate.year"
                    required minlength="4"
                  maxlength="10"
                  size="11"
                  />
                </div>
              </div>
              <div class="col">
                <label for="" class="control-label col-sm-5">ISBN</label>
                <div class="col-sm-7">
                  <input
                    disabled
                    type="number"
                    class="form-control"
                    name="isbn"
                    id="isbn"
                    v-model="mate.isbn"
                    required minlength="4"
                  maxlength="10"
                  size="11"
                  />
                </div>
              </div>
            </div>
            <div class="form-group left row">
              <div class="col">
                <label for="" class="control-label col-sm-3">#Paginas</label>
                <div class="col-sm-7">
                  <input
                    type="number"
                    class="form-control"
                    name="num_pages"
                    id="num_pages"
                    v-model="mate.num_pages"
                    required minlength="4"
                    maxlength="10"
                    size="11"
                  />
                </div>
              </div>

              <!--NUEVO EDITAR-->
              <div class="col">
                <div class="col-xs-4">
                  <label class="firstname">Prioridad: </label>
                </div>
                <div class="col-xs-8">
                  <select
                    name="document_type"
                    id="document_type"
                    class="form-control"
                  >
                    <br />
                    <option value="1">Visualizado</option>
                    <option value="2">Descargado</option>
                  </select>
                </div>
              </div>
              <br />
              <!--fin de ditar-->
              <!--para tipo material-->
              <div class="form-group left row">
                <div class="col">
                  <label for="" class="control-label col-sm-5">EDITORIAL</label>
                  <div class="col-sm-7">
                    <select class="form-control" v-model="mate.editorial_id">
                      <option
                        v-for="editorial_id in editorial_id"
                        v-bind:value="editorial_id.id"
                      >
                        {{ editorial_id.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <label for="" class="control-label col-sm-3">AREA</label>
                  <div class="col-sm-7">
                    <select class="form-control" v-model="mate.area_id">
                      <option
                        v-for="area_id in area_id"
                        v-bind:value="area_id.id"
                      >
                        {{ area_id.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group left row">
                <div class="col">
                  <label for="" class="control-label col-sm-5"
                    >TIPO MATERIAL</label
                  >
                  <div class="col-sm-7">
                    <select
                      class="form-control"
                      v-model="mate.type_material_id"
                    >
                      <option
                        v-for="type_material_id in type_material_id"
                        v-bind:value="type_material_id.id"
                      >
                        {{ type_material_id.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <br /><br />
                <div class="form-group">
                  <br />
                  <button
                    type="button"
                    v-on:click="actualizar()"
                    class="btn btn-warning"
                  >
                    Actualizar
                  </button>
                  <button
                    type="button"
                    class="btn btn-dark margen"
                    v-on:click="salir()"
                  >
                    Salir
                  </button>
                </div>
              </div>
              <!--fin de tipo material-->
            </div>
            <br />
          </form>
          <!--fin de form-->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Editar",
  components: {
    Header,
    //Footer
  },
  data: function () {
    return {
      area_id: null,
      type_material_id: null,
      editorial_id: null,
      mate: {
        id: "",
        name: "",
        isbn: "",
        year: "",
        num_pages: "",
        priority: "",
        pdf: "",
        img: "",
        editorial_id: "",
        area_id: "",
        type_material_id: "",
      },
    };
  },
  mounted() {
    this.mostrarForm();
    this.tipoMaterial();
    this.area();
    this.edito();
  },
  methods: {
    tipoMaterial() {
      let direccion = "/type_materials";
      axios
        .get(direccion, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((result) => {
          this.type_material_id = result.data;
        });
    },
    area() {
      let direccion3 = "/areas";
      axios
        .get(direccion3, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((result) => {
          this.area_id = result.data;
        });
    },
    edito() {
      let direccion2 = "/editorials";
      axios
        .get(direccion2, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((result) => {
          this.editorial_id = result.data;
        });
    },
    salir() {
      this.$router.push("/dashboard");
    },
    //cosas
    actualizar() {
      axios
        .put("/materials/" + this.mate.id, this.mate, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          console.log(response);
          this.form= response.data
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
          this.$router.push("/dashboard");
        });
    },
    async mostrarForm() {
      this.mate.id = this.$route.params.id;
      await axios
        .get("/materials/" + this.mate.id, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.mate.id = response.data[0].id;
          this.mate.name = response.data[0].name;
          this.mate.isbn = response.data[0].isbn;
          this.mate.year = response.data[0].year;
          this.mate.num_pages = response.data[0].num_pages;
          this.mate.priority = response.data[0].priority;
          this.mate.editorial_id = response.data[0].editorial_id;
          this.mate.area_id = response.data[0].area_id;
          this.mate.type_material_id = response.data[0].type_material_id;
          console.log(this.form);
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
  height: 100vh;
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