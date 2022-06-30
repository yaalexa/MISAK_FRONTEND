<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section class="contenedorautor">
        <h1>AUTORES</h1>

        <div class="form-group left row">
          <div class="control-label col-sm-5" style="text-align: left">
            <b-button
              id="nuvo"
              variant="warning"
              v-on:click="crear()"
              class="btn btn-warning"
              >Nuevo
              <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
            </b-button>
            <b-tooltip target="nuvo" triggers="hover">
              <b>NUEVO AUTOR</b>
            </b-tooltip>
          </div>
          <div class="control-label col-sm-7" style="text-align: left">
            <div class="input-group" style="text-align: right">
              <b-form-input
                v-model="filter"
                type="search"
                placeholder="Buscar Autores"
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
          :items="Autores"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          class="table"
        >
          <template #cell(Acciones)="row">
            <router-link
              id="edit"
              :to="{ name: 'EditarAutor', params: { id: row.item.id } }"
              class="btn btn-warning"
              ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
              <b-icon icon="pencil" aria-hidden="true"></b-icon
            ></router-link>
            <b-tooltip target="edit" triggers="hover">
              <b>EDITAR AUTOR</b>
            </b-tooltip>
            <b-button
              variant="primary"
              id="elimi"
              @click="borrarAutores(row.item.id)"
              class="btn btn-secondary"
              ><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                icon="trash-fill"
                aria-hidden="true"
              ></b-icon
              ><b-tooltip target="elimi" triggers="hover">
                <b>ELIMINAR AUTOR</b>
              </b-tooltip>
            </b-button>
          </template>
        </b-table>
        <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "MostrarAutor",
  data() {
    return {
      fields: [
        { key: "id", label: "#" },
        { key: "name", label: "Nombre" },
        { key: "phone", label: "Telefono" },
        { key: "address", label: "Direccion" },
        "Acciones",
      ],
      Autores: [],
      filter: null,
      perPage: 7, //numero de filas que va  atener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
    };
  },
  components: {
    Header,
  },
  computed: {
    rows() {
      return this.Autores.length;
    },
  },
  mounted() {
    this.mostrarAutores();
  },
  methods: {
    async mostrarAutores() {
      await this.axios
        .get("/authors", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.Autores = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Autores = [];
        });
    },
    crear() {
      this.$router.push("/CrearAutor");
    },
    borrarAutores(id) {
      Swal.fire({
        title: "Está seguro?",
        text: "¡El Autor se eliminará permanentemene!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffc107",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Eliminalo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .delete(`/authors/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(sessionStorage.getItem("user")),
              },
            })
            .then((response) => {
              console.log(response);

              this.mostrarAutores();
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            title: "Eliminado!",
            text: "El Autor ha sido Eliminado",
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
  overflow: hidden;
  height: 100vh;
}
.cara1 {
  height: 100vh;
  width: 20%;
  overflow: hidden;
}
.cara2 {
  overflow: auto;
  height: 100vh;
  width: 80%;
}
.contenedorautor {
  overflow: hidden;
  width: 80%;
}
.table {
  width: 90%;
}
</style>