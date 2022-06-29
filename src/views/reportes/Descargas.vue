<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2reporte">
      <section>
        <h1>Reporte de Descargas</h1>
        <br />
        <div class="busqueda">
        <b-input-group size="sm"  >
         <label for="datepicker-sm">Buscar:</label>
        <b-form-input 
          id="example-locales"
          v-model="filter"
          type="search"
          class="mb-2"></b-form-input>
        </b-input-group>
      </div>
        <br />
        <Bar />
        <b-table
        :filter="filter"
          id="my-table"
          :items="Reportes_Descargas"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          class="table"
          ></b-table>
        <table>
          <b-pagination
            align="and"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </table>
        <h2>Seleciona la fecha que se quiere descargar el reporte</h2>
          <br>
          <input type="date" name="fecha_inicial" v-model="fechai" >
          <input type="date" name="fecha_final" v-model="fechaf">
          <button @click="DownloadreportDE(fechai,fechaf)" class="btn btn-success">
          Descargar reporte
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Bar from "@/components/charts/Bar.vue";
import axios from "axios";
export default {
  name: "Descargas",
  data() {
    return {
      filter:null,
      fechai:"",
      fechaf:"",
      datos: [],
      Reportes_Descargas: [],
      fields: [
        {key:"name", label:"nombre"},
        {key:"isbn", label:"isbn"},
        {key:"year", label:"año"},
        {key:"num_pages", label:"numero paginas"},
        {key:"area", label:"areas"},
        {key:"conteo", label:"conteo"},
        ],
      perPage: 10, //numero de filas que va a tener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
      descargas: []
    };
  },
  components: {
    Header,
    Bar,
  },
  computed: {
    rows() {
      return this.Reportes_Descargas.length;
    },
  },  
  mounted() {
    this.MostrarReportes_Descargas();
  },
  methods: {
    async MostrarReportes_Descargas() {
      await this.axios
        .get("/ReportsDes")
        .then((response) => {
          this.Reportes_Descargas = response.data;
          this.datos = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Reportes_Descargas = [];
        });
    },
    DownloadreportDE(fechai,fechaf) {
      axios({
        url: `/Report_DesPDF/${fechai}/${fechaf}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        this.descargara = response.data;
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Reporte_Descargado.pdf");
        document.body.appendChild(fileLink);
        fileLink.click();
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
.cara2reporte {
  width: 80%;
  height: 100vh;
  overflow: auto;
  text-align: center;
}
.btn-success {
  background-color: #ffca2c;
  border-color: #ffc720;
  color: black;
}
thead {
  background: #16223f;
  color: white;
}
.busqueda {
  width: 40%;
  display: flex;
  text-align: center;
}
</style>