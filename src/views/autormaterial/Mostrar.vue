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
          <h1>ASIGNACION AUTOR</h1>
          <div class="form-group left row">
            <label for="" class="control-label"
              >NOMBRE MATERIAL: {{ this.nombrematerial }}</label
            >
            <br />
            <div class="control-label col-sm-5" style="text-align: left">
              <a type="button" id="asignar" @click="asigautor()" class="btn btn-warning">
                <b-icon icon="plus-circle-fill" aria-hidden="true"
                  >Asignar Autor</b-icon
                ><b-tooltip target="asignar" triggers="hover">
                  <b>ASIGNAR AUTOR</b>
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
            responsive="sm"
            :filter="filter"
            id="my-table"
            :items="Author_material"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(Acciones)="row">
              <a
              id="elimi"

                type="button"
                @click="borrarautorasignado(row.item.id)"
                class="btn btn-secondary"
              >
                <font-awesome-icon icon="fa-solid fa-trash-can" />
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>

                <b-tooltip target="elimi" triggers="hover">
                  <b>ELIMINAR ASIGNACION AUTOR</b>
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
          >
          </b-pagination>
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
  name: "autormaterial",
  data() {
    return {
      Author_material: null,
      Autores: null,
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
      return this.Author_material.length;
    },
  },
  components: {
    Header,
  },
  mounted() {
    this.autoresasignados();
  },
  methods: {
    autoresasignados() {
      this.nombrematerial = this.$route.params.name;
      let direccion = `/author_materials/${this.$route.params.id}`;
      axios.get(direccion).then((result) => {
        this.Author_material = result.data;
      });
    },
    asigautor() {
      this.$router.push(`/AsignarAutores/${this.$route.params.id}`);
    },
    borrarautorasignado(id) {
      Swal.fire({
        title: "Está seguro?",
        text: "¡Autor Se Eliminará Permanentemene!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffc107",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Eliminalo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .delete(`/author_materials/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(sessionStorage.getItem("user")),
              },
            })
            .then((response) => {
              console.log(response);

              this.autoresasignados();
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            title: "Eliminado!",
            text: "Autor ha sido Eliminado",
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