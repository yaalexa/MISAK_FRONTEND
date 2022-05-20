<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section class="contenedorautor">
                <h1>AUTORES</h1> 
               
                    <div class="form-group left row" >
                 <div class="control-label col-sm-5" style="text-align: left">  
                 <b-button  v-on:click="crear()" class="btn btn-warning">Nuevo
                 <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon></b-button>       

                </div> 
                <div class="control-label col-sm-7" style="text-align: left">  
                <div class="input-group" style="text-align: right">
                
                        <b-form-input
                        v-model="filter"
                        type="search"
                        placeholder="Buscar Autores"
                        > </b-form-input>
                
       
   </div>
   <br>
   </div>
            </div>

                <b-table :filter="filter" id="my-table" :items="Autores" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table">
                    <template #cell(Acciones)="row">
                              <router-link :to='{name:"EditarAutor", params:{id:row.item.id}}' class="btn btn-warning"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> <b-icon icon="pencil" aria-hidden="true"></b-icon></router-link>
                            <a type="button" @click="borrarAutores(row.item.id)" class="btn btn-secondary"><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="trash-fill" aria-hidden="true"></b-icon></a>
                       
                    </template>
 
                  </b-table>
                   <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
              
            </section>    
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"MostrarAutor",
    data(){
        return {
            fields: [
                {key: 'id', label: '#',},
                {key: 'name', label: 'Nombre'},
                {key: 'phone', label: 'Telefono'},
                {key: 'address', label: 'Direccion'},
                "Acciones"
                ],
            Autores:[],
            filter:null,
            perPage: 7, //numero de filas que va  atener por pagina
            currentPage: 1, //donde va a iniciar la paginacion
        }
        
    },
    components:{
        Header,
      //  Footer
    },
    computed: {
      rows() {
        return this.Autores.length
      }
    },
    mounted(){
        this.mostrarAutores()
    },
    methods:{
        async mostrarAutores(){
            await this.axios.get('http://127.0.0.1:8000/api/authors').then(response=>{
                this.Autores = response.data
            }).catch(error=>{
                console.log(error)
                this.Autores = []
            })
        },
        crear(){
                this.$router.push('/CrearAutor');
            },
        borrarAutores(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/authors/${id}`).then(response=>{
                    this.mostrarAutores()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
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
        overflow: auto;
    height: 100vh;
      width: 70%;
    }
</style>