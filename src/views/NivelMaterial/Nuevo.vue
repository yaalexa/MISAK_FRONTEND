<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>NIVELES DE EDUCACION PARA ASIGNAR</h1> 
                <a type="submit" @click="nuevaasignacion()" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Guardar</a>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Asignar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="Nivel in Nivel" :key="Nivel.id">
                            <td>{{ Nivel.id }}</td>
                            <td>{{ Nivel.name }}</td>
                            <td>
                               <input type="checkbox" id="" :value="Nivel.id" v-model="formData.educational_level_id"> 
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
    name:"MostrarNivel",
    data(){
        return {
            Nivel:[],
            formData: {
                educational_level_id:[],
                material_id:""
            }          
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarNivel()
    },
    methods:{
        async mostrarNivel(){
            await this.axios.get('http://127.0.0.1:8000/api/educational_levels').then(response=>{
                this.Nivel = response.data
            }).catch(error=>{
                console.log(error)
                this.Nivel = []
            })
        },
        asignarNivel(id){
            this.axios.post(`http://127.0.0.1:8000/api/material__educational_levels/${this.$route.params.id},${id}`).then((data) => {
            console.log(data);
            this.makeToast("Hecho", "nivel creado", "success");
            this.$router.push("/nivelmaterial");
        })
        },
        nuevaasignacion() {
            let formDataNivel = new FormData();
            formDataNivel.append("material_id", this.$route.params.id);
            formDataNivel.append("educational_level_id", this.formData.educational_level_id);
            axios
                .post("http://127.0.0.1:8000/api/material__educational_levels", formDataNivel)
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