<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>Areas</h1> 
                 <router-link :to='{name:"CrearAreas"}' class="btn btn-success">Crear Areas</router-link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Editar | Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="areas in areas" :key="areas.id">
                            <td>{{ areas.id }}</td>
                            <td>{{ areas.name }}</td>
                            <td>
                                <router-link :to='{name:"EditarAreas", params:{id:areas.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarAreas(areas.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    name:"MostrarAreas",
    data(){
        return {
            areas:[]
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarareas()
    },
    methods:{
        async mostrarareas(){
            await this.axios.get('http://127.0.0.1:8000/api/areas').then(response=>{
                this.areas = response.data
            }).catch(error=>{
                console.log(error)
                this.areas = []
            })
        },
        borrarEditorial(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/areas/${id}`).then(response=>{
                    this.mostrarareas()
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