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
          <h1>ASIGNAR NIVEL DEL MATERIAL</h1>
          <div class="form-group left row">
            <label for="" class="control-label"
              >NOMBRE NIVEL MATERIAL: {{ this.nombrematerial }}</label
            >
            <br />
            <div class="control-label col-sm-5" style="text-align: left">
              <a
                id="nivel"
                type="button"
                @click="asignivel()"
                class="btn btn-warning"
              >
                <b-icon icon="plus-circle-fill" aria-hidden="true"
                  >ASIGNAR NIVEL EDUCATIVO</b-icon
                >
                <b-tooltip target="nivel" triggers="hover">
                    <b>ASIGNAR NIVEL EDUCATIVO</b>
                  </b-tooltip>
              </a>
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
            :items="Material_educational"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(Acciones)="row">
              <a
              id="eli"
                type="button"
                @click="borrarnivelasignado(row.item.id)"
                class="btn btn-secondary"
                ><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                  icon="trash-fill"
                  aria-hidden="true"
                ></b-icon
              ><b-tooltip target="eli" triggers="hover">
                      <b>ELIMINAR ASIGNACIÓN NIVEL EDUCATIVO</b>
                    </b-tooltip>
              </a>
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
import Swal from "sweetalert2";
import axios from "axios";
export default {
  name: "nivelmaterial",
  data() {
    return {
      Material_educational: null,
      Nivel: null,
      nombrematerial: null,
      filter: null,
      perPage: 7, //numero de filas que va  atener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
      Areas: [],
      fields: [
        { key: "id", label: "#" },
        { key: "name", label: "Nombre" },
        "Acciones",
      ],
    };
  },
  computed: {
    rows() {
      return this.Material_educational.length;
    },
  },
  components: {
    Header,
    //  Footer
  },
  mounted() {
    this.nivelasignado();
  },
  methods: {
    nivelasignado() {
      this.nombrematerial = this.$route.params.name;
      let direccion = `/material__educational_levels/${this.$route.params.id}`;
      axios.get(direccion).then((result) => {
        this.Material_educational = result.data;
      });
    },
    asignivel() {
      this.$router.push(`/AsignarMaterial/${this.$route.params.id}`);
    },
    borrarnivelasignado(id) {
      Swal.fire({
        title: "Está seguro?",
        text: "¡Nivel Educativo Se Eliminará Permanentemene!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffc107",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Eliminalo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .delete(`/material__educational_levels/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(sessionStorage.getItem("user")),
              },
            })
            .then((response) => {
              console.log(response);

              this.nivelasignado();
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            title: "Eliminado!",
            text: "Nivel Educativo  ha sido Eliminado",
            icon: "success",
            confirmButtonColor: "#ffc107",
            iconColor: "#ffc107",
          });
        }
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
  width: 80%;
  height: 100vh;
}
</style>