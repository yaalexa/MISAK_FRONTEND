<template>
  <div class="pantallaroles">
    <div class="cara1roles">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2roles">
      <section>
        <div class="contenedortablaroles">
          <h1>Roles</h1>
          <div class="form-group left row">
            <div class="control-label col-sm-5" style="text-align: left">
              <b-button
                variant="warning"
                id="nuevo"
                v-b-modal="'modal-1'"
                class="btn btn-warning"
                >Nuevo
                <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-tooltip target="nuevo" triggers="hover">
                <b>NUEVO ROL</b>
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
            resposnive="sm"
            :filter="filter"
            id="my-table"
            :items="Roles"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(Acciones)="row">
              <b-button
                variant="warning"
                v-b-modal="'editarroles'"
                id="edit"
                class="btn btn-warning"
                @click="sendInfo(row.item.id, row.item.name)"
                ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                <b-icon icon="pencil" aria-hidden="true"></b-icon
              ></b-button>
              <b-tooltip target="edit" triggers="hover">
                <b>EDITAR ROL</b>
              </b-tooltip>
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
          <h5>CREAR ROLES</h5>
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
                  maxlength="15"
                  size="15"
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
      <b-modal id="editarroles" v-model="editarroles" title="Editar">
        <template #modal-header>
          <h5>EDITAR ROL</h5>
        </template>

        <form @submit.prevent="editarrol">
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
                  maxlength="15"
                  size="15"
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
  name: "MostrarRol",
  data() {
    return {
      token: null,
      form: {
        client: null,
      },
      selectedUserid: null,
      selectedUsernom: null,
      nombreed: null,
      filter: null,
      perPage: 7, //numero de filas que va  atener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
      Roles: [],
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
      return this.Roles.length;
    },
  },
  mounted() {
    this.token = JSON.parse(sessionStorage.getItem("user"));
    this.mostrarRoles();
  },
  methods: {
    editarrol() {
      axios
        .put(
          `/rols/${this.selectedUserid}`,
          {
            name: this.selectedUsernom,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.token,
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
          this.mostrarRoles();
        });
    },
    sendInfo(id, nom) {
      return (this.selectedUsernom = nom), (this.selectedUserid = id);
    },
    handleOk() {
      this.axios
        .post(
          "/rols",
          { name: this.form.client },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.token,
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
          this.mostrarRoles();
        });
    },
    async mostrarRoles() {
      await this.axios
        .get("/rols", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.Roles = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Roles = [];
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
.active {
}
body {
  margin: 0%;
}
.pantallaroles {
  display: flex;
}
.cara1roles {
  height: 100vh;
  width: 20%;
  overflow: hidden;
}
.cara2roles {
  overflow: auto;
  height: 100vh;
  width: 80%;
}
.table thead {
  background-color: #16223f;
  text-align: center;
  font-size: 14px;
  background-image: url("@/assets/fondo.png");
  color: white;
}
.contenedortablaroles {
  margin-top: 3%;
  margin-left: 10%;
  text-align: center;
  width: 70%;
}
</style>