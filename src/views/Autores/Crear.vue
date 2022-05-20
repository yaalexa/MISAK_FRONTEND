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
                    
                      <div class="contenedorautor">
                    <section>
                        <h1>Crear Autor</h1>
                         <div class="col-sm-12">
		     <div class="row">
			     <div class="col-xs-4">
                     <label class="lastname">Nombre Completo:</label>
                     </div>
				<div class ="col-xs-8">	 
		             <input type="text" name="nombre" id="nombre" placeholder="Ingrese Nombre Completo" v-model="Autor.name"  class="form-control last">
                </div>
		     </div>
		 </div>

                    <div class="col-sm-12">
             <div class="row">
			     <div class="col-xs-4">
          	         <label class="firstname">Direccion :</label> </div>
		         <div class="col-xs-8">
		             <input type="text" name="fname" id="name" placeholder="Ingrese Direccion"  v-model="Autor.address"  class="form-control ">
             </div>
		      </div>
		 </div>
               <div class="col-sm-12">
             <div class="row">
			     <div class="col-xs-4">
          	         <label class="firstname">Telefono :</label> </div>
		         <div class="col-xs-8">
		             <input type="text" name="fname" id="name" placeholder="Ingrese Telefono"  v-model="Autor.phone"  class="form-control ">
             </div>
		      </div>
		 </div>
    
                      
                    </section>
                </div>   
                <div class="botonautor">
                    <button type="submit" class="btn btn-warning">Guardar</button>
                    <button type="button" class="btn btn-secondary" v-on:click="salir()"  >  Salir  </button>
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
        },
        salir(){
           this.$router.push({name:"MostrarAutor"})
        },
    }
}
</script>