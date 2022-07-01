<template>
  <div class="pantalla">
    <div class="cara1 ">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <b-container fluid class="">
          <b-row>
            <b-col>
              <b-img
                fluid
                :src="imagem"
                alt="Image 1"
                class="text-center"
              ></b-img>
              <router-link
                id="material"
                exact-active-class="active"
                to="/dashboard"
                class="nav-link"
                aria-current="page"
                >MATERIAL</router-link
              >
              <b-tooltip target="material" triggers="hover">
                Crea nuevos <b>Materiales</b> 
              </b-tooltip>
            </b-col>
            <b-col>
              <b-img
                fluid
                :src="imagee"
                alt="Image 2"
                class="text-center"
              ></b-img>
              <router-link
                id="editorial"
                exact-active-class="active"
                to="/Editorial"
                class="nav-link"
                aria-current="page"
                >EDITORIAL</router-link
              >
              <b-tooltip target="editorial" triggers="hover">
                Crea nuevos <b>Editoriales</b> 
              </b-tooltip>
            </b-col>
            <b-col>
              <b-img
                fluid
                :src="imagea"
                alt="Image 3"
                class="text-center"
              ></b-img>
              <router-link
                id="Autor"
                exact-active-class="active"
                to="/Autores"
                class="nav-link"
                aria-current="page"
                >AUTOR</router-link
              >
              <b-tooltip target="Autor" triggers="hover">
                Crea nuevos <b>Autores</b> 
              </b-tooltip>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-img
                fluid
                :src="imagetm"
                alt="Image 3"
                class="text-center"
              ></b-img>
              <router-link
                id="TipoM"
                exact-active-class="active"
                to="/TipoMaterial"
                class="nav-link"
                aria-current="page"
                >TIPO MATERIAL</router-link
              >
              <b-tooltip target="TipoM" triggers="hover">
                Crea nuevos <b>Tipos de Materiales</b> 
              </b-tooltip>
            </b-col>
            <b-col>
              <b-img
                fluid
                :src="imaged"
                alt="Image 3"
                class="text-center"
              ></b-img>
              <router-link
                id="NivelE"
                exact-active-class="active"
                to="/NivelEducativo"
                class="nav-link"
                aria-current="page"
                >NIVEL EDUCATIVO</router-link
              >
              <b-tooltip target="NivelE" triggers="hover">
                Crea nuevos <b>Niveles Educativo</b> 
              </b-tooltip>
            </b-col>
            <b-col>
              <b-img
                fluid
                :src="imagetarea"
                alt="Image 3"
                class="text-center"
              ></b-img>
              <router-link
                id="Areas"
                exact-active-class="active"
                to="/Areas"
                class="nav-link"
                aria-current="page"
                >AREAS</router-link
              >
              <b-tooltip target="Areas" triggers="hover">
                Crea nuevos <b>Áreas</b> 
              </b-tooltip>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import imagem from "@/assets/material.png";
import imagee from "@/assets/Editorial.png";
import imagea from "@/assets/autor.png";
import imaged from "@/assets/nivel.png";
import imagetm from "@/assets/tipotm.png";
import imagetarea from "@/assets/aream.png";
import axios from "axios";
export default {
  name: "welcome",
  data() {
    return {
      material: null,
      pagina: 1,
      imagem: imagem,
      imagee: imagee,
      imagea: imagea,
      imaged: imaged,
      imagetm: imagetm,
      imagetarea: imagetarea,
    };
  },
  components: {
    Header,
    Menu,
  },
};
</script>
<style  scoped>
body {
  margin: 0%;
}
.pantalla {
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  filter: alpha(opacity=50);
  width: 100%;
  height: 100vh;
}
.cara1 {
  width: 20%;
  min-width: 10%;
  height: min-content;
}
.cara2 {
  width: 80%;
  height: 100vh;
  overflow: auto;
}

.text-center {
  width: 50%;
  position: flex;
  background-position: center center;
  background-size: 100px auto;
  margin-top: 2em;
}
@media only screen and (max-width: 767px) {
  .nav-link {
    color: #16223f !important;
  }
  .cara2{
    flex-wrap: wrap;
  }

}
</style>