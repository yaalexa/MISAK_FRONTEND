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
        <label for="start">Fecha de inicio:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2050-1-1"
        />
        <label for="start">Fecha Final:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
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
        <Bar />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">material</th>
              <th scope="col">Imagen</th>
              <th scope="col">ISBN</th>
              <th scope="col">Fecha publicación</th>
              <th scope="col">N Paginas</th>
              <th scope="col">Area</th>
              <th scope="col">Conteo</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="Reportes_Descargas in Reportes_Descargas"
              :key="Reportes_Descargas.id"
            >
              <td>{{ Reportes_Descargas.name }}</td>
              <td>
                <img
                  :src="`http://127.0.0.1:8000/storage/${Reportes_Descargas.img}`"
                  accept="application/img"
                />
              </td>
              <td>{{ Reportes_Descargas.isbn }}</td>
              <td>{{ Reportes_Descargas.year }}</td>
              <td>{{ Reportes_Descargas.num_pages }}</td>
              <td>{{ Reportes_Descargas.area }}</td>
              <td>{{ Reportes_Descargas.conteo }}</td>
            </tr>
          </tbody>
        </table>
        <button class="btn" >Descargar reporte</button>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Bar from "@/components/charts/Bar.vue";
import Footer from "@/components/Footer.vue";
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
    };
  },
  components: {
    Header,
    //  Footer
    Bar,
  },
  mounted() {
    this.MostrarReportes_Descargas();
  },
  methods: {
    async MostrarReportes_Descargas() {
      await this.axios
        .get("http://127.0.0.1:8000/api/Reportes_Descargas")
        .then((response) => {
          this.Reportes_Descargas = response.data;
          this.datos = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Reportes_Descargas = [];
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
</style>
