<template>
  <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>

    <div class="cara2">
            <section>
                
                 <label for="" class="crearrol"> CREAR ROL </label>
                 <br>
                 <br>
              
                      <input type="text" class="namerol" v-model="form.name" placeholder="Nombre del rol" >
                   <br>
                 <br>
              
                      <button type="submit" class="btng">Guardar</button>
                    
             <button type="button" class="btnsalir" v-on:click="salir()"  > Salir </button>
  </section>
    </div>
  </div>

</template>

<script>
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"CrearRol",
    data:function(){
        return {
            form:{
                "name":""
            }
        }
    },
    components:{
        Header,
        //Footer
    },
    mounted(){
        guardar()
        this.$router.push("/Mostrar");
    },
    methods:{
        guardar(){
            this.axios.post("http://127.0.0.1:8000/api/rols",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","rol creado","success");
                this.$router.push("/mostrar");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })

        },
        salir(){
            this.$router.push("/mostrar");
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
  .crearrol{
        background-color: rgba(38, 119, 38, 0.87);
        border-color:  rgba(38, 119, 38, 0.87);
        border-radius: 5px;
        color: white; 
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        width: 100px;
        height: 60px;
    
    }
    .namerol{
        border-radius: 5px;
        width: 350px;
        height: 50px;
        text-decoration: none;
    }
    .btng{
        margin-left: 10px;
        background-color:rgb(0, 140, 255);
        border-color:rgb(0, 174, 255);
        border-radius: 5px;
        color: white; 
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        width: 90px;
        height: 40px;
    }
    .btnsalir{
        margin-left: 10px;
        background-color: rgb(240, 39, 39);
        border-color:rgb(214, 39, 39);
        border-radius: 5px;
        color: white; 
        text-decoration: none;
        font-size: 18px;
        text-align: center;
        width: 90px;
        height: 40px;
    }
</style>