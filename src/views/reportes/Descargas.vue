<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <h1>Reporte de Descargas</h1>
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
        <button @click="DownloadreportDE()" class="btn btn-success">
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
      datos: [],
      locales: [
        { text: "ingles" },
        { text: "Español" },
        { text: "matematicas" },
      ],
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
        .get("http://127.0.0.1:8000/api/ReportsDes")
        .then((response) => {
          this.Reportes_Descargas = response.data;
          this.datos = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Reportes_Descargas = [];
        });
    },
    DownloadreportDE() {
      axios({
        url: `http://127.0.0.1:8000/api/Report_DesPDF`,
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
.cara2 {
  width: 80%;
  height: 100vh;
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
</style>