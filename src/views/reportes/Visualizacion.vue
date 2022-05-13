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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">material</th>
              <th scope="col">Imagen</th>
              <th scope="col">ISBN</th>
              <th scope="col">Fecha publicación</th>
              <th scope="col">N Paginas</th>
              <th scope="col">Area</th>
              <th scope="col">Educacion</th>
              <th scope="col">Conteo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Reporte in Reporte" :key="Reporte.id">
              <td>{{ Reporte.name }}</td>
              <td>{{ Reporte.img }}</td>
              <td>{{ Reporte.isbn }}</td>
              <td>{{ Reporte.year }}</td>
              <td>{{ Reporte.num_pages }}</td>
              <td>{{ Reporte.area }}</td>
              <td>{{ Reporte.nivel }}</td>
            </tr>
          </tbody>
        </table>
        <router-link
          :to="{ name: 'CrearNivelEducativo' }"
          class="btn btn-success"
          >Descargar Reporte</router-link
        >
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
        .get("http://127.0.0.1:8000/api/Reportes_Visualizacion")
        .then((response) => {
          this.Reporte = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Reporte = [];
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
</style>
