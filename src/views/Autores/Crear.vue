<template>
<div>
     <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <form @submit.prevent="crear">
                    <div>
                        <h1>Crear Autores</h1>
                        <label for="">name: </label>
                        <input type="text" v-model="Autor.name">
                        <label for="">address: </label>
                        <input type="text" v-model="Autor.address">
                        <label for="">phone: </label>
                        <input type="text" v-model="Autor.phone">
                        <br><br>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>    
                </form>    
            </section>

        </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios'
export default {
    name:"CrearAutor",
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
    methods:{
        async crear(){
            await this.axios.post('http://127.0.0.1:8000/api/authors',this.Autor).then(response=>{
                this.$router.push({name:"MostrarAutor"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>