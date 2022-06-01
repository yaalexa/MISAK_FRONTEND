<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
            <div id="cabecera"><Menu1/></div>
        </div>


        <div class="cara2">
          <section>       
            <div class="izquierda">
                  <div class="col-md-12">
                    
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
                     <b-table id="my-table" :items="proceso" :fields="fieldsMy" :per-page="perPage" :current-page="currentPage" class="table">
                                <!-- <template #cell(acciones)="row">

                                    <router-link :to='{name:"Editar", params:{id:row.item.id}}' class="btn btn-warning"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> <b-icon icon="pencil" aria-hidden="true"></b-icon></router-link>
                                        <a type="button" @click="borrar(row.item.id)" class="btn btn-secondary"><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="trash-fill" aria-hidden="true"></b-icon></a>
                                        <a type="button" @click="autormaterial(row.item.id, row.item.name)" class="btn btn-sucess"><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="person-check" aria-hidden="true"></b-icon></a>
                                        <a type="button" @click="educationallevel(row.item.id, row.item.name)" class="btn btn-sucess"><b-icon icon="bar-chart-fill" flip-h flip-v></b-icon></a>
                                
                                </template> -->
                      </b-table>
                    </div>

                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"  ></b-pagination>
          </div>
        </section>
       </div>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Menu1 from "@/components/Menu1.vue";
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
             perPage: 10,
             currentPage:1,
             proceso:[],
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
        Header,
        Menu1,
      //  Footer
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
  
   body{
        margin: 0%;
    }
    .pantalla{
        display: flex;
         overflow:hidden;
    }
    .cara1{
        height: 100vh;
        width: 20%;
        overflow:hidden;
    }
    .cara2{
        
        width: 80%;
        height: 100vh;
        overflow:hidden;
    }
    .izquierda{
        margin-top: 1%;
         text-align: center;
        width:70%;
        margin-left: 10%;
        align-content: center;
        overflow:hidden;
    }
    .boton{
       text-align: left; 
    }
</style>