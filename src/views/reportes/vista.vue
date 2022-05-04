<template>
    <div>
         <div class="pantalla">
                <div class="cara1">
                    <header>
                        <Header/>
                    </header>
                </div>
                <div class="cara2">  
                    <h1>Reportes del Material</h1>
                    <p>Selecione el reporte</p>
                    <div class="card-body">
                        <div class="row0">
                            <div class="col">
                                <h4>Reportes del material descargado</h4>
                                <span>35000</span>
                            </div>
                            <div class="col-auto">
                                <div>
                                    <router-link :to='{name:"Descargas"}' class="btn btn-success">Generar reporte</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row1">
                            <div class="col">
                                <h4>Reportes del material Visto</h4>
                                <span>8500</span>
                            </div>
                            <div class="col-auto">
                                <div>
                                    <router-link :to='{name:"Visualizacion"}' class="btn btn-success">Generar reporte</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name:"vistaReporte",
      components:{ Header,
      }
 
}
</script>

<style scoped>
    .card-body{
        width: 50%;
        align-items: center;
        text-align: center;
        margin: 0%;
    }
    .row0{
        justify-content: center;
        background:gray;
    }
    .row1{
        justify-content: center;
        background: gray;
    }
    
</style>