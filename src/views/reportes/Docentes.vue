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
          <b-table
          :filter="filter"
            id="my-table"
            :items="Reporte_Docente"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            class="table"
            >
            <template #cell(Acciones)="row">
              <button
                @click="DownloadreportDODETALLE(row.item.id)"
                class="buttom"
                 >
                 DETALLE
              </button>
            </template>
            </b-table>
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
      filter:null,
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
      fields: [
        {key:"id", label:"Id"},
        {key:"name", label:"Docente"},
        {key:"visualizado", label:"Visualizado"},
        {key:"descargado", label:"Descargado"},
        "Acciones",
        ],
      perPage: 10, //numero de filas que va a tener por pagina
      currentPage: 1, //donde va a iniciar la paginacion
    };
  },
  components: {
    Header,
  },
    computed: {
    rows() {
      return this.Reporte_Docente.length;
    },
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
        url: `/Reports_DocPdf/${fechai}/${fechaf}`,
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