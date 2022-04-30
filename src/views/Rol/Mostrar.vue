<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>

    <div class="cara2">
            <section>
                    <h1> Roles </h1>
                 
                 <form  class="form-horizontal">
                     <div class="form-group row">
                        <label for="" class="control-label"> Nuevo rol </label>

                        <div class="col-sm-4">
                            <!-- <input type="text" class="form-control"   v-model="form.name" placeholder="Ejemplo: Admin"> -->
                        </div>
                        

                        <div class="col-sm-4">
                            <button type="button" class="btn btn-primary" v-on:click="crearRol()"> Crear </button>
                           <!-- <router-link :to='{name:"CrearRol",params:{name:form.name}}' class="btn btn-info"><i class="fas fa-edit"> Crear </i></router-link> -->
                        </div>
                    </div>
                 </form> 
                  <div class="form-group left">
                       
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  > Salir </button>
                 </div>
                    <br>
                    <div class="form-group">
                      <!-- <button type="button" class="btn btn-primary" v-on:click="guardar()" > Buscar </button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  > Salir </button> -->
                      <div class="col-12 mb-2" >
                            <!-- llamamos al componente para Crear rol  -->
                            <!-- <router-link :to='{name:"mostrar"}' class="btn btn-success"><i class="fas fa-plus-circle"> Mostrar Roles</i></router-link> -->
                       </div>
                    </div>

                    <br>
                    
                    <div class="col-12">             
                       <div class="table-responsive">
                          <table class="table table-bordered">
                             <thead class="bg-primary text-white">
                                <tr>
                                   <th>ID</th>
                                   <th>Nombre</th>
                                   <th>Accion</th>
                                </tr>
                             </thead>
                             <tbody>
                                <tr v-for="rol in rol" :key="rol.id">
                                   <td>{{ rol.id }}</td>
                                   <td>{{ rol.name }}</td>
                                   <td>
                                       <!-- llamamos al componente para Editar     -->
                                       <router-link :to='{name:"EditarRol",params:{id:rol.id}}' class="btn btn-info"><i class="fas fa-edit"> editar </i></router-link>
                                        <a type="button" @click="borrarRol(rol.id)" class="btn btn-danger"><i class="fas fa-trash">eliminar</i></a>
                                    </td>
                                </tr>
                             </tbody>
                                
                            </table>
                        </div>                          
                    </div>   
            
        <!-- <Footer /> -->
</section>
    </div>  
    </div>
</template>
<script scope>
import Header from '@/components/Header.vue'
import CrearRol from '@/views/Rol/CrearRol.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"MostrarRol",
    
    
    data:function(){
        return {
            
            rol:[
             
            ], 
            form:{
             "name" : ""
            }
        }
    },
    
    components:{
          Header,
          CrearRol,
        //Footer
    },
    mounted(){
        this.mostrarRol()
    },
    methods:{
        async mostrarRol(){
           await this.axios.get('http://localhost:8000/api/rols').then(response=>{
                this.rol = response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        buscar(){
            this.emailAbuscar.find('email.rol').then(response=>{
                this.rol = response.data
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            /* await this.axios.put(`/api/editorial/${this.$route.params.id}`,this.editorial).then(response=>{
                this.$router.push({name:"mostrarEditorial"})
            }).catch(error=>{
                console.log(error)
            }) */
        },
        async crearRol(){
             this.$router.push("/crearrol");
        },
        borrarRol(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://localhost:8000/api/rols/${id}`).then(response=>{
                    this.mostrarRol()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },

        guardar(){
            

        },
        
        salir(){
            this.$router.push("/rol");
        },



        makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
        
    }
}
</script>

<style scoped>
.left{
    text-align:  left;
}
.izquierda{
    text-align: left;
    width: 50%;
}
  
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