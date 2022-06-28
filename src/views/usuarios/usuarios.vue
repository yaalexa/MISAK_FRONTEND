<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section class="contenedorautor">
        <h1>USUARIOS</h1>
        <div class="form-group left row">
          <div class="control-label col-sm-5" style="text-align: left">
            <b-button id="nuevo" v-on:click="unuevo()" class="btn btn-warning"
              >Nuevo <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon
            ></b-button>
            <b-tooltip target="nuevo" triggers="hover">
                    <b>NUEVA USUARIO</b> 
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
        <div class="">
          <b-table
            :filter="filter"
            id="my-table"
            :items="usuarios"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
          >
            <template #cell(Acciones)="row">
              <router-link
              id="edit"
                :to="{
                  name: '/actualizarusuarios',
                  params: { id: row.item.id },
                }"
                class="btn btn-warning"
                ><font-awesome-icon icon="fa-solid fa-pen-to-square" />
                <b-icon icon="pencil" aria-hidden="true"></b-icon
              ></router-link>
              <b-tooltip target="edit" triggers="hover">
                    <b>EDITAR USUARIO</b> 
              </b-tooltip>
              <a
                type="button"
                id="eliminar"
                @click="borrarAutores(row.item.id)"
                class="btn btn-secondary"
                ><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon
                  icon="trash-fill"
                  aria-hidden="true"
                ></b-icon
              >
              <b-tooltip target="eliminar" triggers="hover">
                    <b>ELIMINAR USUARIO</b> 
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
//importamos axios
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "usuarios",
  components: {
    Header,
  },
  created() {},
  data: function () {
    return {
      usuarios: null,
      fields: [
        { key: "id", label: "#" },
        { key: "name", label: "Usuario" },
        { key: "full_name", label: "Nombre Completo" },
        { key: "document_type", label: "Tipo de Documento" },
        { key: "document_number", label: "Numero de Documento" },
        { key: "certificate_misak", label: "Certificado Misak" },
        { key: "email", label: "E-mail" },
        { key: "rol_id", label: "Rol" },
        "Acciones",
      ],
      Autores: [],
      filter: null,
      perPage: 7, //numero de filas que va  atener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
      // loading: true,
      // errored:false
    };
  },
  computed: {
    rows() {
      return this.usuarios.length;
    },
  },
  mounted: function () {
    let direccion = "/users";
    axios.get(direccion).then((result) => {
      this.usuarios = result.data;
    });
  },
  methods: {
    obtenerUsuarios() {
      // alert('estoy en el metodo');
      axios
        .get("/users")
        .then((respuesta) => {
          console.log(respuesta.data);
          this.usuarios = respuesta.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    borrarUsuario(id) {
      if (confirm("¿Confirma eliminar el registro?")) {
        this.axios
          .delete(`/users'/${id}`)
          .then((response) => {
            console.log(response);
            this.$router.push("/usuarios");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    unuevo() {
      this.$router.push("/unuevo");
    },
    actualizar(id) {
      this.$router.push("/actualizarusuarios/" + id);
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
  overflow: hidden;
}
.cara1 {
  height: 100vh;
  width: 20%;
}
.cara2 {
  width: 80%;
  height: 100vh;
  overflow: auto;
}
.izquierda {
  text-align: left;
  width: 80%;
}
</style>