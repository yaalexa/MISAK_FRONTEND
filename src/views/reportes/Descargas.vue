<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>Reporte de Descargas</h1> 
                <br>
                    <label for="start">Fecha de inicio:</label>
                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2050-1-1">
                    <label for="start">Fecha Final:</label>
                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2050-1-1">
                    <label for="datepicker-sm">Arias:</label>
                    <b-form-select id="example-locales" v-model="locale" :options="locales" class="mb-2"></b-form-select>
                    <b-button variant="outline-primary">Busar</b-button>
                     <br>
                      <Bar/>
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
                            <tr  v-for="NivelEducativo in NivelEducativo" :key="NivelEducativo.id">
                            <td>{{ NivelEducativo.id }}</td>
                            <td>{{ NivelEducativo.name }}</td>
                            </tr>
                        </tbody>
                </table>
                 <router-link :to='{name:"CrearNivelEducativo"}' class="btn btn-success">Descargar Reporte</router-link>
            </section>    
        </div>
    </div>
</template>
 
<script>
import Header from '@/components/Header.vue';
import Bar from '@/components/charts/Bar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"Descargas",
    data(){
        return {
            locales:[
                {text: 'ingles'},
                {text: 'Español'},
                {text: 'matematicas'}
            ]
        }
    },
    components:{
        Header,
      //  Footer
      Bar
    },
    
}
</script>

<style>
    body{
        margin: 0%;
    }
    .pantalla{
        display: flex;
    }
    .cara1{
        height: 100vh;
        width: 20%;
        
    }
    .cara2{
        width: 80%;
        height: 100vh;
    }
</style>