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
                <button class="btn btn-success" v-on:click="crear()" >Crear tipo Material </button>
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                    <b-table id="my-table" :items="TipoMaterial" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                      <template #cell(Acciones)="row">
                         <router-link :to='{name:"EditarTipoMaterial", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                          <a type="button" @click="borrarTipoMaterial(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    name:"MostrarTipoMaterial",
    data(){
        return {
            perPage: 7,
           currentPage: 1,
            TipoMaterial:[],
            fields: [
                {key: 'id', label: '#',},
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
        return this.TipoMaterial.length
      }
    },
    mounted(){
        this.mostrarTipoMaterial()
    },
    methods:{
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
</style>