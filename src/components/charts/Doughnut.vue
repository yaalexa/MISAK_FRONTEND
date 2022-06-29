<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    mostrarReportei() {
      this.axios
        .get("/Reports")
        .then((response) => {
          this.consumo = response.data;
          // console.log(this.consumo);
          this.graficar();
        })
        .catch((error) => {
          console.log(error);
          this.consumo = [];
        });
    },
    graficar() {
      for (let i of this.consumo) {
        if (i.detalle_material == "descargado") {
          this.descargas = this.descargas + 1;
        }
        if (i.detalle_material == "visualizado") {
          this.vistas = this.vistas + 1;
        }
      }
      // eslint-disable
      (this.chartData = {
        labels: ["Descargas", "Visualizacion"],
        datasets: [
          {
            label: "grafica",
            backgroundColor: ["#41B883", "#E46651"],
            data: [this.descargas, this.vistas],
          },
        ],
      }),
        console.log(this.descargas);
      console.log(this.vistas);
    },
  },
  data() {
    return {
      // variables
      consumo: "",
      descargas: 0,
      vistas: 0,
      chartData: {},

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.mostrarReportei();
  },
};
</script>