<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>Nivel Edcuativo</h1> 
                 <router-link :to='{name:"CrearNivelEducativo"}' class="btn btn-success">Crear Nivel Educativo</router-link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nivel Educativo</th>
                            <th scope="col">Editar | Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="NivelEducativo in NivelEducativo" :key="NivelEducativo.id">
                            <td>{{ NivelEducativo.id }}</td>
                            <td>{{ NivelEducativo.name }}</td>
                            <td>
                                <router-link :to='{name:"EditarNivelEducativo", params:{id:NivelEducativo.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarNivelEducativo(NivelEducativo.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    name:"MostrarNivelEducativo",
    data(){
        return {
            NivelEducativo:[]
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarNivelEducativo()
    },
    methods:{
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