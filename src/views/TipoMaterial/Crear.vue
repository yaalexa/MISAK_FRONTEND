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
                 <h1>NUEVO TIPO MATERIAL</h1>
                 <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="name" id="name" v-model="form.name">
                       </div>
                    </div>
                 

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
    name:"CrearTipoMaterial",
    data:function(){
        return {
            form:{
                "name":"",

            }
        }
    },
    components:{
        Header,
        //Footer
    },
    methods:{
        guardar(){
            
            axios.post("http://127.0.0.1:8000/api/type_materials",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","TipoMaterial creado","success");
                this.$router.push("/TipoMaterial");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
        },
        salir(){
            this.$router.push("/TipoMaterial");
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
</style>