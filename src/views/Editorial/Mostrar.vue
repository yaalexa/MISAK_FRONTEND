<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <div class="contenedortabla">
          <div class="contenedortablaareas">
            <h1>EDITORIAL</h1>
            <div class="form-group left row">
              <div class="control-label col-sm-5" style="text-align: left">
                <b-button
                  id="nuevo"
                  variant="warning"
                  v-b-modal="'creareditorial'"
                  class="btn btn-warning"
                >
                  Nuevo
                  <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
                </b-button>
                <b-tooltip target="nuevo" triggers="hover">
                  <b>CREAR NUEVO EDITORIAL</b>
                </b-tooltip>
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
              :items="editorial"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              class="table"
            >
              <template #cell(Acciones)="row">
                <b-button
                  variant="warning"
                  id="edita"
                  v-b-modal="'editar_editorial'"
                  class="btn btn-warning"
                  @click="sendInfoEditorial(row.item.id, row.item.name)"
                  ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                  <b-icon icon="pencil" aria-hidden="true"></b-icon>
                </b-button>
                <b-tooltip target="edita" triggers="hover">
                  <b>EDITAR EDITORIAL</b>
                </b-tooltip>
                <b-button
                  variant="primary"
                  id="elimi"
                  class="btn btn-secondary"
                  @click="borrarEditorial(row.item.id)"
                >
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                  <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                </b-button>
                <b-tooltip target="elimi" triggers="hover">
                  <b>ELIMINAR EDITORIAL</b>
                </b-tooltip>
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
        </div>
      </section>
    </div>
    <div>
      <b-modal id="creareditorial" v-model="creareditorial" title="Editar">
        <template #modal-header>
          <h5>CREAR EDITORIAL</h5>
        </template>
        <form @submit.prevent="crearEd">
          <div class="d-block text-center">
            <b-form-group
              label="Nombre"
              label-for="name-input"
              invalid-feedback="Nombre obligatorio"
              :state="nameState"
            >
              <input
                type="text"
                id="nom_editorial"
                name="nom_editorial"
                v-model="form.nom_editorial"
                required minlength="4"
                  maxlength="20"
                  size="20"
              />
            </b-form-group>
          </div>
          <div class="botonmodal">
            <button type="submit" class="btn btn-warning">Guardar</button>
          </div>
        </form>
        <template #modal-footer="{ close }">
          <b-button
            variant="primary"
            class="btn btn-secondary"
            @click="close()"
          >
            Cerrar
          </b-button>
        </template>
      </b-modal>
    </div>
    <!-- modal para editar-->
    <div>
      <b-modal id="editar_editorial" v-model="editar_editorial" title="Editar">
        <template #modal-header>
          <h5>EDITAR EDITORIAL</h5>
        </template>
        <form @submit.prevent="editarEdit">
          <div class="d-block text-center">
            <b-form-group
              label="Nombre"
              label-for="name-input"
              invalid-feedback="Nombre obligatorio"
              :state="nameState"
            >
              <input
                type="text"
                id="nombreed"
                name="nombreed"
                v-model="selectedEdnom"
                required minlength="4"
                  maxlength="20"
                  size="20"
              />
            </b-form-group>
          </div>
          <div class="botonmodal">
            <button type="submit" class="btn btn-warning">Guardar</button>
          </div>
        </form>
        <template #modal-footer="{ close }">
          <b-button
            variant="primary"
            class="btn btn-secondary"
            @click="close()"
          >
            Cerrar
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "MostrarEditorial",
  data() {
    return {
      form: {
        nom_editorial: null,
      },
      selectedEdid: null,
      selectedEdnom: null,
      nombreed: null,
      filter: null,
      perPage: 7, //numero de filas que va a tener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
      editorial: [],
      fields: [
        { key: "id", label: "#" },
        { key: "name", label: "Nombre" },
        "Acciones",
      ],
    };
  },
  components: {
    Header,
  },
  computed: {
    rows() {
      return this.editorial.length;
    },
  },
  mounted() {
    this.mostrarEditorial();
  },
  methods: {
    async editarEdit() {
      axios
        .put(
          `/editorials/${this.selectedEdid}`,
          {
            name: this.selectedEdnom,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(sessionStorage.getItem("user")),
            },
          }
        )
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
          this.mostrarEditorial();
        });
    },
    sendInfoEditorial(id, nom) {
      return (this.selectedEdnom = nom), (this.selectedEdid = id);
    },
    crearEd() {
      this.axios
        .post(
          "/editorials",
          {
            name: this.form.nom_editorial,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(sessionStorage.getItem("user")),
            },
          }
        )
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
          this.mostrarEditorial();
        });
    },
    async mostrarEditorial() {
      await this.axios
        .get("/editorials", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.editorial = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.editorial = [];
        });
    },
    borrarEditorial(id) {
      Swal.fire({
        title: "Está seguro?",
        text: "¡La Editorial Se Eliminará Permanentemene!",
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
            text: "El Tipo de Material ha sido Eliminado",
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
  text-align: center;
}
.table thead {
  background-color: #16223f;
  text-align: center;
  font-size: 14px;

  color: white;
}
.contenedortabla {
  width: 90%;
  text-align: center;
  margin-left: 10%;
}
</style>