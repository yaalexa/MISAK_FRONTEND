<template>
   <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
                <section><h4>Editar Usuario</h4>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
		 
         <div class="col-sm-12">
		     <div class="row">
			     <div class="col-xs-4">
                     <label class="lastname">Nombre Completo:</label>
                     </div>
				<div class ="col-xs-8">	 
                    
		             <input type="text" name="lname" id="full_name" v-model="full_name" placeholder="Enter your Last Name" class="form-control last">
                </div>
		     </div>
		 </div>

                    <div class="col-sm-12">
             <div class="row">
			     <div class="col-xs-4">
          	         <label class="firstname">Usuario :</label> </div>
		         <div class="col-xs-8">
		             <input type="text" name="fname" id="name" v-model="name" placeholder="Enter your First Name" class="form-control ">
             </div>
		      </div>
		 </div>
    
		 <div class="col-sm-12">
		     <div class="row">
			     <div class="col-xs-4">
		             <label class="mail" >Email :</label></div>
			     <div class="col-xs-8"	>	 
			          <input type="email" name="email"  id="email" v-model="email" placeholder="Enter your email" class="form-control" >
		         </div>
		     </div>
		 </div>


                               <div class="col-sm-12">
             <div class="row">
			     <div class="col-xs-4">
          	         <label class="firstname">Tipo de Documento: </label></div>
                        <div class="col-xs-8">
                       <select name="document_type" id="document_type" v-model="document_type" class="form-control ">
                             <br>
                             <option value="CC">Cedula ciudadania</option>
                             <option value="CE">Cedula De Extrangeria</option>
                             <option value="TI">Targeta de identidad</option>
                               <option value="PEP">PEP</option>

                             </select>   
             </div>
		      </div>
		 </div>

               <div class="col-sm-12">
             <div class="row">
			     <div class="col-xs-4">
          	         <label class="firstname">Numero de Documento :</label> </div>
		         <div class="col-xs-8">
		            <input type="text" name="document_number" id="document_number" v-model="document_number" placeholder="Número de documento" class="form-control ">
             </div>
		      </div>
		 </div>
	 
          <div class="col-sm-12">
		         <div class="row">
				     <div class="col-xs-4">
		 	              <label class="pass">Password :</label></div>
				  <div class="col-xs-8">
			             <input type="password" name="password" id="password" v-model="password" placeholder="Enter your Password" class="form-control">
				 </div>
          </div>
		  </div>
                      <div class="col-sm-12">
		         <div class="row">
				     <div class="col-xs-4">
		 	              <label class="pass">confirmar Password :</label></div>
				  <div class="col-xs-8">
			             <input type="password" name="password" id="password_confirmation" v-model="password_confirmation" placeholder="Enter your Confirmation Password" class="form-control">
				 </div>
          </div>
		  </div>

                      <div class="col-sm-12">
		         <div class="row">
				     <div class="col-xs-4">
		 	              <label class="pass">Certificado misak</label>
                     </div>
				  <div class="col-xs-8">
			             <input type="text" name="certificado misak" id="certificate_misak" v-model="certificate_misak" placeholder="Certificado misak" class="form-control">
				             <br> 

                     </div>
          </div>
          
		  </div>
             <div class="col-sm-12">
		         <div class="row">
				     <div class="col-xs-4">
		 	              <label class="pass">Rol</label></div>
				  <div class="col-xs-8">
			            <select class="form-control" v-model="selected">
                                <option v-for="rol in rol" v-bind:value="rol.id"> {{ rol.name }}
                                </option>
                                </select>
                 
                  
				 </div>
          </div>
		  </div>
         
      
            <div>
            <button type="button" class="btn btn-primary" v-on:click="register()">Registrar nuevo usuario</button>            
	 </div> 
         
      </form>
                </div>
                </section>
            </div>
        
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';

export default {
    name:"actualizarUsuario",
    components:{
        Header
    },
    data(){
        
        return {
            response: null,
          form:{
         "name":"",
         "full_name":"",
         "email":"",
         "password":"",
         "password_confirmation":"",
         "document_type":"", 
         "document_number":"",
         "certificate_misak":"",
         "rol_id":"",   
        }
        }
    },
    mounted(){
        this.mostrarusuario()
    },
    methods:{
        async mostrarusuario(){
            await this.axios.get(`http://127.0.0.1:8000/api/users/${this.$route.params.id}`).then(response=>{
                const persons = response.data;
                const user = {
                     name: this.state.name
                 };
              
            }).catch(error=>{
                console.log(error + "get")
            })
        },
        async actualizar(){
            await this.axios.put(`http://127.0.0.1:8000/api/users/${this.$route.params.id}`,this.editorial).then(response=>{
                this.$router.push({name:"mostrarEditorial"})
            }).catch(error=>{
                console.log(error + "put")
            })
        }
    }
}
</script>
<style scoped>
  
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
    .izquierda{
        text-align: left;
        width: 50%;
    }
   
</style>