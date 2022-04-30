<template>
<div>
   <div>
     <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <form @submit.prevent="actualizar">
                <div>
                    <section>
                        <h1>Editar Autor</h1>
                        <label for="">Nivel Educativo: </label>
                        <input type="text" v-model="Autor.name">
                        <label for="">Autor: </label>
                        <input type="text" v-model="Autor.address">
                        <label for="">Autor: </label>
                        <input type="text" v-model="Autor.phone">
                        <br><br>
                    </section>
                </div>   
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>  
            </form>        

        </div>
    </div>
</div>
</div>

</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"EditarAutor",
    data(){
        return {
            Autor:{
                name:"",
                address:"",
                phone:""
            }
        }
    },
     components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarAutor()
    },
    methods:{
        async mostrarAutor(){
            await this.axios.get(`http://127.0.0.1:8000/api/authors/${this.$route.params.id}`).then(response=>{
                const { name} = response.data
                this.Autor.name = name
              
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`http://127.0.0.1:8000/api/authors/${this.$route.params.id}`,this.Autor).then(response=>{
                this.$router.push({name:"MostrarAutor"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>