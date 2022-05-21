<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section class_="contenedor">
              <div class="contenedortabla">
                <h1>ASIGNAR AUTOR</h1> 
                 <router-link :to='{name:"AsignarAutores"}' class="btn btn-success">Crear Autor-Material</router-link>
                 <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                  <b-table id="my-table" :items="Autormaterial" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                    <template #cell(Acciones)="row">
                        <router-link :to='{name:"Autormaterial", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" />Asignar Autor</router-link>
                        <a type="button" @click="borrarAsignacion(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    
    name:"MostrarAutormaterial",
    data(){
        return {
              perPage: 7, //numero de filas que va  atener por pagina
            currentPage: 1, //donde va a iniciar la paginacion
            Autormaterial:[],
             fields: [
                {key: 'id', label: '#',},
                {key: 'material_id', label: 'Material'},
                {key: 'author_id', label:'Autor'},
                "Acciones"
                ]
        }
        
    },
    components:{
        Header,
      //  Footer
    },
    mounted:function(){
        this.nombrematerial=this.$route.params.name;
        let direccion = `http://127.0.0.1:8000/api/author_materials/${this.$route.params.id}`;
        axios.get(direccion).then((result) => {
        this.Author_material = result.data;
        });
       
        
    },
    methods:{
        crearautor(){
            this.$router.push(`/AsignarAutores/${this.$route.params.id}`);
        },
        borrarautorasignado(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/author_materials/${id}`).then(response=>{
                    //this.mostrarAutores()
                }).catch(error=>{
                    console.log(error)
                });
                this.$router.push("/autormaterial/:id,:name");
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