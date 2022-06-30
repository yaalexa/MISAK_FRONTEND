<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <div class="contenedortablaareas">
          <h1>NIVELES PARA ASIGNAR</h1>
          <div class="form-group left row">
            <div class="control-label col-sm-5" style="text-align: left">
              <a type="submit" id="guardar" @click="nuevaasignacion()" class="btn btn-danger"
                ><b-icon icon="plus-circle-fill" aria-hidden="true"
                  >Guardar</b-icon
                ><b-tooltip target="guardar" triggers="hover">
                    <b>GUARDAR ASIGNACIÓN</b>
                  </b-tooltip>
                </a
              >
            </div>
            <div class="control-label col-sm-7" style="text-align: left">
              <div class="input-group" style="text-align: right">
                <b-form-input
                  v-model="filter"
                  type="search"
                  placeholder="Buscar"
                >
                </b-form-input>
              </div>
              <br />
            </div>
          </div>

          <b-table
            :filter="filter"
            id="my-table"
            :items="Niveles"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(seleccionar)="row">
              <input
                type="checkbox"
                id=""
                :value="row.item.id"
                v-model="formData.educational_level_id"
              />
            </template>
          </b-table>
          <b-pagination
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
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
  name: "AsignarMaterial",
  data() {
    return {
      Niveles: [],
      formData: {
        educational_level_id: [],
        material_id: "",
      },
      filter: null,
      perPage: 7, //numero de filas que va  atener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
      Areas: [],
      fields: [
        { key: "id", label: "#" },
        { key: "name", label: "Nombre" },
        "Seleccionar",
      ],
    };
  },
  components: {
    Header,
  },
  computed: {
    rows() {
      return this.Niveles.length;
    },
  },
  mounted() {
    this.mostrarNiveles();
  },
  methods: {
    async mostrarNiveles() {
      await this.axios
        .get("/educational_levels", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.Niveles = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Niveles = [];
        });
    },
    asignarNiveles(id) {
      this.axios
        .post(`/material__educational_levels/${this.$route.params.id},${id}`)
        .then((data) => {
          console.log(data);
          this.makeToast("Hecho", "exito al crear", "success");
          this.$router.push("/nivelmaterial");
        });
    },
    nuevaasignacion() {
      let formDataNivel = new FormData();
      formDataNivel.append("material_id", this.$route.params.id);
      formDataNivel.append(
        "educational_level_id",
        this.formData.educational_level_id
      );
      axios
        .post("/material__educational_levels", formDataNivel)
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
        .catch((e) => {
          console.log(e);
          this.makeToast("Error", "Error al guardar", "error");
        });
      this.$router.push("/dashboard");
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
  width: 80%;
  height: 100vh;
}
</style>
