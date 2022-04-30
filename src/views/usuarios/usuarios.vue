<template>
 <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
        <section>
        <h1>USUARIOS </h1> 
        
        <input type="text" v-model="buscar" class="form-control" placeholder="Ingrese el documento de la persona a buscar "/>

 

        <button class="btn btn-primary" v-on:click="Buscar()" >Buscar</button>
        <button class="btn btn-primary" v-on:click="unuevo()" >Registrar nuevo usuario</button>

        <!--<button class="btn btn-primary" v-on:click="errored=true">Mostrar todo</button>-->
        <br><br>
        <div class="container izquierda" >
                <table class="table table-hover">
                <thead>
                    <tr>
                                     <th>ID</th>
                                    <th>Name</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Tipo Documento</th>
                                    <th># Documento</th>
                                    <th>Codigo Misak</th>
                                     <th>Acciones</th>


                    </tr>
                </thead>
                <tbody>
                    
                        <tr v-for="usuarios in usuarios" :key="usuarios.id">
                                    <td>{{ usuarios.id }}</td>
                                    <td>{{ usuarios.name }}</td>
                                    <td>{{ usuarios.full_name }}</td>
                                    <td>{{ usuarios.email}}</td>                                    
                                    <td>{{ usuarios.document_type}}</td>
                                    <td>{{ usuarios.document_number}}</td>
                                    <td>{{usuarios.certificate_misak}}</td>
                                     <td>
                                 <button class="btn btn-primary" v-on:click="actualizar(usuarios.id)" >Editar</button>
                                <a type="button" @click="borrar(usuarios.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                                </td>
                    </tr>
                     
                </tbody>
                </table>

</div>
</section>
</div>
    </div>
</template>
<script>
//importamos axios
import Header from '@/components/Header.vue'
import axios from 'axios'
export default {
    name:'Usuarios',
      components:{
    Header,
    //Footer
  },
  
    created(){

    },
    data:function(){
        return{
            usuarios: null,
          
           // loading: true,
           // errored:false

        };
    },
      mounted:function(){
        let direccion = "http://localhost:8000/api/users";
        axios.get(direccion).then((result) => {
        this.usuarios = result.data;
        });
        
        
    },
    methods:{
        obtenerUsuarios(){
       // alert('estoy en el metodo');
        axios.get('http://127.0.0.1:8000/api/users').then((respuesta)=>{
            console.log(respuesta.data);
            this.usuarios=respuesta.data
        }).catch((error)=>{
            console.log(error);
        });


        },
        unuevo(){
                this.$router.push('/unuevo');
            },
        actualizar(id){
            this.$router.push('/actualizarusuarios/'+ id);
             
        }
    },
    
}
</script>

<style  scoped>
  
   body{
        margin: 0%;
    }
    .pantalla{
        display: flex;
        overflow:hidden;
    }
    .cara1{
        height: 100vh;
        width: 20%;
        
    }
    .cara2{
        width: 95%;
        height: 100vh;
        overflow:auto;
    }
    .izquierda{
        text-align: left;
        width: 80%;
    }
   
</style>