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
          <h1>NIVEL EDUCATIVO</h1>
          <div class="form-group left row">
            <div class="control-label col-sm-5" style="text-align: left">
              <b-button
                variant="warning"
                id="nuevo"
                v-b-modal="'CrearNivelEducativo'"
                class="btn btn-warning"
                >Nuevo
                <b-icon icon="plus-circle-fill" aria-hidden="true"> </b-icon
              ></b-button>
              <b-tooltip target="nuevo" triggers="hover">
                <b>NUEVO NIVEL EDUCATIVO</b>
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
            :items="NivelEducativo"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(Acciones)="row">
              <b-button
                variant="warning"
                id="edit"
                v-b-modal="'EditarNivelEducativo'"
                class="btn btn-warning"
                @click="sendInfoEditorial(row.item.id, row.item.name)"
                ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                <b-icon icon="pencil" aria-hidden="true"></b-icon
              ></b-button>
              <b-tooltip target="edit" triggers="hover">
                <b>EDITAR NIVEL EDUCATIVO</b>
              </b-tooltip>
              <b-button
                variant="primary"
                id="borrar"
                @click="borrarNivelEducativo(row.item.id)"
                class="btn btn-secondary"
                ><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                  icon="trash-fill"
                  aria-hidden="true"
                ></b-icon
                ><b-tooltip target="borrar" triggers="hover">
                  <b>ELIMINAR NIVEL EDUCATIVO</b>
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
        </div>
      </section>
    </div>
    <!-- MODAL-->
    <div>
      <b-modal
        id="CrearNivelEducativo"
        v-model="CrearNivelEducativo"
        title="Editar"
      >
        <template #modal-header>
          <h5>CREAR NIVEL EDUCATIVO</h5>
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
                  maxlength="30"
                  size="30"
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
      <b-modal
        id="EditarNivelEducativo"
        v-model="EditarNivelEducativo"
        title="Editar"
      >
        <template #modal-header>
          <h5>EDITAR NIVEL EDUCATIVO</h5>
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
                  maxlength="30"
                  size="30"
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
  name: "MostrarNivelEducativo",
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
      fields: [
        { key: "id", label: "#" },
        { key: "name", label: "Nombre" },
        "Acciones",
      ],
      NivelEducativo: [],
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.mostrarNivelEducativo();
  },
  computed: {
    rows() {
      return this.NivelEducativo.length;
    },
  },
  methods: {
    async editarEdit() {
      axios
        .put(
          `/educational_levels/${this.selectedEdid}`,
          { name: this.selectedEdnom },
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
          this.mostrarNivelEducativo();
        });
    },
    sendInfoEditorial(id, nom) {
      return (this.selectedEdnom = nom), (this.selectedEdid = id);
    },
    crearEd() {
      this.axios
        .post(
          "/educational_levels",
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
          this.mostrarNivelEducativo();
        });
    },
    async mostrarNivelEducativo() {
      await this.axios
        .get("/educational_levels", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.NivelEducativo = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.NivelEducativo = [];
        });
    },
    borrarNivelEducativo(id) {
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
            .delete(`/educational_levels/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(sessionStorage.getItem("user")),
              },
            })
            .then((response) => {
              console.log(response);

              this.mostrarNivelEducativo();
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            title: "Eliminado!",
            text: "Nivel Educativo ha sido Eliminado",
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