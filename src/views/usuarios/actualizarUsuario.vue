<template>

   <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <form @submit.prevent="actualizar">
                <div class="contenedorusuario">
                    <section>
                        <h4>Editar Usuario</h4>            
                        <div class="col-sm-12">
		     <div class="row">
			     <div class="col-xs-4">
                     <label class="lastname">Nombre Completo:</label>
                     </div>
				<div class ="col-xs-8">	 
                    
		             <input type="text" name="lname" id="full_name" v-model="Usuario.full_name" placeholder="Enter your Last Name" class="form-control last">
                </div>
		     </div>
		 </div>

                    <div class="col-sm-12">
             <div class="row">
			     <div class="col-xs-4">
          	         <label class="firstname">Usuario :</label> </div>
		         <div class="col-xs-8">
		             <input type="text" name="fname" id="name" v-model="Usuario.name" placeholder="Enter your First Name" class="form-control ">
             </div>
		      </div>
		 </div>
    
		 <div class="col-sm-12">
		     <div class="row">
			     <div class="col-xs-4">
		             <label class="mail" >Email :</label></div>
			     <div class="col-xs-8"	>	 
			          <input type="email" name="email"  id="email" v-model="Usuario.email" placeholder="Enter your email" class="form-control" >
		         </div>
		     </div>
		 </div>


                               <div class="col-sm-12">
             <div class="row">
			     <div class="col-xs-4">
          	         <label class="firstname">Tipo de Documento: </label></div>
                        <div class="col-xs-8">
                       <select name="document_type" id="document_type" v-model="Usuario.document_type" class="form-control ">
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
		            <input type="text" name="document_number" id="document_number" v-model="Usuario.document_number" placeholder="Número de documento" class="form-control ">
             </div>
		      </div>
		 </div>
	 
          <div class="col-sm-12">
		         <div class="row">
				     <div class="col-xs-4">
		 	              <label class="pass">Password :</label></div>
				  <div class="col-xs-8">
			             <input type="password" name="password" id="password" v-model="Usuario.password" placeholder="Enter your Password" class="form-control">
				 </div>
          </div>
		  </div>
                      <div class="col-sm-12">
		         <div class="row">
				     <div class="col-xs-4">
		 	              <label class="pass">confirmar Password :</label></div>
				  <div class="col-xs-8">
			             <input type="password" name="password" id="password_confirmation" v-model="Usuario.password_confirmation" placeholder="Enter your Confirmation Password" class="form-control">
				 </div>
          </div>
		  </div>

                      <div class="col-sm-12">
		         <div class="row">
				     <div class="col-xs-4">
		 	              <label class="pass">Certificado misak</label>
                     </div>
				  <div class="col-xs-8">
			             <input type="text" name="certificado misak" id="certificate_misak" v-model="Usuario.certificate_misak" placeholder="Certificado misak" class="form-control">
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
                                <option v-for="rol in rol" v-bind:value="Usuario.rol_id"> {{ rol.name }}
                                </option>
                                </select>                
				 </div>
          </div>
		  </div>
         
            </section>
            </div>
            <div class="botonusuario">
                    <button type="submit" class="btn btn-warning">Guardar</button>
                    <button type="button" class="btn btn-secondary" v-on:click="salir()"  >  Salir  </button>
            </div>  
      </form>
                </div>
                
            </div>
        
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
            rol:null,
            Usuario:{
                name:"",
                full_name:"",
                email:"",
                password:"",
                password_confirmation:"",
                document_type:"", 
                document_number:"",
                certificate_misak:"",
                rol_id:"",  
        }
        }
    },
      
    mounted(){
        var token = JSON.parse(sessionStorage.getItem("user"));
        this.mostrarusuario()
        this.axios.get('http://localhost:8000/api/rols', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }}).then(response=>{
                this.rol = response.data
            });
    },
    methods:{
        salir(){
            this.$router.push({name:"/usuarios"})
            },
            async mostrarusuario(){
                axios.get("http://127.0.0.1:8000/api/users/"+ this.$route.params.id)
                .then(datos => {
                    this.Usuario.name = datos.data[0].name;
                    this.Usuario.full_name = datos.data[0].full_name;
                    this.Usuario.email = datos.data[0].email;
                    this.Usuario.password = datos.data[0].password;
                    this.Usuario.password_confirmation = datos.data[0].password_confirmation;
                    this.Usuario.document_type = datos.data[0].document_type;
                    this.Usuario.document_number = datos.data[0].document_number;
                    this.Usuario.certificate_misak = datos.data[0].certificate_misak;
                    this.Usuario.rol_id = datos.data[0].rol_id;
                })
            },
            async actualizar(){
                await this.axios.put(`http://127.0.0.1:8000/api/users/${this.$route.params.id}`,this.Usuario).then(response=>{
                   // this.$router.push({name:"/usuarios"})
                }).catch(error=>{
                    console.log(error)
                })
        }
     }
        /*
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
    }*/
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
    .contenedorusuario{
      margin-top: 3%;
      width: 70%;
      display: block;
      margin-left: 10%;
    }
    .botonautor{
        margin:5%;
    }
   
</style>