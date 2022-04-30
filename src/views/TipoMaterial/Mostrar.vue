<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>

    <div class="cara2">
            <section>       
 
      <div class="col-md-12">
      
        <h1>TIPO MATERIAL </h1> 
      </div>
 
                <button class="btn btn-success" v-on:click="nuevo()" >Nuevo Tipo Material</button>
                <br><br>
                <table class="table table-hover">
                <thead>
                    <tr>
                                     <th>#</th>
                                    <th>NOMBRE</th>
                                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr v-for="TipoMaterial in TipoMaterial" :key="TipoMaterial.id">
                                    <td>{{ TipoMaterial.id }}</td>
                                    <td>{{ TipoMaterial.name }}</td>
                                    
                                     <td>
                                  
                                    <router-link :to='{name:"EditarTipoMaterial", params:{id:TipoMaterial.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrar(TipoMaterial.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                                 
                                </td>
                    </tr>
                     
                </tbody>
                </table>

           
            </section>
 </div>
      
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"TipoMaterial",
    data(){
        return {
            TipoMaterial:null,
            pagina:1
        }
    },
    components:{
        Header,
      //  Footer
    },
    methods:{
            EditarTipoMaterial(id){
                this.$router.push('/EditarTipoMaterial/' + id);
            },
            nuevo(){
                this.$router.push('/CrearTipoMaterial');
            },
             borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/type_materials/${id}`).then(response=>{
                     this.$router.push("/TipoMaterial");
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    },
    mounted:function(){
        let direccion = "http://localhost:8000/api/type_materials";
        axios.get(direccion).then((result) => {
        this.TipoMaterial = result.data;
        });
        
    }

    
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
</style>