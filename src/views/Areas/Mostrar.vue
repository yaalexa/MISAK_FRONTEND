[8:35 p. m., 11/5/2022] Erika Maca: <template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <div class="tablas">
                <h1>AREAS </h1> 
                <button class="btn btn-success" v-on:click="crear()" >Crear Area</button>
               
                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                    <b-table id="my-table" :items="Areas" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table" :style="{ width:'80%' ,  }">
                            <template #cell(Acciones)="row">
                            <router-link :to='{name:"EditarAreas", params:{id:row.item.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarAreas(row.item.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                                 </template>
                    </b-table>
                
                </div>
            </section>    
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"MostrarAreas",
    data(){
        return {
            perPage: 7,
           currentPage: 1,
            Areas:[],
            fields: [
                {key: 'id', label: '#',},
                {key: 'name', label: 'Nombre'},
                "Acciones"
                ]
        }
    },
    components:{
        Header,
      //  Footer
    },
    computed: {
      rows() {
        return this.Areas.length
      }
    },
    mounted(){
        this.mostrarAreas()
    },
    methods:{
        async mostrarAreas(){
            await this.axios.get('http://127.0.0.1:8000/api/areas').then(response=>{
                this.Areas = response.data
            }).catch(error=>{
                console.log(error)
                this.Areas = []
            })
        },
        crear(){
                this.$router.push('/CrearAreas');
            },
        borrarAreas(id){
            console.log(id);
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/areas/${id}`).then(response=>{
                    this.mostrarAreas()
                }).catch(error=>{
                    console.log(error)
                })
            }
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
        margin-bottom: 10px;
        width:80%;
        vertical-align: 'middle'
    }
     .tablas{
        margin-left: 100px;
        align-content: center;
           
    }
  /*   .contendortabla{
        width: 80%;
        align-items: center;
    }
     */
</style>