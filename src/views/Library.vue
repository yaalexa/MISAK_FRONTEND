<template>
 <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
          <section>
      <b-container fluid class="">
  <b-row>
    <b-col>
      <b-img  fluid :src="imagem" alt="Image 1" class="text-center"></b-img>
      <router-link exact-active-class="active" to="/dashboard" class="nav-link" aria-current="page">MATERIAL</router-link>
    </b-col>
    <b-col>
      <b-img  fluid :src="imagee" alt="Image 2" class="text-center"></b-img>
      <router-link exact-active-class="active" to="/Editorial" class="nav-link" aria-current="page">EDITORIAL</router-link>
    </b-col>
    <b-col>
      <b-img  fluid :src="imagea" alt="Image 3" class="text-center"></b-img>
      <router-link exact-active-class="active" to="/Autores" class="nav-link" aria-current="page">AUTOR</router-link>
    </b-col>
  </b-row>
 <b-row>
       <b-col>
      <b-img  fluid :src="imagetm" alt="Image 3" class="text-center"></b-img>
      <router-link exact-active-class="active" to="/TipoMaterial" class="nav-link" aria-current="page">TIPO MATERIAL</router-link>
      </b-col>
      <b-col>
       <b-img  fluid :src="imaged" alt="Image 3" class="text-center"></b-img>
      <router-link exact-active-class="active" to="/NivelEducativo" class="nav-link" aria-current="page">NIVEL EDUCATIVO</router-link>
    </b-col>
    <b-col>
      <b-img  fluid :src="imagetarea" alt="Image 3" class="text-center"></b-img>
      <router-link exact-active-class="active" to="/Areas" class="nav-link" aria-current="page">AREAS</router-link>
    </b-col>
     </b-row>
    </b-container>
 
</section>
</div>

</div>


</template>
<script>
import Header from '@/components/Header.vue';
import imagem from "@/assets/material.png";
import imagee from "@/assets/Editorial.png";
import imagea from "@/assets/autor.png";
import imaged from "@/assets/nivel.png";
import imagetm from "@/assets/tipotm.png";
import imagetarea from "@/assets/aream.png";
import axios from 'axios';
export default {
    name:"welcome",
    data(){
        return {
            material:null,
            pagina:1,
            imagem: imagem,
            imagee: imagee,
            imagea:imagea,
            imaged:imaged,
            imagetm:imagetm,
            imagetarea:imagetarea
        }
    },
    components:{
        Header,
      //  Footer
    },
 
}
</script>
<style  scoped>
 body{
        margin: 0%;
    }
    .pantalla{
    background-image:url("@/assets/Screenshot_2.png");
       background-repeat:no-repeat;
	    background-size:cover;
        display: flex;
        filter: alpha(opacity=50);
        width:100%;
   	 height:100vh;
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
    
   
.text-center {
  width:50%;
  position: flex;
  background-position: center center;
  background-size: 100px auto;
  margin-top: 2em;

}

</style>