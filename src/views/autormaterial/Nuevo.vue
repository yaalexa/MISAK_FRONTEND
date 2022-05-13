<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>AUTORES PARA ASIGNAR</h1> 
                <a type="submit" @click="nuevaasignacion()" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Guardar</a>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirrecion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Asignar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="Autores in Autores" :key="Autores.id">
                            <td>{{ Autores.id }}</td>
                            <td>{{ Autores.name }}</td>
                            <td>{{ Autores.address }}</td>
                            <td>{{ Autores.phone }}</td>
                            <td>
                               <input type="checkbox" id="" :value="Autores.id" v-model="formData.author_id"> 
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
            Autores:[],
            formData: {
                author_id:[],
                material_id:""
            }          
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
        asignarAutores(id){
            this.axios.post(`http://127.0.0.1:8000/api/author_materials/${this.$route.params.id},${id}`).then((data) => {
            console.log(data);
            this.makeToast("Hecho", "material creado", "success");
            this.$router.push("/autormaterial");
        })

        },
        nuevaasignacion() {
            let formDataAutor = new FormData();
            formDataAutor.append("material_id", this.$route.params.id);
            formDataAutor.append("author_id", this.formData.author_id);
            axios
                .post("http://127.0.0.1:8000/api/author_materials", formDataAutor)
                .then((data) => {
                console.log(data);
                this.alert("Hecho", "autor asignado creado", "success");
                })
                .catch((e) => {
                console.log(e);
                this.makeToast("Error", "Error al guardar", "error");
                });
                this.$router.push("/dashboard");

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