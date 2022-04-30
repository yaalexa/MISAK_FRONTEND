<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>Editorial</h1> 
                 <router-link :to='{name:"CrearEditorial"}' class="btn btn-success">Crear editorial</router-link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Editorial</th>
                            <th scope="col">Editar | Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="editorial in editorial" :key="editorial.id">
                            <td>{{ editorial.id }}</td>
                            <td>{{ editorial.name }}</td>
                            <td>
                                <router-link :to='{name:"EditarEditorial", params:{id:editorial.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarEditorial(editorial.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    name:"MostrarEditorial",
    data(){
        return {
            editorial:[]
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarEditorial()
    },
    methods:{
        async mostrarEditorial(){
            await this.axios.get('http://127.0.0.1:8000/api/editorials').then(response=>{
                this.editorial = response.data
            }).catch(error=>{
                console.log(error)
                this.editorial = []
            })
        },
        borrarEditorial(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/editorials/${id}`).then(response=>{
                    this.mostrarEditorial()
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