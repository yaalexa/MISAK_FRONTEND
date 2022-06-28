<template>
  <div id="contenedor">
    <div id="menu" class="shadow-lg bg-white rounded">
      <Menu1 />
    </div>
    <div id="contenido">
      <h1>HISTORIAL DE CONSULTAS</h1>
      <br />
      <div class="form-group left row">
        <div class="control-label col-sm-7" style="text-align: left">
          <div class="input-group" style="text-align: right">
            <b-form-input v-model="filter" type="search" placeholder="Buscar">
            </b-form-input>
          </div>
          <br />
        </div>
      </div>
      <b-table
        striped
        head-variant="light"
        fixed
        :sticky-header="stickyHeader"
        :no-border-collapse="noCollapse"
        responsive="sm"
        :filter="filter"
        id="tableproceso"
        :items="proceso"
        :fields="fieldsMy"
        :per-page="perPage"
        :current-page="currentPage"
      >
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>
<script>
import Menu1 from "@/components/Menu1.vue";
import axios from "axios";
export default {
  name: "Proceso",
  data() {
    return {
      perPage: 7,
      currentPage: 1,
      proceso: [],
      filter: null,
      stickyHeader: false,
      noCollapse: false,
      fieldsMy: [
        { key: "MATERIAL", label: "Material", stickyColumn: true },
        { key: "EDITORIAL", label: "Editorial", stickyColumn: true },
        { key: "AUTOR", label: "Autor", stickyColumn: true },
        { key: "PROCESO", label: "Proceso", stickyColumn: true },
        { key: "FECHA", label: "Fecha", stickyColumn: true },
      ],
      pagina: 1,
      list: null,
      search: "",
      inputSearch: "",
    };
  },
  components: {
    Menu1,
  },
  computed: {
    rows() {
      return this.proceso.length;
    },
  },
  mounted() {
    var usrid = JSON.parse(sessionStorage.getItem("userid"));
    this.mostrarProcesoUser(usrid);
  },
  methods: {
    async mostrarProcesoUser(id) {
      await this.axios
        .get(`/process__users/${id}`)
        .then((response) => {
          this.proceso = response.data;
          console.log(this.proceso);
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
#cabecera {
  color: #ff9;
  height: 80px;
}
#contenedor {
  width: 100%;
  overflow: hidden;
  height: 100vh;
}
#contenido {
  float: left;
  height: 75vh;
  padding: 10px;
  width: 100%;
  padding: 1%;
  margin-left: 2%;
  margin-right: 2%;
  overflow: auto;
  margin-top: 3%;
}
.table-responsive-sm {
  width: 95%;
  overflow-x: auto;
}
#menu {
  width: 100%;
  overflow: hidden;
}
</style>