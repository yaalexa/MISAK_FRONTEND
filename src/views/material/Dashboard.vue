<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>



    <div class="cara2">
            <section>       
      <div class="izquierda">
      <div class="col-md-12">
      
        <h1>MATERIAL </h1> 
                   
 
      </div>

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
          @click="buscarmaterial(inputSearch)"
          v-on:click="errored=true"     
          class="btn btn-success"
        >
          Buscar
        </button>
   </div>

   <!--fin de input buscador-->
               <div class="boton">
                           
                <button class="btn btn-success" v-on:click="nuevo()" ><b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon></button>
            </div>

<!-- para el buscardor-->
<div v-if="errored == true">

               <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"  ></b-pagination>
                    <b-table id="my-table" :items="buscar" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }"  >
                        <template #cell(acciones)="row">
                            <router-link :to='{name:"editar", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrar(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                        </template>
                    </b-table>
                    </div>




<!--fin del buscador-->


<div v-if="errored == false">
               <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"  ></b-pagination>
                    <b-table id="my-table" :items="material" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }"  >
                        <template #cell(acciones)="row">
                            <router-link :to='{name:"editar", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrar(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                        </template>
                    </b-table>
                    </div>
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
    name:"Dashboard",
    data(){
        return {
            perPage: 7,
             currentPage:1,
             material:[],
             buscar:[],
             fields: [
                {key: 'id', label: '#',},
                {key: 'name', label: 'Nombre'},
                "acciones"
                ],
            pagina:1,
            list : null,
             search: "",
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
            rows(){
                return this.material.length
      
            }},
                    mounted(){
            this.mostarMateriales();
        },
    methods:{
                    buscarmaterial(name) {
     
      console.log(name);

      this.axios
        .get("http://127.0.0.1:8000/api/materials/" + name)
        .then((response) => {
        this.buscar=response.data.material;
        console.log(this.buscar);

        })
        .catch((error) => {
          console.log(error);
        });
    },
            editar(id){
                this.$router.push('/editar:' + id);
            },
            nuevo(){
                this.$router.push('/nuevo');
            },
             borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/materials/${id}`).then(response=>{
                     this.mostarMateriales()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
                buscareditorial(name) {
            
      this.axios
        .get("http://127.0.0.1:8000/api/editorials/" + name)
        .then((response) => {
        this.buscarE=response.data;
        console.log(buscarE)

        })
        .catch((error) => {
          console.log(error);
        });
    },
          autormaterial(id, name){
                //this.$router.push('/autormaterial/' +id);
                this.$router.push({name: "autormaterial",params:{id: id, name: name}
});
            },
            async mostarMateriales(){
              await this.axios.get('http://127.0.0.1:8000/api/materials/').then(response=>{
                     this.material=response.data;
                     console.log(material)
                
                }).catch(error=>{
                    console.log(error)
                })
        
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
    }
    .cara1{
        height: 100vh;
        width: 20%;
        
    }
    .cara2{
        width: 80%;
        height: 100vh;
    }
    .izquierda{
         text-align: center;
        width:70%;
        margin-left: 10%;
        align-content: center;
    }
    .boton{
       text-align: left; 
    }
</style>