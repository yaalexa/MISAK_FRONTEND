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
                <h1>Areas</h1> 

<!--para el input de buscador-->
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
          @click="buscarAreas(inputSearch)"
          v-on:click="errored=true"     
          class="btn btn-success"
        >
          Buscar
        </button>
   </div>

   <!--fin de input buscador-->

<!--para la tabla de byscador-->

              <div v-if="errored==true">
                 <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                  <b-table id="my-table" :items="buscarA" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                    <template #cell(Acciones)="row">
                        <router-link :to='{name:"EditarAreas", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                        <a type="button" @click="borrarAreas(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                    </template>
 
                  </b-table>
</div>

<!--fin de la tabla buscador-->

                 <router-link :to='{name:"CrearAreas"}' class="btn btn-success">Crear Areas</router-link>
                 



                 <!--tabla mostrar todo areas-->
                 <div v-if="errored==false">
                 <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                  <b-table id="my-table" :items="Areas" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                    <template #cell(Acciones)="row">
                        <router-link :to='{name:"EditarAreas", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                        <a type="button" @click="borrarAreas(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                    </template>
 
                  </b-table>
</div>
                  <!--fin de tabla momstrar todo areas-->
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
    name:"MostrarAreas",
    data(){
        return {
            perPage: 7, //numero de filas que va  atener por pagina
            currentPage: 1, //donde va a iniciar la paginacion
            Areas:[],
            buscarA:[],
             fields: [
                {key: 'id', label: '#',},
                {key: 'name', label: 'Nombre'},
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
        return this.Areas.length
      }
    },
    mounted(){
        this.mostrarAreas()
    },
    methods:{
                        buscarAreas(name) {
            
      this.axios
        .get("http://127.0.0.1:8000/api/areas/" + name)
        .then((response) => {
        this.buscarA=response.data.material;
        console.log(buscarA)

        })
        .catch((error) => {
          console.log(error);
        });
    },
        async mostrarAreas(){
            await this.axios.get('http://127.0.0.1:8000/api/areas').then(response=>{
                this.Areas = response.data
            }).catch(error=>{
                console.log(error)
                this.Areas = []
            })
        },
        borrarAreas(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/areas/${id}`).then(response=>{
                    this.mostrarAreas()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        EditarAreas(id){

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
    .contenedortabla{
        width: 80%;
        text-align: center;
        margin-left: 20%;
    }
</style>