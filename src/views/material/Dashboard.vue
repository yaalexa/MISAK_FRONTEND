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
                <button class="btn btn-warning" v-on:click="nuevo()">
                  Nuevo
                  <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
                </button>
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
                    :to="{ name: 'Editar', params: { id: row.item.id } }"
                    class="btn btn-warning"
                    ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    <b-icon icon="pencil" aria-hidden="true"></b-icon>
                  </router-link>
                  <a
                    type="button"
                    @click="borrar(row.item.id)"
                    class="btn btn-secondary"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                  </a>
                  <a
                    type="button"
                    @click="autormaterial(row.item.id, row.item.name)"
                    class="btn btn-sucess"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                      icon="person-check"
                      aria-hidden="true"
                      variant="secondary"
                    >
                    </b-icon>
                  </a>
                  <a
                    type="button"
                    @click="educationallevel(row.item.id, row.item.name)"
                    class="btn btn-sucess"
                  >
                    <b-icon icon="bar-chart-fill" flip-h flip-v></b-icon>
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
export default {
  name: "header",
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
    educationallevel(id, name) {
      this.$router.push({
        name: "nivelmaterial",
        params: { id: id, name: name },
      });
    },
    buscarmaterial(name) {
      console.log(name);
      this.axios
        .get("/buscar/" + name,{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
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
      this.$router.push("/editar:" + id,{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                });
    },
    nuevo() {
      this.$router.push("/nuevo");
    },
    borrar(id) {
      if (confirm("¿Confirma eliminar el registro?")) {
        this.axios
          .delete(`/materials/${id}`,{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                })
          .then((response) => {
            console.log(response);
            this.mostarMateriales();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    autormaterial(id, name) {
      //this.$router.push('/autormaterial/' +id);
      this.$router.push({
        name: "autormaterial",
        params: { id: id, name: name },
      });
    },
    async mostarMateriales() {
      await this.axios
        .get("/visualizacion/",{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
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