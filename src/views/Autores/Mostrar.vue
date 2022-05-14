<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
    </div>


        <div class="cara2" >

            <section>
                <div class="tablas" >
                 <h1> AUTORES </h1> 
                 <!--input para buscador-->
                       <div class="input-group">
       <input
          type="text"
          v-model="inputSearch"
          class="form-control"
          placeholder="Ingrese el nombre del libro " 
          style="width : 400px; heigth : 400px"
   />
   <button
          type="submit"
          @click="buscarautores(inputSearch)"
          v-on:click="errored=true"     
          class="btn btn-success"
        >
          Buscar
        </button>
   </div>
                 <!--final input-->

<!-- para el buscardor-->
<div v-if="errored == true">

               <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"  ></b-pagination>
                    <b-table id="my-table" :items="buscarA" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }"  >
                        <template #cell(acciones)="row">
                            <router-link :to='{name:"editar", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrar(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                        </template>
                    </b-table>
                    </div>




<!--fin del buscador-->
                <button class="btn btn-success" v-on:click="crear()" >Crear Autor </button>
               
                 <!--tabla para mostrar todos los datos de autores-->

               <div v-if="errored==false">
               <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                    <b-table id="my-table" :items="Autores" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                      <template #cell(Acciones)="row">
                         <router-link :to='{name:"EditarAutores", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                          <a type="button" @click="borrarAutores(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                      </template>
                    </b-table>
                    </div>
                    <!--final de tabla mostrar datos-->
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
    name:"MostrarAutores",
    data(){
        return {
            perPage: 7, //numero de filas que va  atener por pagina
            currentPage: 1, //donde va a iniciar la paginacion
            Autores:[],
            buscarA:[],
             fields: [
                {key: 'id', label: '#',},
                {key: 'name', label: 'Nombre'},
                {key:'address', label: 'correo'},
                {key: 'phone', label: 'Telefono'},
                "Acciones"
                ],
                errored:false,
                     inputSearch: "",
                   name:null
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

    buscarautores(name) {
            
      this.axios
        .get("http://127.0.0.1:8000/api/authors/" + name)
        .then((response) => {
        this.buscarA=response.data.material;
        console.log(buscarA)

        })
        .catch((error) => {
          console.log(error);
        });
    },
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
        },
        EditarAutores(id){

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
    }
    .table thead{
  background-color: #23282e;
  text-align: center;
  font-size: 14px;
  background-image:url("@/assets/fondo.png") ;
   opacity: 0.7;
   color:white;
    }
</style>