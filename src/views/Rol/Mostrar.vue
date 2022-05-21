   <template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>

 <div class="cara2">      
                        <section>
                    <h1>ROLES </h1>  
                    <div class="contenedortabla">
                 <router-link :to='{name:"CrearRol"}' class="btn btn-success">Crear Rol</router-link>
                 <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                  <b-table id="my-table" :items="Rol" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                    <template #cell(Acciones)="row">
                        <router-link :to='{name:"EditarRol", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" />Editar</router-link>
                        <a type="button" @click="borrarRol(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                       
                    </template>
                 
                  </b-table>
        </div> 
      <!--   <section>       
       <div class="control-label-col-sm-7" style="text-alingn:left">
           <div class="input group" style="text-alingn:right">
               <b-form-input
               v-model="filter"
               type="search"
               placeholder="Buscar"></b-form-input>
               </div>
               </section> -->
                             
</section>
    </div>  
    </div>
       
</template>
<script scope>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"MostrarRol",
       
    data:function(){
        return {

            perPage: 7, //numero de filas que va  atener por pagina
            currentPage: 1, //donde va a iniciar la paginacion
            Rol:[],
             fields: [
                {key: 'id', label: '#',},
                {key: 'name', label: 'Nombre'},
                "Acciones"
                ],
        }
    },
    
    components:{
          Header,
          CrearRol,
        //Footer
    },
     computed: {
      rows() {
        return this.rol.length
      }
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
                 this.rol= []
            })
        },

        async crearRol(){
             this.$router.push("/CrearRol");
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

        nuevoRol() {
            let formDataRol = new FormData();
            formDataRol.append("rol_id", this.$route.params.id);
            formDataRol.append("name", this.formData.name);
            axios
                .post("http://127.0.0.1:8000/api/rols", formDataRol)
                .then((data) => {
                console.log(data);
                this.alert("Hecho", "Rol creado", "success");
                })
                .catch((e) => {
                console.log(e);
                this.makeToast("Error", "Error al guardar", "error");
                });
                this.$router.push("/dashboard");
        },
        
        salir(){
            this.$router.push("/Header");
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
      .table thead{
   background-color: #23282e;
   text-align: center;
   font-size: 14px;
   background-image:url("@/assets/fondo.png") ;
   opacity: 0.7;
   color:white;
    }
    .contenedortabla{
        width: 80%;
        text-align: center;
        margin-left: 20%;
        border-radius: 5px;
        color: black; 
        text-decoration: none;
        font-size: 18px;
        text-align: center;
    
    }
</style>