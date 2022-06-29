<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2reporte">
      <section>
        <h1>Reporte de Visualizacion del material</h1>
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
        <LineChartGenerator />
        <div class="table-responsive">
          <b-table
            :filter="filter"
            id="my-table"
            :items="Reporte"
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
        </div>
        <div>
          <h2>Seleciona la fecha que se quiere descargar el reporte</h2>
          <br>
          <input type="date" name="fecha_inicial" v-model="fechai" >
          <input type="date" name="fecha_final" v-model="fechaf">
          <button @click="DownloadreportVI(fechai,fechaf)" class="btn btn-success">
            Descargar Reporte
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LineChartGenerator from "@/components/charts/Line.vue";
import axios from "axios";
export default {
  name: "Visualizacion",
  data() {
    return {
      filter:null,
      fechai:"",
      fechaf:"",
      Reporte: [],
      paginate: ["reporte_docentefiltrado"],
      fields: [
        { key: "name", label: "nombre" },
        { key: "isbn", label: "isbn" },
        { key: "year", label: "año" },
        { key: "num_pages", label: "numero paginas" },
        { key: "area", label: "areas" },
        { key: "conteo", label: "conteo" },
      ],
      perPage: 10, //numero de filas que va a tener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
    };
  },
  components: {
    Header,
    LineChartGenerator,
  },
  computed: {
    rows() {
      return this.Reporte.length;
    },
  },
  mounted() {
    this.MostrarReporteV();
  },
  methods: {
    async MostrarReporteV() {
      await this.axios
        .get("/Reportsvisua")
        .then((response) => {
          this.Reporte = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Reporte = [];
        });
    },
    DownloadreportVI(fechai,fechaf) {
      axios({
        url: `/Report_ViPDF/${fechai}/${fechaf}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        this.descargara = response.data;
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Reporte_Visualizado.pdf");
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
  overflow: hidden;
}
.cara1 {
  height: 100vh;
  width: 20%;
}
.cara2 {
  width: 95%;
  height: 100vh;
  overflow: auto;
}
.btn-success {
  color: black;
  background-color: #ffca2c;
  border-color: #ffc720;
}
thead {
  background: #16223f;
  color: white;
}
</style>