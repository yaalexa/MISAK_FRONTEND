<template>
 <div id="contenedor">
   <div id="cabecera"><Menu1/></div>
       <div id="menu"> 
             <NavdestacadosVue/>
         </div>
       <div id="contenido">
          <div id="contenido2">
            <b-input-group-text>
               <form class="form-inline my-2 my-lg-0">
                    <input
                        class="form-control mr-sm-2 buscador"
                        type="search"
                        placeholder="Buscar por autor, nombre del libro..."
                        aria-label="Search"
                        v-model="buscador"
                        @keyup="buscarLibros"
                    >
                </form>
                <button type="button" class="btn btn-secondary margen" v-on:click="getSearch()" >Ver</button>
            </b-input-group-text>
              
             <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Charmander"/>   
        <VueSlickCarousel v-bind="settings" class="carousel">
        
		    <div  v-for="todo in todos" :key="todo.id" >
          <b-card 
            img
            alt=""
            img-top
            tag="articulo"
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
            :footer="`${todo.name}`"
            footer-tag="footer"
            footer-bg-variant="warning"
          >
                
          <b-card-body>
                   <b-img thumbnail center  :src="`http://127.0.0.1:8000/storage/${todo.img}`" class="imagen" fluid alt="Fluid image"></b-img>
                    ISBN: {{ todo.isbn }}
                    <b-card-text>Prioridad: {{ todo.priority }}</b-card-text>
                    <button type="button" class="btn btn-secondary margen" v-on:click="Ver(todo.id,todo.priority)">Ver</button>
                </b-card-body>
          </b-card>
      </div>
    
	</VueSlickCarousel>
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
  
computed: {
        rows() {
          return this.todos.length
        },
        
      },
   
  methods: {
  
  buscarLibros(){
    clearTimeout( this.setTimeoutBuscador )
            this.setTimeoutBuscador = setTimeout(this.getTodos, 360)
  },
     Ver(id,priority){

            var usrid = JSON.parse(sessionStorage.getItem("userid"));
            this.mtr_usr.users_id = usrid;
            this.mtr_usr.material_id = id;
            axios
            .post("http://127.0.0.1:8000/api/material__users",this.mtr_usr)
            .then(response => {
              console.log(response)
            });
            this.$router.push({name: "Pdf",params:{id: id, pr: priority}});
          
        },
    getTodos() {
      axios
        .get("http://127.0.0.1:8000/api/search", {
                params: {
                    buscador: this.buscador
                }
            })
        .then((response) => {
          this.todos = response.data;
          console.log("hola", this.todos);
          
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
    async getVisul() {
     await axios
        .get("http://127.0.0.1:8000/api/visualmuser")
        .then((response) => {
          this.visual = response.data;
          console.log("hola", this.visual);
          
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
        overflow:aut;
      }
      
</style>