<template>
  <Bar
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
import { Bar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
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
    MostrarReportes_Descargas() {
      this.axios
        .get("/ReportsDes")
        .then((response) => {
          this.consumo = response.data;
          this.name = response.data;
          this.conteo = response.data;
          this.graficar();
        })
        .catch((error) => {
          console.log(error);
          this.consumo = [];
        });
    },
    graficar() {
      for (let i of this.name) {
        console.log(i.name);
        this.nombres.push(i.name);
      }
      console.log("nombres: " + this.nombres);
      for (let i of this.conteo) {
        console.log(i.conteo);
        this.conteos.push(i.conteo);
      }
      console.log("conteo " + this.conteos);

      this.chartData = {
        labels: this.nombres,
        datasets: [
          {
            label: "Materiales",
            backgroundColor: "#000080",
            data: this.conteos,
          },
        ],
      };
    },
  },
  mounted() {
    this.MostrarReportes_Descargas();
  },
  data() {
    return {
      consumo: [],
      name: [],
      nombres: [],
      conteo: [],
      conteos: [],
      chartData: {},

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>