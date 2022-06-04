<template>
 <div id="contenedor">
   <div id="cabecera"><Menu1/>
   </div>
       <div id="menu"> 
             <NavdestacadosVue/>
         </div>
       
       <div id="contenido">
          <div id="contenido2">
          <div class="contenedor4">
          <b-input-group-text>
            <form class="form-inline ">
            <input 
              class="form-control "
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
              
     <div v-if ="this.errored==false" >    
        <VueSlickCarousel v-bind="settings" class="carousel">
 
		    <div  v-for="todos in todos" :key="todos.id" >
          <b-card 
            img
            alt=""
            img-top
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
 <div v-if ="this.errored==true" >    
       <VueSlickCarousel v-bind="settings" class="carousel">
 
		    <div  v-for="libros in libros" :key="todos.id" >
          <b-card 
          
            img
            alt=""
            img-top
          
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
            :footer="`${libros.name}`"
            footer-tag="footer"
            footer-bg-variant="warning"
          >
                
          <b-card-body>
                   <b-img thumbnail center  :src="`http://127.0.0.1:8000/storage/${libros.img}`" class="imagen" fluid alt="Fluid image"></b-img>
                    ISBN: {{ libros.isbn }}
                    <b-card-text>Prioridad: {{ libros.priority }}</b-card-text>
                    <button type="button" class="btn btn-secondary margen" v-on:click="Ver(libros.id,libros.priority)">Ver</button>
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
      libros: {
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
    VueSlickCarousel,
    Menu1,
    NavdestacadosVue,
  },			
  mounted() {
    this.getTodos();
  },
  
   
  methods: {
  buscarmaterial() {
      clearTimeout(this.setTimeoutBuscador)
        this.setTimeoutBuscador = setTimeout(this.getTodos,360)
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
      if(this.buscador){
      axios
        .get(`http://127.0.0.1:8000/api/search/${this.buscador}`)
        .then((response) => {
          this.libros = response.data;
          console.log("hola", this.libros);
        })
        .catch((errorgrave) => console.log(errorgrave));
         }
        if(!this.buscador){
         axios .get(`http://127.0.0.1:8000/api/materials`)
        .then((response) => {
          this.todos = response.data;
          console.log("hola", this.todos);
        })
        .catch((errorgrave) => console.log(errorgrave));
         }
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
        display: block;
      }
      #contenedor {
        width:100%;
        overflow:hidden;
        height: 100vh;
        display:block;
      }
      #contenido {
        margin-top:2%;
        float:left;
        height: 100vh;
        padding:10px;
        width:80%;
        overflow: auto;
        justify-content: space-between;
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