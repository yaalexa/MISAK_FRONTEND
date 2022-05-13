<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>

    <div class="cara2">
            <section>       
 
      <div class="col-md-12">
      
        <h1>MATERIAL </h1> 
                   
 
      </div>
 
    
 
    <div class="row mt-3">
        <input class="w-full rounded-lg p-4 m-4" placeholder="Buscar " type="text" v-model="search">
      
 
    </div>

                <button class="btn btn-success" v-on:click="nuevo()" >Nuevo Material</button>
                <br><br>
                <table class="table table-hover">
                <thead>
                    <tr>
                                     <th>#</th>
                                    <th>NOMBRE</th>
                                    <th>ISB</th>
                                    <th>AÑO</th>
                                    <th>PAGINAS</th>
                                    <!--
                                    <th>priority</th>
                                    <th>PDF</th>
                                    <th>IMAGEN</th>-->
                                    <!--
                                    <th>material_users_id</th>
                                    <th>type_material_id</th>
                                    <th>author_books_id</th>
                                    <th>editorial_id</th>
                                    <th>area_id</th>
                                    <th>material_educational_leves_id</th>-->
                                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr v-for="material in material" :key="material.id">
                                    <td>{{ material.id }}</td>
                                    <td>{{ material.name }}</td>
                                    <td>{{ material.isbn }}</td>
                                    <td>{{ material.year }}</td>
                                    <td>{{ material.num_pages }}</td>
                                   <!--
                                    <td>{{ material.priority }}</td> 
                                    <td>{{ material.pdf }}</td>
                                    <td>{{ material.img }}</td> -->
                                     <!--
                                    <td>{{ material.material_users_id }}</td>
                                    <td>{{ material.type_material_id }}</td>
                                    <td>{{ material.author_books_id }}</td>
                                    <td>{{ material.editorial_id }}</td>
                                    <td>{{ material.area_id }}</td>
                                    <td>{{ material.material_educational_leves_id }}</td>-->
                                     <td>
                                    <!--
                                    <button class="btn btn-primary btn-sm" @click="editar(material.id)">+</button>
                                   
                                    <button class="btn btn-secondary btn-sm" @click="editar(material.id)">-</button>-->
                                    <router-link :to='{name:"Editar", params:{id:material.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrar(material.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                                 <a type="button" @click="autormaterial(material.id, material.name)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Asignacion Autor</a>
                                </td>
                                   
                    </tr>
                     
                </tbody>
                </table>

           
            </section>
 </div>
      
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
            material:null,
            pagina:1,
            list : null,
             search: ""
        }
    },
    components:{
        Header,
      //  Footer
    },
    methods:{
            editar(id){
                this.$router.push('/editar/' + id);
            },
            nuevo(){
                this.$router.push('/nuevo');
            },
             borrar(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/materials/${id}`).then(response=>{
                     this.$router.push("/dashboard");
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
          autormaterial(id, name){
                //this.$router.push('/autormaterial/' +id);
                this.$router.push({name: "autormaterial",params:{id: id, name: name}
});
            },
     
    },
    
    mounted:function(){
        let direccion = "http://localhost:8000/api/materials";
        axios.get(direccion).then((result) => {
        this.material = result.data;
        });
        
    }


    
}
</script>
<style  scoped>
   
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