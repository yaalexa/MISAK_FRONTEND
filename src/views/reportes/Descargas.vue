<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <h1>Reporte de Docentes</h1>
        <br />
        <div>
          <input
            type="search"
            aria-label="Search"
            v-model="filterbusqueda"
            @keyup.prevent="Filtrardocente()"
          />
          <button>Buscar</button>
        </div>
        <br />
        <div class="justify-contentlg-end col-md-5 col-lg-8 mt-2">
          <paginate-links
            class="pagination justify-contend-end"
            for="reporte_docentefiltrado"
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
          <paginate
            ref="paginator"
            name="reporte_docentefiltrado"
            :list="reporte_docentefiltrado"
            :per="10"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">docente</th>
                  <th scope="col">Visualizado</th>
                  <th scope="col">Descargados</th>
                  <th scope="col">detalle</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="Reporte_Docente in paginated(
                    'reporte_docentefiltrado'
                  )"
                  :key="Reporte_Docente.id"
                >
                  <td>{{ Reporte_Docente.id }}</td>
                  <td>{{ Reporte_Docente.name }}</td>
                  <td>{{ Reporte_Docente.visualizado }}</td>
                  <td>{{ Reporte_Docente.descargado }}</td>
                  <td>
                    <button
                      @click="DownloadreportDODETALLE(Reporte_Docente.id)"
                      class="buttom"
                    >
                      DETALLE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </paginate>
        </div>
        <div>
          <paginate-links
            class="pagination justify-contend-end"
            for="reporte_docentefiltrado"
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
        <h2>Seleciona la fecha que se quiere descargar el reporte</h2>
          <br>
          <input type="date" name="fecha_inicial" v-model="fechai" >
          <input type="date" name="fecha_final" v-model="fechaf">
        <button @click="DownloadreportDO(fechai,fechaf)" class="btn btn-success">
          Descargar reporte
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "Rdocente",
  data() {
    return {
      fechai:"",
      fechaf:"",
      locales: [
        { text: "ingles" },
        { text: "Español" },
        { text: "matematicas" },
      ],
      Reporte_Docente: [],
      reporte_docentefiltrado: [],
      filterbusqueda: "",
      paginate: ["reporte_docentefiltrado"],
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.MostrarReporte_Docente();
  },
  methods: {
    async MostrarReporte_Docente() {
      await this.axios
        .get("/ReportsDoc")
        .then((response) => {
          this.Reporte_Docente = response.data;
          this.reporte_docentefiltrado = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.Reporte_Docente = [];
        });
    },
    Filtrardocente() {
      let filter = [];

      for (let busq of this.Reporte_Docente) {
        let docente = busq.name;

        if (docente.indexOf(this.filterbusqueda) >= 0) {
          filter.push(busq);
        }
      }

      this.reporte_docentefiltrado = filter;
      if (this.reporte_docentefiltrado == 0) {
        alert("no se a encontrado el usuario");
        this.filterbusqueda = "";
        this.reporte_docentefiltrado = this.Reporte_Docente;
      }
    },
    DownloadreportDO(fechai,fechaf) {
      axios({
        url: `/${fechai},${fechaf}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        this.descargara = response.data;
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Reporte_Docente.pdf");
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
    DownloadreportDODETALLE(id_docente) {
      axios({
        url: `/Reports_DocDePdf/${id_docente}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        this.descargara = response.data;
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "Reporte_Docente_Detallado.pdf");
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
  margin-top: 20px;
  width: 80%;
  height: 100vh;
}
.buttom {
  background-color: #ffca2c;
  border-color: #ffc720;
  color: black;
  font-size: 1rem;
  text-align: center;
  border-radius: 40px;
}
</style>