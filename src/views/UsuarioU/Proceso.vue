<template>
   <div id="contenedor">
   <div id="cabecera"><Menu1/>
   </div>
       <div id="menu"> 
             <NavdestacadosVue/>
         </div>
         
      <div id="contenido">
          <div id="contenido2">
          <div class="contenedor4">
                    
                        <h1>HISTORIAL DE CONSULTAS </h1> 
                                
                        <br>
                  <div class="form-group left row" >
                 
                <div class="control-label col-sm-7" style="text-align: left">  
                    <div class="input-group" style="text-align: right">
                
                        <b-form-input
                        v-model="filter"
                        type="search"
                        placeholder="Buscar"
                        > </b-form-input>
                    </div>
                    <br>
                </div>
            </div>
                     <b-table :filter="filter" id="my-table" :items="proceso" :fields="fieldsMy" :per-page="perPage" :current-page="currentPage" class="table">
                                <template #cell(acciones)="row">

                                    <router-link :to='{name:"Editar", params:{id:row.item.id}}' class="btn btn-warning"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> <b-icon icon="pencil" aria-hidden="true"></b-icon></router-link>
                                        <a type="button" @click="borrar(row.item.id)" class="btn btn-secondary"><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="trash-fill" aria-hidden="true"></b-icon></a>
                                        <a type="button" @click="autormaterial(row.item.id, row.item.name)" class="btn btn-sucess"><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="person-check" aria-hidden="true"></b-icon></a>
                                        <a type="button" @click="educationallevel(row.item.id, row.item.name)" class="btn btn-sucess"><b-icon icon="bar-chart-fill" flip-h flip-v></b-icon></a>

                                </template>
                      </b-table>
                    </div>
  
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"  ></b-pagination>
          </div>
  
       </div>
    </div>
</template>
<script>

import Menu1 from "@/components/Menu1.vue";
import axios from 'axios';
import NavdestacadosVue from "@/components/NavDestacados.vue";
export default {
    name:"Dashboard",
    data(){
        return {
             perPage: 7,
             currentPage:1,
             proceso:[],
             filter:null,
             fieldsMy: [
                {key: 'MATERIAL', label: 'Material',},
                {key: 'EDITORIAL', label: 'Editorial'},
                {key: 'AUTOR', label: 'Autor'},
                {key: 'PROCESO', label: 'Proceso'},
                {key: 'FECHA', label: 'Fecha'},
                ],
            pagina:1,
            list : null,
            search: "",
            inputSearch: "",
        }
    },
    components:{
        Menu1,
        NavdestacadosVue,
    },
    computed: {
            rows(){
                return this.proceso.length
            }},
    mounted(){
        var usrid = JSON.parse(sessionStorage.getItem("userid"));
        this.mostrarProcesoUser(usrid);
        },
    methods:{
        async mostrarProcesoUser(id){
              await this.axios.get(`http://127.0.0.1:8000/api/process__users/${id}`).then(response=>{
                     this.proceso=response.data;
                     console.log(this.proceso);
                     
                }).catch(error=>{
                    console.log(error);
                });

    }
     
    },
      
}
</script>
<style  scoped>
    #cabecera {
        color:#ff9;
        height:80px;
        overflow:hidden;
        display: flex;
        
      }
      #contenedor {
        width:100%;
        overflow:hidden;
         height: 100vh;
      }
      #contenido {
        float:left;
        height: 100vh;
        padding:10px;
        width:80%;
        overflow: auto;
      }
        #contenido2 {
        float:left;
        height: 110vh;
        padding:10px;
        width:95%;
        padding: 1%;
        margin-left: 2%;
        overflow: hidden;
      }
      #menu {
        background: linear-gradient(to top, #aab0c0, 5%, #d3d3d4);
        float:left;
         height: 100vh;
        padding:20px;
        width:20%;
        overflow:auto;
      }
</style>