<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                 <div class="contenedortablaareas">
                <h1>NIVEL EDUCATIVO</h1> 
                       <div class="form-group left row" >
                 <div class="control-label col-sm-5" style="text-align: left">  
                 <b-button v-b-modal="'CrearNivelEducativo'" class="btn btn-warning">Nuevo
                 <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon></b-button>       

                </div> 
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
              
                  <b-table :filter="filter" id="my-table" :items="NivelEducativo" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table">
                    <template #cell(Acciones)="row">
                           <b-button v-b-modal="'EditarNivelEducativo'" class="btn btn-warning"  @click="sendInfoEditorial(row.item.id,row.item.name)"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> <b-icon icon="pencil" aria-hidden="true"></b-icon></b-button>  
                            <a type="button" @click="borrarNivelEducativo(row.item.id)" class="btn btn-secondary"><font-awesome-icon icon="fa-solid fa-trash-can" /><b-icon icon="trash-fill" aria-hidden="true"></b-icon></a>
                       
                    </template>
 
                  </b-table>
                   <b-pagination align="center" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
              </div>
               
            
            </section>    
        </div>
        <!-- MODAL-->
        <div>
  <b-modal id="CrearNivelEducativo" v-model="CrearNivelEducativo"   title="Editar">
  <template #modal-header>
      
      
      <h5>CREAR NIVEL EDUCATIVO</h5>
    </template>
   
   <form @submit.prevent="crearEd">
  
    <div class="d-block text-center">
         <b-form-group
          label="Nombre"
          label-for="name-input"
          invalid-feedback="Nombre obligatorio"
          :state="nameState"
        >
    <input type="text" id="nom_editorial" name="nom_editorial" v-model="form.nom_editorial" >
    </b-form-group>
    </div>
    <div class="botonmodal">
          <button type="submit" class="btn btn-warning"> Guardar </button>  
         
    </div>
    </form>
    <template #modal-footer="{ close }">
       <b-button class="btn btn-secondary" @click="close()"> Cerrar </b-button>
    </template>
  </b-modal>
</div>
<!-- modal para editar-->
 <div>
  <b-modal id="EditarNivelEducativo" v-model="EditarNivelEducativo"   title="Editar">
  <template #modal-header>
     
      <h5>EDITAR NIVEL EDUCATIVO</h5>
    </template>
   
   <form @submit.prevent="editarEdit">
  
    <div class="d-block text-center">
         <b-form-group
          label="Nombre"
          label-for="name-input"
          invalid-feedback="Nombre obligatorio"
          :state="nameState"
        >
    <input type="text" id="nombreed" name="nombreed"  v-model="selectedEdnom" >
    </b-form-group>
    </div>
    <div class="botonmodal">
          <button type="submit" class="btn btn-warning"> Guardar </button>  
         
    </div>
    </form>
    <template #modal-footer="{ close }">
       <b-button class="btn btn-secondary" @click="close()"> Cerrar </b-button>
    </template>
  </b-modal>
</div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"MostrarNivelEducativo",
    data(){
        return {
             form:{
                 nom_editorial:null,
            },
            selectedEdid:null,
            selectedEdnom:null,
            nombreed:null,
            filter:null,
            perPage: 7, //numero de filas que va a tener por pagina
            currentPage: 1,//donde va a iniciar la paginacion
             fields: [
                {key: 'id', label: '#'},
                {key: 'name', label: 'Nombre'},
                "Acciones"
                ],
            NivelEducativo:[],
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarNivelEducativo()
    },
     computed: {
      rows() {
        return this.NivelEducativo.length
      }
    },
    methods:{
         async editarEdit(){
             axios.put(`http://localhost:8000/api/educational_levels/${this.selectedEdid}`,{name:this.selectedEdnom}) 
          .then(response=>{
              console.log(response);
              this.mostrarNivelEducativo();
          })
        },
       sendInfoEditorial(id,nom){
           return this.selectedEdnom = nom,this.selectedEdid = id;
       },
       crearEd(){
        this.axios.post('http://127.0.0.1:8000/api/educational_levels',{name:this.form.nom_editorial}).then(response=>{
                this.mostrarNivelEducativo();
            })
     
       },
        async mostrarNivelEducativo(){
            await this.axios.get('http://127.0.0.1:8000/api/educational_levels').then(response=>{
                this.NivelEducativo = response.data
            }).catch(error=>{
                console.log(error)
                this.NivelEducativo = []
            })
        },
        borrarNivelEducativo(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/educational_levels/${id}`).then(response=>{
                    this.mostrarNivelEducativo()
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
        width: 80%;
        height: 100vh;
    }
</style>