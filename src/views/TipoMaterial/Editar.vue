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
               <h1>EDITAR TIPO MATERIAL</h1>  
            
                <form action="" class="form-horizontal">
                   <div class="col">
                    <div class="form-group left">
                       <div class="col-sm-10">
                         <label for="" class="control-label col-sm-3">Nombre</label>
                          <input type="text" class="form-control" name="name" id="name" v-model="form.name">
                       </div>
                    </div>
                 
                 
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                     
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                     </div>
                 
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
  name:"EditarTipoMaterial",
  components:{
    Header,
    //Footer
  },
  data:function(){
    return {
        form:{
          "name":"",
           
        }
    }
  },
  methods:{
      editar(){
          axios.put(`http://localhost:8000/api/type_materials/${this.form.TipoMaterialid}`,this.form)
          .then(response=>{
              console.log(response);
              this.$router.push("/TipoMaterial");
          })
      },
      salir(){
        this.$router.push("/TipoMaterial");
      },
      eliminar(){
        var enviar = {
            "TipoMaterialid" : this.form.TipoMaterialid,
          
        };
        axios.delete("http://localhost:8000/api/type_materials", { headers : enviar})
        .then( datos => {
            console.log(datos);
           this.$router.push("/TipoMaterial");
        });

      }
  },
  mounted:function(){
      this.form.TipoMaterialid = this.$route.params.id;
      axios.get("http://localhost:8000/api/type_materials/?id="+ this.form.TipoMaterialid)
      .then( datos => {
        this.form.name = datos.data[0].name;
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