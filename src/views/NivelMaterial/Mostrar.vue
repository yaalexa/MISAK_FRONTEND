<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>ASIGNAR NIVEL DE EDUCACIÓN</h1> 
                <label for="" class="control-label col-sm-2">NOMBRE DEL NIVEL DE EDUCACIÓN</label>
                <input type="text" id="nivelmaterial" name="nivelmaterial" v-model="nivelmaterial" disabled=isDisabled>
                <a type="button" @click="crearnivelmaterial()" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Asignar Nivel de Educación</a>
                 <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="Nivel_material in Nivel_material" :key="Nivel_material.id">
                            <td>{{ Nivel_material.id }}</td>
                            <td>{{ Nivel_material.name }}</td>
                            <td>
                               <!-- <router-link :to='{name:"EditarEditorial", params:{id:authors.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link> -->
                                <a type="button" @click="borrarasignado(Nivel_material.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    
    name:"MostrarNivelMaterial",
    data(){
        return {
            Nivel_material:null,
            Nivel:null,
            nombrematerial:null,
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted:function(){
        this.nivelmaterial=this.$route.params.name;
        let direccion = `http://127.0.0.1:8000/api/material__educational_levels/${this.$route.params.id}`;
        axios.get(direccion).then((result) => {
        this.Nivel_material = result.data;
        });
       
        
    },
    methods:{
        crearnivelmaterial(){
            this.$router.push(`/AsignarMaterial/${this.$route.params.id}`);
        },
        borrarasignado(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/material__educational_levels/${id}`).then(response=>{
                }).catch(error=>{
                    console.log(error)
                });
                this.$router.push("/nivelmaterial/:id,:name");
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