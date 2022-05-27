
<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        
          <div class="cara2">      
                        <section>
                    <h1>USUARIOS</h1>  
                    <div class="contenedortabla">
                   <button class="btn btn-warning" v-on:click="unuevo()" >Registrar nuevo usuario</button>
                
                  <b-table id="my-table" :items="usuarios" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table">
                    <template #cell(Acciones)="row">
                        <router-link :to='{name:"actualizarUsuario", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" />Editar Usuario</router-link>
                        <a type="button" @click="borrarUsuario(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                        
                    </template>
                 
                  </b-table>
                   <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
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
      data(){
        return {
            perPage: 7, //numero de filas que va  atener por pagina
            currentPage: 1, //donde va a iniciar la paginacion
            Usuarios:[],
             fields: [
                {key: 'id', label: '#'},
                {key: 'name', label: 'Nombre'},
                {key: 'full name', label: 'Nombre completo'},
                {key: 'document_type', label: 'Tipo de documento'},
                {key: 'document_number', label: 'Número de documento'},
                {key: 'certificate_misak', label: 'Certificado Misak'},
                {key: 'email', label: 'Email'},
                "Acciones"
                ]
        }
    },
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
        width: 80%;
        height: 100vh;
        overflow:auto;
    }
    .izquierda{
        text-align: left;
       
    }
      .contenedortabla{
        width: 80%;
        text-align: center;
        
    }
   
</style>