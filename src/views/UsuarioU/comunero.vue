<template>
 <div id="contenedor">
   <div id="cabecera"><Menu1/></div>
       <div id="menu"> 
             <NavdestacadosVue/>
         </div>
       <div id="contenido">
          <div id="contenido2">
        <VueSlickCarousel v-bind="settings" class="carousel">
		    <div  v-for="todo in todos" :key="todo.id" >
          <b-card 
            :src="`http://127.0.0.1:8000/storage/${todo.img}`"
            alt=""
            img-top
            tag="articulo"
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
            style="max-width: 15rem "
          >
          <b-card-body>
                    
                    ISBN: {{ todo.isbn }}
                    <b-card-text>Prioridad: {{ todo.priority }}</b-card-text>
                    <button type="button" class="btn btn-primary margen" v-on:click="Ver(todo.id,todo.priority)">Ver</button>
                    <b-card-footer variant="secondary">
                        <b-card-text >{{ todo.name}}</b-card-text>
                    </b-card-footer>
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
import { VueCardCarousel } from "vue-card-carousel";
import { Glide, GlideSlide } from 'vue-glide-js'
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
      settings: {
					"dots": true,
					"slidesToShow": 2,
					"slidesToScroll": 1,
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
    VueCardCarousel,
   [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    VueSlickCarousel,
    Menu1,
    NavdestacadosVue,
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
        .get("http://127.0.0.1:8000/api/materials")
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
  
      .slick-slider {
       width: 100%;
       
        }
        ::v-deep .slick-arrow:before {
         color: #2f3241;
        opacity: 1;
        }
      .card {
      border: 1px solid black;
      margin: 15px;
      overflow:hidden;
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
      }
      #contenido {
        float:left;
        height: 100vh;
        padding:10px;
        width:80%;
       overflow:hidden;
      }
        #contenido2 {
        float:left;
        height: 100vh;
        padding:10px;
        width:90%;
        padding: 5%;
        overflow:hidden;
      }
      #menu {
        background: linear-gradient(to top, #aab0c0, 5%, #d3d3d4);
        float:left;
         height: 100vh;
        padding:20px;
        width:20%;
        overflow:hidden;
      }
      
</style>