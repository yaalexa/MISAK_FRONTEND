<template>
 <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
          <section>

            <div class="container  izquierda">
                 <h1>NUEVO MATERIAL</h1>
                 <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="name" id="name" v-model="form.name">
                       </div>
                    </div>
                  <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Año</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="year" id="year" v-model="form.year">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">ISBN</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="isbn" id="isbn" v-model="form.isbn">
                          </div>
                        </div> 
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3"># Paginas</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="num_pages" id="num_pages" v-model="form.num_pages">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">Prioridad</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="priority" id="priority" v-model="form.priority">
                          </div>
                        </div> 
                    </div>
                   <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Pdf</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="pdf" id="pdf" v-model="form.pdf">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">Imagen</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control"  name="img" id="img" v-model="form.img">
                          </div>
                        </div> 
                    </div>
                   
                    <div class="form-group left row">
                     <!--  <div class="col">
                            <label for="" class="control-label col-sm-3">USUARIO MATERIAL</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="material_users_id" id="material_users_id" v-model="form.material_users_id">
                            </div>
                        </div>-->
                   
                        <div class="col">
                          <label for="" class="control-label col-sm-3">Tipo </label>
                          <div class="col-sm-7">
                             <select class="form-control" v-model="form.TipoMaterial">
                                <option v-for="TipoMaterial in TipoMaterial" v-bind:value="TipoMaterial.id"> {{ TipoMaterial.name }}
                                </option>
                                </select>
                            </div>
                          </div>
                          <div class="col">
                          <label for="" class="control-label col-sm-5">Editorial</label>
                          <div class="col-sm-7">
                             <select class="form-control" v-model="form.editorial">
                                <option v-for="editorial in editorial" v-bind:value="editorial.id"> {{ editorial.name }}
                                </option>
                                </select>
                                
                          </div>
                        </div> 
                       
                    </div>
                     <div class="form-group left row">
                    <div class="col">
                          <label for="" class="control-label col-sm-3">Areas </label>
                          <div class="col-sm-7">
                             <select class="form-control" v-model="form.areas">
                                <option v-for="areas in areas" v-bind:value="areas.id"> {{ areas.name }}
                                </option>
                                </select>
                              
                               
                            </div>
                            
                          </div>
                    </div>
                    <!--
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">ID AUTOR</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="author_books_id" id="author_books_id" v-model="form.author_books_id">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">EDITORIAL ID</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="editorial_id" id="editorial_id" v-model="form.editorial_id">
                          </div>
                        </div> 
                    </div>
                  <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">ID AREA</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="area_id" id="area_id" v-model="form.area_id">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">ID NIVELES DE EDUCACION</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="material_educational_leves_id" id="material_educational_leves_id" v-model="form.material_educational_leves_id">
                          </div>
                        </div> 
                    </div>
                    -->

                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>


            </div>
        <!-- <Footer /> -->
</section>
</div>

</div>
</template>
<script>
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
    data:function(){
        return {
            TipoMaterial:null,
            editorial:null,
            selected:"",
            form:{
                "name":"",
                "isbn" : "",
                "year": "", 
                "num_pages" : "",
                "priority":"",
                 "img" : "",
                "pdf" :""
            }
        }
    },
    mounted(){
           let direccion = "http://localhost:8000/api/type_materials";
        axios.get(direccion).then((result) => {
        this.TipoMaterial = result.data;
        });
        let direccion2 = "http://127.0.0.1:8000/api/editorials";
        axios.get(direccion2).then((result) => {
        this.editorial = result.data;
        });
        let direccion3 = "http://127.0.0.1:8000/api/areas";
        axios.get(direccion3).then((result) => {
        this.areas = result.data;
        });
    },
    components:{
        Header,
        //Footer
    },
    methods:{
       
        guardar(){
            
            axios.post("http://127.0.0.1:8000/api/materials",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","materila creado","success");
                this.$router.push("/dashboard");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
        },
        salir(){
            this.$router.push("/dashboard");
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
        width: 70%;
    }
</style>