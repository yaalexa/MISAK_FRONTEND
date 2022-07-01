<template>
  <div>
    <div class="pantalla">
      <div class="cara1">
        <header>
          <Header />
        </header>
      </div>
      <div class="cara2">
        <h1>Reportes del Material</h1>
        <p>Selecione el reporte</p>
        <Doughnut />
        <article class="article">
          <div class="card-body">
            <div class="row0">
              <div class="col">
                <h4 class="tito">Reportes del material descargado</h4>
              </div>
              <div class="col-auto">
                <div>
                  <router-link
                    :to="{ name: 'Descargas' }"
                    class="btn btn-success"
                    >Generar reporte</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row0">
              <div class="col">
                <h4 class="tito">Reportes del material Visualizado</h4>
              </div>
              <div class="col-auto">
                <div>
                  <router-link
                    :to="{ name: 'Visualizacion' }"
                    class="btn btn-success"
                    >Generar reporte</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row0">
              <div class="col">
                <h4 class="tito">Reportes de los docentes</h4>
              </div>
              <div class="col-auto">
                <div>
                  <router-link
                    :to="{ name: 'Rdocente' }"
                    class="btn btn-success"
                    >Generar reporte</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Doughnut from "@/components/charts/Doughnut.vue";
export default {
  name: "VistaReporte",
  components: { Header, Doughnut },
};
</script>

<style scoped>
.card-body {
  width: 40%;
  align-items: center;
  text-align: center;
  margin: 0%;
}
.row0 {
  justify-content: center;
  background: gray;
}
.row1 {
  justify-content: center;
  background: gray;
}
.article {
  display: flex;
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
  width: 80%;
  height: 100vh;
  overflow: auto;
}
.card-body {
  background: #16223f;
  margin: 4px;
}
.row0 {
  background: #16223f;
}
.tito {
  color: aliceblue;
}
.btn-success {
  background-color: #ffca2c;
  border-color: #ffc720;
  color: black;
}
@media only screen and (max-width: 767px) {
  article.article {
    flex-wrap: wrap;
}
}
</style>