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
               <h1>EDITAR MATERIAL</h1>  
            
                <form action="" class="form-horizontal">
                   <div class="col"></div>
                    <div class="form-group left">
                       <div class="col-sm-10">
                         <label for="" class="control-label col-sm-3">Nombre</label>
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
                          <label for="" class="control-label col-sm-5">PRIORIDAD</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="priority" id="priority" v-model="form.priority">
                          </div>
                        </div> 
                    </div>
                   <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">PDF</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="pdf" id="pdf" v-model="form.pdf">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">IMAGEN</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="img" id="img" v-model="form.img">
                          </div>
                        </div> 
                    </div>
                    <!--
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">USUARIO MATERIAL</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="material_users_id" id="material_users_id" v-model="form.material_users_id">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">ID TIPO DE MATERIAL</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="type_material_id" id="type_material_id" v-model="form.type_material_id">
                          </div>
                        </div> 
                    </div>
                   
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
                   <br> 
                 
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                     
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                     
                 
                </form>
                </div>
            </section>
            </div>
          <!-- <Footer />   -->
        </div>
    
</template>
<script>
import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:"Editar",
  components:{
    Header,
    //Footer
  },
  data:function(){
    return {
        form:{
          "name":"",
          "isbn" : "",
          "year": "", 
          "num_pages" : "",
          "priority":"",
          "pdf" :"",
          "img" : ""     
        }
    }
  },
  methods:{
      editar(){
          axios.put(`http://localhost:8000/api/materials/${this.form.materialid}`,this.form)
          .then(response=>{
              console.log(response);
              this.$router.push("/dashboard");
          })
      },
      salir(){
        this.$router.push("/dashboard");
      },
      eliminar(){
        var enviar = {
            "materialid" : this.form.materialid,
          
        };
        axios.delete("http://localhost:8000/api/materials", { headers : enviar})
        .then( datos => {
            console.log(datos);
           this.$router.push("/dashboard");
        });

      }
  },
  mounted:function(){
      this.form.materialid = this.$route.params.id;
      axios.get(`http://localhost:8000/api/materials/${this.form.materialid}`)
      .then( datos => {
        
        this.form.name = datos.data[0].name;
        this.form.isbn = datos.data[0].isbn;
        this.form.year = datos.data[0].year;
        this.form.num_pages = datos.data[0].num_pages;
        this.form.priority = datos.data[0].priority;
        this.form.num_pages = datos.data[0].num_pages;
        this.form.priority = datos.data[0].priority;
        this.form.pdf = datos.data[0].pdf;
         this.form.img = datos.data[0].img;
        this.form.material_users_id = datos.data[0].material_users_id;
        this.form.type_material_id = datos.data[0].type_material_id;
        this.form.author_books_id = datos.data[0].author_books_id;
        this.form.editorial_id = datos.data[0].editorial_id;
        this.form.area_id = datos.data[0].area_id;
        this.form.material_educational_leves_id = datos.data[0].material_educational_leves_id;
        console.log(this.form);

      })
     
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