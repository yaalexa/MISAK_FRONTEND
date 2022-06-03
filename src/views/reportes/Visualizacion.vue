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
        <label for="start">Fecha de inicio:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value=""
          min="2018-01-01"
          max="2050-1-1"
        />
        <label for="start">Fecha Final:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value=""
          min="2018-01-01"
          max="2050-1-1"
        />
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
        <div class="justify-contentlg-end col-md-5 col-lg-8 mt-2">
          <paginate-links
            class="pagination justify-contend-end"
            for="Reporte"
            :limit="2"
            :hide-single-page="true"
            :show-step-links="true"
            :full-page="true"
            :classes="{
              ul: 'simple-links-container',
              li: 'simple-links-item',
              liActive: ['simple-links-item', 'active1'],
              'li.active': 'active1',
            }"
          >
          </paginate-links>
        </div>
        <div class="table-responsive">
          <paginate ref="paginator" name="Reporte" :list="Reporte" :per="10">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">material</th>
                  <th scope="col">ISBN</th>
                  <th scope="col">Fecha publicación</th>
                  <th scope="col">N Paginas</th>
                  <th scope="col">Area</th>
                  <th scope="col">Conteo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="Reporte in Reporte" :key="Reporte.id">
                  <td>{{ Reporte.name }}</td>
                  <td>{{ Reporte.isbn }}</td>
                  <td>{{ Reporte.year }}</td>
                  <td>{{ Reporte.num_pages }}</td>
                  <td>{{ Reporte.area }}</td>
                  <td>{{ Reporte.conteo }}</td>
                </tr>
              </tbody>
            </table>
          </paginate>
        </div>
        <div>
          <paginate-links
            class="pagination justify-contend-end"
            for="Reporte"
            :limit="2"
            :hide-single-page="true"
            :show-step-links="true"
            :full-page="true"
            :classes="{
              ul: 'simple-links-container',
              li: 'simple-links-item',
              liActive: ['simple-links-item', 'active1'],
              'li.active': 'active1',
            }"
          />
        </div>
        <div>
          <button @click="DownloadreportVI()" class="btn btn-success">Descargar Reporte</button>
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
    };
  },
  components: {
    Header,
    //  Footer
    LineChartGenerator,
  },
  mounted() {
    this.MostrarReporteV();
  },
  methods: {
    async MostrarReporteV() {
      await this.axios
        .get("http://127.0.0.1:8000/api/Reportsvisua")
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
        url: `http://127.0.0.1:8000/api/reporteV/`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        this.descargara = response.data;
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Reporte_Visualizacion.pdf");
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