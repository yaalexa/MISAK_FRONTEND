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
                   
        <br>
      </div>
      
               <div class="form-group left row" >
                 <div class="control-label col-sm-5" style="text-align: left">         
                <button class="btn btn-warning" v-on:click="nuevo()" >Nuevo <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon></button>
                </div> 
                <div class="control-label col-sm-7" style="text-align: left">  
                <div class="input-group" style="text-align: right">
                
                <input
                        type="text"
                        v-model="inputSearch"
                        class="form-control"
                        placeholder="Ingrese el nombre del libro " 
                        style="width : 40px;"
                />
                <button
                        type="submit"
                        @click="buscarmaterial(inputSearch)"
                        v-on:click="errored=true"     
                        class="btn btn-success"
                        >
         <b-icon icon="search" aria-hidden="true"></b-icon>
        </button>
   </div>
   <br>
   </div>
            </div>

<!-- para el buscardor-->
<div v-if="errored == true">

              
                    <b-table id="my-table" :items="buscar" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table"   >
                        <template #cell(acciones)="row">
                           <router-link :to='{name:"Editar", params:{id:row.item.id}}' class="btn btn-warning"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> <b-icon icon="pencil" aria-hidden="true"></b-icon></router-link>
                                <a type="button" @click="borrar(row.item.id)" class="btn btn-secondary"><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="trash-fill" aria-hidden="true"></b-icon></a>
                                 <a type="button" @click="autormaterial(row.item.id, row.item.name)" class="btn btn-sucess" ><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="person-check" aria-hidden="true" variant="secondary"></b-icon></a>
                                 <a type="button" @click="educationallevel(row.item.id, row.item.name)" class="btn btn-sucess"><b-icon icon="bar-chart-fill" flip-h flip-v></b-icon></a>

                        </template>
                    </b-table>
                    </div>




<!--fin del buscador-->






<div v-if="errored == false">
               
                    <b-table id="my-table" :items="material" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table"   >
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
                {key: 'isbn', label: 'ISBN'},
                {key: 'num_pages', label: '# Pag'},
                {key: 'priority', label: 'Prioridad'},
                {key: 'year', label: 'Año'},
                "acciones"
                ],
            pagina:1,
            list : null,
             search: "",
             errored:false,
                   inputSearch: "",
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
        educationallevel(id, name){
       this.$router.push({name: "nivelmaterial",params:{id: id, name: name}
       });
                  },
     buscarmaterial(name) {
      console.log(name);
      this.axios
        .get("http://127.0.0.1:8000/api/buscar/" + name)
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
          autormaterial(id, name){
                //this.$router.push('/autormaterial/' +id);
                this.$router.push({name: "autormaterial",params:{id: id, name: name}
});
            },
            async mostarMateriales(){
              await this.axios.get('http://127.0.0.1:8000/api/materials/').then(response=>{
                     this.material=response.data;
                     console.log(this.material);
                
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
        overflow:auto;
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