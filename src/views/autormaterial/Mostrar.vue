<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>ASIGNACION AUTOR</h1> 
                <label for="" class="control-label col-sm-2">NOMBRE MATERIAL</label>
                <input type="text" id="nombrematerial" name="nombrematerial" v-model="nombrematerial" disabled=isDisabled>
                <a type="button" @click="crearautor()" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Asignar Autor</a>
                 <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="Author_material in Author_material" :key="Author_material.id">
                            <td>{{ Author_material.id }}</td>
                            <td>{{ Author_material.name }}</td>
                            <td>
                               <!-- <router-link :to='{name:"EditarEditorial", params:{id:authors.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link> -->
                                <a type="button" @click="borrarautorasignado(Author_material.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    
    name:"MostrarAutoresmaterial",
    data(){
        return {
            Author_material:null,
            Autores:null,
            nombrematerial:null,
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted:function(){
        this.nombrematerial=this.$route.params.name;
        let direccion = `http://127.0.0.1:8000/api/author_materials/${this.$route.params.id}`;
        axios.get(direccion).then((result) => {
        this.Author_material = result.data;
        });
       
        
    },
    methods:{
        crearautor(){
            this.$router.push(`/AsignarAutores/${this.$route.params.id}`);
        },
        borrarautorasignado(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/author_materials/${id}`).then(response=>{
                    //this.mostrarAutores()
                }).catch(error=>{
                    console.log(error)
                });
                this.$router.push("/autormaterial/:id,:name");
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