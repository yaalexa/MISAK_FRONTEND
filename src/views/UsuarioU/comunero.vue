<template>
 <div id="contenedor">
   <div id="cabecera"><Menu1/></div>
       <div id="menu"> 
             <NavdestacadosVue/>
         </div>
       <div id="contenido">
          <div id="contenido2">
          <div class="contenedor4">
          <b-input-group-text>
            <form class="form-inline my-2 my-lg-0">
            <input 
              class="form-control mr-sm-2 buscador"
              type="search"
              placeholder="Buscar por material...."
              aria-label="Search"
              v-model="buscador"
              />
            </form>
            <button type="button" class="btn btn-secondary margen" @click="buscarmaterial(buscador)" v-on:click="errored=true">Buscar</button>
          </b-input-group-text>
        </div>
        <!-- Aqui termina el buscador -V-->
              
     <div v-if="this.errored==false">    
        <VueSlickCarousel v-bind="settings" class="carousel">
 
		    <div  v-for="todos in todos" :key="todos.id" >
          <b-card 
          
            img
            alt=""
            img-top
            tag="articulo"
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
            :footer="`${todos.name}`"
            footer-tag="footer"
            footer-bg-variant="warning"
          >
                
          <b-card-body>
                   <b-img thumbnail center  :src="`http://127.0.0.1:8000/storage/${todos.img}`" class="imagen" fluid alt="Fluid image"></b-img>
                    ISBN: {{ todos.isbn }}
                    <b-card-text>Prioridad: {{ todos.priority }}</b-card-text>
                    <button type="button" class="btn btn-secondary margen" v-on:click="Ver(todos.id,todos.priority)">Ver</button>
                </b-card-body>
          </b-card>
      </div>
  

	</VueSlickCarousel>
  </div> 
     <div v-if="this.errored==true">    
        <VueSlickCarousel v-bind="settings" class="carousel">
 
		    <div  v-for="material in material" :key="material.id" >
          <b-card 
          
            img
            alt=""
            img-top
            tag="articulo"
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
            :footer="`${material.name}`"
            footer-tag="footer"
            footer-bg-variant="warning"
          >
                
          <b-card-body>
                   <b-img thumbnail center  :src="`http://127.0.0.1:8000/storage/${material.img}`" class="imagen" fluid alt="Fluid image"></b-img>
                    ISBN: {{ material.isbn }}
                    <b-card-text>Prioridad: {{ material.priority }}</b-card-text>
                    <button type="button" class="btn btn-secondary margen" v-on:click="Ver(material.id,material.priority)">Ver</button>
                </b-card-body>
          </b-card>
      </div>
  

	</VueSlickCarousel>
  </div> 
     </div>
     </div>
  </div>
</template>

<script>

import axios from "axios";
import Header from "@/components/Header.vue";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Menu1 from "@/components/Menu1.vue";
import NavdestacadosVue from "@/components/NavDestacados.vue";

export default {
  data() {
    return {
     pr:null,
     id:null,
     buscador:null,
    searchText :null,
    setTimeoutBuscador: '',
      settings: {
					"dots": true,
					"slidesToShow": 3,
					"slidesToScroll": 2,
          "infinite": true,
          "speed": 500,
          "rows": 2,
          "slidesPerRow": 1,
          "breakpoint": 1024,
				},
        item: {
          name: '',
         
        },
        material:[],
      perPage: 8,
      currentPage: 1,
      visual:null,
      todos: {
        img: "",
        name: "",
        isbn: "",
        num_pages: "",
        priority: "",
        pdf: "",
        year: "",
      },
      errored:false,
       mtr_usr: {
        manejo_users: "no se que va aqui",
        detalle_material: "visualizado",
        date_download: "2022-05-18 23:54:10",
        material_id: "",
        users_id: ""
      },
    };
  },

  components: {
    Header,
    VueSlickCarousel,
    Menu1,
    NavdestacadosVue,
  },
  watch:{
			search() {
				return this.getSearch();
            }
        },
  mounted() {
    
    this.getTodos();
    this.getVisul();
  
  },
  
   
  methods: {
    buscarmaterial() {
      if(this.buscador){
      axios .get("http://127.0.0.1:8000/api/search",{
          params:{
            buscador:this.buscador
          }
        })
        .then((response) => {
          this.material = response.data;
          console.log("hola", this.todos);
          this.buscador=null;

        })
        .catch((errorgrave) => console.log(errorgrave));
        }
    },
    Ver(id, priority) {
      var usrid = JSON.parse(sessionStorage.getItem("userid"));
      this.mtr_usr.users_id = usrid;
      this.mtr_usr.material_id = id;
      axios
        .post("http://127.0.0.1:8000/api/material__users", this.mtr_usr)
        .then((response) => {
          console.log(response);
        });
      this.$router.push({ name: "Pdf", params: { id: id, pr: priority } });
    },
    getTodos() {
    
      axios .get("http://127.0.0.1:8000/api/materials")
        .then((response) => {
          this.todos = response.data;
          console.log("hola", this.todos);
          this.buscador=null;

        })
        .catch((errorgrave) => console.log(errorgrave));
    
        
    },
   
  },
};
</script>

<style scoped>
   .imagen{
     object-fit: cover;
      object-position: center center;
      display:contents;
     height: 180px; 
     width: 150px;
     float:inline-start;
   }
  
      .slick-slider {
       width: 100%;
        }
        ::v-deep .slick-arrow:before {
         color:rgb(8, 5, 45);
       
        }
      .card {
      border: 1px solid black;
      margin: 15px;
      overflow:hidden;
      max-width: 13rem ;
      
        }

      #cabecera {
        color:#ff9;
        height:80px;
        overflow:hidden;
        display: flex;
      }
      #contenedor {
        width:100%;
        overflow:hidden;
         height: 100vh;
      }
      #contenido {
        float:left;
        height: 100vh;
        padding:10px;
        width:80%;
        overflow: auto;
      }
        #contenido2 {
        float:left;
        height: 200vh;
        padding:10px;
        width:95%;
        padding: 1%;
        margin-left: 2%;
      }
      #menu {
        background: linear-gradient(to top, #aab0c0, 5%, #d3d3d4);
        float:left;
         height: 100vh;
        padding:20px;
        width:20%;
        overflow:auto;
      }
      
</style>