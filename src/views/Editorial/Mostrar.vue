<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <div class="contenedortabla">
                <h1>Editorial</h1> 
                 <router-link :to='{name:"CrearEditorial"}' class="btn btn-success">Crear editorial</router-link>
                     <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                    <b-table id="my-table" :items="editorial" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                        <template #cell(Acciones)="row">
                               <router-link :to='{name:"EditarEditorial", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarEditorial(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                        </template>
                    </b-table>
                    </div>
            </section> 
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios'; 
export default {
    name:"MostrarEditorial",
    data(){
        
        return {
            perPage: 7, //numero de filas que va a tener por pagina
            currentPage: 1,//donde va a iniciar la paginacion
            editorial:[],
             fields: [
                {key: 'id', label: '#'},
                {key: 'name', label: 'Nombre'},
                "Acciones"
                ]
        }
    },
    components:{
        Header,
      //  Footer
    },
    computed: {
      rows() {
        return this.editorial.length
      }
    },
    mounted(){
        this.mostrarEditorial()
    },
    methods:{
        async mostrarEditorial(){
            await this.axios.get('http://127.0.0.1:8000/api/editorials').then(response=>{
                this.editorial = response.data
            }).catch(error=>{
                console.log(error)
                this.editorial = []
            })
        },
        borrarEditorial(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/editorials/${id}`).then(response=>{
                    this.mostrarEditorial()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        EditarEditorial(id){

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
        width: 80%;
        height: 100vh;
         text-align: center;
    }
    .table thead{
        background-color: #23282e;
        text-align: center;
        font-size: 14px;
        background-image:url("@/assets/fondo.png") ;
        opacity: 0.7;
        color:white;
    }
    .contenedortabla{
        width:80%;
         text-align: center;
         margin-left: 20%;
    }
</style>