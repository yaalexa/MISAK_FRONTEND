<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>AUTORES</h1> 
                <button class="btn btn-success" v-on:click="crear()" >Crear Autor</button>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirrecion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Editar | Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="Autores in Autores" :key="Autores.id">
                            <td>{{ Autores.id }}</td>
                            <td>{{ Autores.name }}</td>
                            <td>{{ Autores.address }}</td>
                            <td>{{ Autores.phone }}</td>
                            <td>
                                <router-link :to='{name:"EditarAutores", params:{id:Autores.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarAutores(Autores.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    name:"MostrarAutor",
    data(){
        return {
            Autores:[]
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarAutores()
    },
    methods:{
        async mostrarAutores(){
            await this.axios.get('http://127.0.0.1:8000/api/authors').then(response=>{
                this.Autores = response.data
            }).catch(error=>{
                console.log(error)
                this.Autores = []
            })
        },
        crear(){
                this.$router.push('/CrearAutor');
            },
        borrarAutores(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/authors/${id}`).then(response=>{
                    this.mostrarAutores()
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