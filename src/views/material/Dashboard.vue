<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <div class="izquierda">
          <div class="col-md-12">
            <h1>MATERIAL</h1>
            <br />
            <!-- Boton nuevo -->
            <div class="form-group left row">
              <div class="control-label col-sm-5" style="text-align: left">
                <button class="btn btn-warning" id="nuevo" v-on:click="nuevo()">
                  Nuevo
                  <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
                </button>
                <b-tooltip target="nuevo" triggers="hover">
                  <b>CREAR NUEVO MATERIAL</b>
                </b-tooltip>
              </div>
              <!-- -------- -->
              <!-- Buscador -->
              <div class="control-label col-sm-7" style="text-align: left">
                <div class="input-group" style="text-align: right">
                  <b-form-input
                    v-model="filter"
                    type="search"
                    placeholder="Ingrese el nombre del libro"
                    style="width: 40px"
                  >
                  </b-form-input>
                </div>
                <br />
              </div>
              <b-table
                responsive
                :filter="filter"
                id="my-table"
                :items="material"
                :per-page="perPage"
                :current-page="currentPage"
                class="table"
                :fields="fields"
              >
                <template #cell(acciones)="row">
                  <router-link
                    id="editar"
                    :to="{ name: 'Editar', params: { id: row.item.id } }"
                    class="btn btn-warning"
                    ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    <b-icon icon="pencil" aria-hidden="true"></b-icon>
                  </router-link>
                  <b-tooltip target="editar" triggers="hover">
                    <b>EDITAR MATERIAL</b>
                  </b-tooltip>
                  <a
                    type="button"
                    id="eliminar"
                    @click="borrar(row.item.id)"
                    class="btn btn-secondary"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                    <b-tooltip target="eliminar" triggers="hover">
                      <b>ELIMINAR MATERIAL</b>
                    </b-tooltip>
                  </a>
                  <a
                    type="button"
                    id="autor"
                    @click="autormaterial(row.item.id, row.item.name)"
                    class="btn btn-sucess"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                      icon="person-check"
                      aria-hidden="true"
                      variant="secondary"
                    >
                    </b-icon>
                    <b-tooltip target="autor" triggers="hover">
                      <b>ASIGNAR AUTOR</b>
                    </b-tooltip>
                  </a>
                  <a
                    type="button"
                    id="niveled"
                    @click="educationallevel(row.item.id, row.item.name)"
                    class="btn btn-sucess"
                  >
                    <b-icon icon="bar-chart-fill" flip-h flip-v></b-icon>
                    <b-tooltip target="niveled" triggers="hover">
                      <b>ASIGNAR NIVEL EDUCATIVO</b>
                    </b-tooltip>
                  </a>
                </template>
              </b-table>
            </div>
            <!-- Paginacion -->
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            >
            </b-pagination>
          </div>
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
  name: "Dashboard",
  data() {
    return {
      perPage: 7,
      currentPage: 1,
      material: [],
      filter: null,
      fields: [
        { key: "id", label: "#" },
        { key: "NOMBRE", label: "Nombre" },
        { key: "ISBN", label: "ISBN" },
        { key: "#PAG", label: "#Pag" },
        { key: "AÑO", label: "Año" },
        { key: "TIPO MATERIAL", label: "Tipo Material" },
        { key: "EDITORIAL", label: "Editorial" },
        { key: "AREA", label: "Area" },
        "acciones",
      ],
      pagina: 1,
      list: null,
      search: "",
      inputSearch: "",
    };
  },
  components: {
    Header,
  },
  computed: {
    rows() {
      return this.material.length;
    },
  },
  mounted() {
    this.mostarMateriales();
  },
  methods: {
    educationallevel(id) {
      this.$router.push("/nivelmaterial/" + id);
    },
    buscarmaterial(name) {
      console.log(name);
      this.axios
        .get("/buscar/" + name, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.buscar = response.data.material;
          console.log(this.buscar);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editar(id) {
      this.$router.push("/editar:" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user")),
        },
      });
    },
    nuevo() {
      this.$router.push("/nuevoM");
    },
    borrar(id) {
      Swal.fire({
        title: "Está seguro?",
        text: "¡Material Se Eliminará Permanentemene!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffc107",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Eliminalo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .delete(`/materials/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(sessionStorage.getItem("user")),
              },
            })
            .then((response) => {
              console.log(response);

              this.mostarMateriales();
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            title: "Eliminado!",
            text: "Material ha sido Eliminado",
            icon: "success",
            confirmButtonColor: "#ffc107",
            iconColor: "#ffc107",
          });
        }
      });
    },
    autormaterial(id) {
      this.$router.push("/autormaterial/" + id);
    },
    async mostarMateriales() {
      await this.axios
        .get("/visualizacion/", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.material = response.data;
          console.log(this.material);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style  scoped>
body {
  margin: 0%;
  overflow: hidden;
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
  width: 80%;
  overflow: auto;
}
.izquierda {
  margin-top: 1%;
  text-align: center;
  width: 85%;
  margin-left: 10%;
  align-content: center;
  overflow: hidden;
}
.boton {
  text-align: left;
}
</style>