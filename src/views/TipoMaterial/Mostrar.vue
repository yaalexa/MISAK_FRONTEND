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
          <h1>TIPO DE MATERIAL</h1>
          <div class="form-group left row">
            <div class="control-label col-sm-5" style="text-align: left">
              <b-button
                id="nuevo"
                variant="warning"
                v-b-modal="'creareTipoMaterial'"
                class="btn btn-warning"
                >Nuevo
                <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon
              ></b-button>
              <b-tooltip target="nuevo" triggers="hover">
                <b>NUEVO TIPO DE MATERIAL</b>
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
            :items="TipoMaterial"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(Acciones)="row">
              <b-button
                variant="warning"
                id="edit"
                v-b-modal="'EditarTipoMaterial'"
                class="btn btn-warning"
                @click="sendInfoEditorial(row.item.id, row.item.name)"
                ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                <b-icon icon="pencil" aria-hidden="true"></b-icon
              ></b-button>
              <b-tooltip target="edit" triggers="hover">
                <b>EDITAR TIPO DE MATERIAL</b>
              </b-tooltip>
              <b-button
                variant="primary"
                id="eliminar"
                @click="borrar(row.item.id)"
                class="btn btn-secondary"
                ><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                  icon="trash-fill"
                  aria-hidden="true"
                ></b-icon
                ><b-tooltip target="eliminar" triggers="hover">
                  <b>ELIMINAR TIPO DE MATERIAL</b>
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
    <!-- MODAL -->
    <div>
      <b-modal
        id="creareTipoMaterial"
        v-model="creareTipoMaterial"
        title="Editar"
      >
        <template #modal-header>
          <h5>CREAR TIPO MATERIAL</h5>
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
        id="EditarTipoMaterial"
        v-model="EditarTipoMaterial"
        title="Editar"
      >
        <template #modal-header>
          <h5>EDITAR TIPO MATERIAL</h5>
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
  name: "MostrarTipoMaterial",
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
      TipoMaterial: null,
    };
  },
  components: {
    Header,
  },
  computed: {
    rows() {
      return this.TipoMaterial.length;
    },
  },
  mounted() {
    this.mostarTipoMaterial();
  },
  methods: {
    async editarEdit() {
      axios
        .put(
          `/type_materials/${this.selectedEdid}`,
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
          this.form= response.data
          console.log("formulario: ", this.form.mensaje);
          var icono = "success";
          var colorb = "#ffc107";
          var colori = "#ffc107";
          if (this.form.res == true){
          }
          else{
            icono = "error";
            colorb = "#c42a2a";
            colori = "#c42a2a";
          }
          Swal.fire({title:this.form.mensaje,
                    icon: icono,
                    confirmButtonColor: colorb,
                    iconColor:colori});
          this.mostarTipoMaterial();
        });
    },
    sendInfoEditorial(id, nom) {
      return (this.selectedEdnom = nom), (this.selectedEdid = id);
    },
    crearEd() {
      this.axios
        .post(
          "/type_materials",
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
          this.form= response.data
          console.log("formulario: ", this.form.mensaje);
          var icono = "success";
          var colorb = "#ffc107";
          var colori = "#ffc107";
          if (this.form.res== true){
          }
          else{
            icono = "error";
            colorb = "#c42a2a";
            colori = "#c42a2a";
          }
          Swal.fire({title:this.form.mensaje,
                    icon: icono,
                    confirmButtonColor: colorb,
                    iconColor:colori});
          this.mostarTipoMaterial();
        });
    },

    borrar(id) {
      Swal.fire({
        title: "Está seguro?",
        text: "¡El Tipo de Material se eliminará permanentemene!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ffc107",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Eliminalo!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios
            .delete(`/type_materials/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " + JSON.parse(sessionStorage.getItem("user")),
              },
            })
            .then((response) => {
              console.log(response);

              this.mostarTipoMaterial();
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
    async mostarTipoMaterial() {
      await this.axios
        .get("/type_materials", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(sessionStorage.getItem("user")),
          },
        })
        .then((response) => {
          this.TipoMaterial = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.TipoMaterial = [];
        });
    },
  },
};
</script>
<style  scoped>
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