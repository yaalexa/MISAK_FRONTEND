<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <h1>Reporte de Visualizacion del material</h1>
        <br />
        <label for="datepicker-sm">Arias:</label>
        <b-form-select
          id="example-locales"
          v-model="locale"
          :options="locales"
          class="mb-2"
        ></b-form-select>
        <b-button variant="outline-primary">Busar</b-button>
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
          <button @click="DownloadreportVI()" class="btn btn-success">
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
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  name: "Visualizacion",
  data() {
    return {
      locales: [
        { text: "ingles" },
        { text: "Español" },
        { text: "matematicas" },
      ],
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
    //  Footer
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
        .get("http://127.0.0.1:8000/api/Reportes_Visualizacion")
        .then((response) => {
          this.Reporte = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Reporte = [];
        });
    },
    DownloadreportVI() {
      axios({
        url: `http://127.0.0.1:8000/api/Report_ViPDF`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        this.descargara = response.data;
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "file.pdf");
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
