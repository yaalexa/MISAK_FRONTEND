<template>
  <div class="pantallaareas">
    <div class="cara1areas">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2areas">
      <section>
        <div class="contenedortablaareas">
          <h1>Areas</h1>
          <div class="form-group left row">
            <div class="control-label col-sm-5" style="text-align: left">
              <b-button
                variant="warning"
                id="nuevo"
                v-b-modal="'modal-1'"
                class="btn btn-warning"
                >Nuevo
                <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon
              ></b-button>
              <b-tooltip target="nuevo" triggers="hover">
                <b>NUEVA ÁREA</b>
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
            :items="Areas"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(Acciones)="row">
              <b-button
                variant="warning"
                v-b-modal="'editarareas'"
                id="edit"
                class="btn btn-warning"
                @click="sendInfo(row.item.id, row.item.name)"
                ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                <b-icon icon="pencil" aria-hidden="true"></b-icon
              ></b-button>
              <b-tooltip target="edit" triggers="hover">
                <b>EDITAR ÁREA</b>
              </b-tooltip>
              <b-button
                variant="primary"
                id="elimi"
                @click="borrarAreas(row.item.id)"
                class="btn btn-secondary"
                ><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                  icon="trash-fill"
                  aria-hidden="true"
                ></b-icon
                ><b-tooltip target="elimi" triggers="hover">
                  <b>ELIMINAR ÁREA</b>
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
    <!-- modal para crear-->
    <div>
      <b-modal id="modal-1" v-model="showModal" title="Editar">
        <template #modal-header>
          <h5>CREAR AREAS</h5>
        </template>

        <form @submit.prevent="handleOk">
          <div class="d-block text-center">
            <b-form-group
              label="Nombre"
              label-for="name-input"
              invalid-feedback="Nombre obligatorio"
              :state="nameState"
            >
              <input
                type="text"
                id="client"
                name="client"
                v-model="form.client"
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
      <b-modal id="editarareas" v-model="editarareas" title="Editar">
        <template #modal-header>
          <h5>EDITAR AREA</h5>
        </template>

        <form @submit.prevent="editararea">
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
                v-model="selectedUsernom"
                required minlength="4"
                  maxlength="20"
                  size="20"
              />
            </b-form-group>
          </div>
          <div class="botonmodal">
            <button variant="primary" type="submit" class="btn btn-warning">
              Guardar
            </button>
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
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "MostrarAreas",
  data() {
    return {
      form: {
        client: null,
      },
      selectedUserid: null,
      selectedUsernom: null,
      nombreed: null,
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
  components: {
    Header,
    //  Footer
  },
  computed: {
    rows() {
      return this.Areas.length;
    },
  },
  mounted() {
    this.mostrarAreas();
  },
  methods: {
    editararea() {
      axios
        .put(
          `/areas/${this.selectedUserid}`,
          {
            name: this.selectedUsernom,
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
          this.mostrarAreas();;
        });
    },
    sendInfo(id, nom) {
      return (this.selectedUsernom = nom), (this.selectedUserid = id);
    },
    handleOk() {
      this.axios
        .post(
          "/areas",
          { name: this.form.client },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(sessionStorage.getItem("user")),
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.format = response.data;
          console.log("formulario: ", this.format.mensaje);
          var icono = "success";
          if (this.format.res=false ) {
            icono = "error";
          }
          Swal.fire({
            title: this.format.mensaje,
            icon: icono,
            confirmButtonColor: "#ffc107",
            iconColor: "#ffc107",
          });
          this.mostrarAreas();
        });
    },
    async mostrarAreas() {
      await this.axios
        .get("/areas", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.Areas = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Areas = [];
        });
    },
    borrarAreas(id) {
      Swal.fire({
        title: "Está seguro?",
        text: "El área se eliminará permanentemene!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffc107",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminalo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .delete(`/areas/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(sessionStorage.getItem("user")),
              },
            })
            .then((response) => {
              console.log(response);
              this.mostrarAreas();
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            icon: "success",
            confirmButtonColor: "#ffc107",
            title: "Eliminado!",
            text: "El área ha sido eliminada",
            text: "Exitosamente",
            iconColor:"#ffc107"
          });
        }
      });
    },
  },
};
</script>

<style>
.botonmodal {
  margin: 3%;
  text-align: center;
}
.modal-header {
  background-color: #16223f;
  border-bottom: 1px solid #eeeeee;
  font-size: 30px;
  color: white;
  justify-content: center;
}
body {
  margin: 0%;
}
.pantallaareas {
  display: flex;
}
.cara1 {
  width: 20%;
}
.cara2 {
  width: 80%;
  height: 100vh;
  overflow: auto;
}
.cara1areas {
  position: relative;
  width: 20%;
  min-width: auto;
  overflow: hidden;
  height: min-content;
}
.cara2areas {
  overflow: auto;
  height: 100vh;
  width: 80%;
  max-width: auto;
}
.table thead {
  background-color: #16223f;
  text-align: center;
  font-size: 14px;
  background-image: url("@/assets/fondo.png");
  color: white;
}
.contenedortablaareas {
  margin-top: 3%;
  margin-left: 10%;
  text-align: center;
  width: 70%;
}
</style>