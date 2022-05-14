<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <div class="tablas">
                <h1> TIPO MATERIAL  </h1> 

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
          @click="buscartipoeditorial(inputSearch)"
          v-on:click="errored=true"     
          class="btn btn-success"
        >
          Buscar
        </button>
   </div>

   <!--fin de input buscador-->


<!-- para el buscardor-->
<div v-if="errored == true">

               <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"  ></b-pagination>
                    <b-table id="my-table" :items="buscarTM" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }"  >
                        <template #cell(acciones)="row">
                            <router-link :to='{name:" crear", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarTipoMaterial(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                        </template>
                    </b-table>
                    </div>




<!--fin del buscador-->


                <button class="btn btn-success" v-on:click="crear()" >Crear tipo Material </button>
               
               <!--tabla para mostrar todos los resultados de tipo material-->
               <div v-if="errored==false">
               <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                    <b-table id="my-table" :items="TipoMaterial" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                      <template #cell(Acciones)="row">
                         <router-link :to='{name:" crear", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                          <a type="button" @click="borrarTipoMaterial(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                      </template>
                    </b-table>
                    </div>
                   <!--fin de tabla para momstrar todos los resltados-->
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
    name:"MostrarTipoMaterial",
    data(){
        return {
            perPage: 7,
           currentPage: 1,
            TipoMaterial:[],
            buscarTM:[],
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
        return this.TipoMaterial.length
      }
    },
    mounted(){
        this.mostrarTipoMaterial()
    },
    methods:{
                
    buscartipoeditorial(name) {
            
      this.axios
        .get("http://127.0.0.1:8000/api/type_materials/" + name)
        .then((response) => {
        this.buscarTM=response.data.material;
        console.log(buscarTM)

        })
        .catch((error) => {
          console.log(error);
        });
    },


        async mostrarTipoMaterial(){
            await this.axios.get('http://127.0.0.1:8000/api/type_materials').then(response=>{
                this.TipoMaterial = response.data
            }).catch(error=>{
                console.log(error)
                this.TipoMaterial = []
            })
        },
        crear(){
                this.$router.push('/CrearTipoMaterial');
            },
        borrarTipoMaterial(id){
            console.log(id);
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/type_materials/${id}`).then(response=>{
                    this.mostrarAreas()
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
        margin-bottom: 10px;
        width:80%;
        vertical-align: 'middle'
    }
     .tablas{
        margin-left: 100px;
        align-content: center;    
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