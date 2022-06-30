<template>
  <div id="contenedor">
    <div  id="menu" class="shadow-lg bg-white rounded">
      <Menu1 />
    </div>
    <div id="contenido">
      <div id="imagenp" class="mt-4">
         <b-img fluid-grow :src="require('../../assets/fondoprincipal.jpg')" alt="Image 8"></b-img>
      </div>
      <div id="menu" class="p-3 bg" style="margin-top: 2%; border: 1px solid #d9d9d9">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <button id="icon" class="form-control position-relative" v-on:click="focusInput()">
              <b-icon icon="pencil-fill" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Editorial</h6>
              </div>
              </button>
            </b-col>
            <b-col>
              <button id="icon" class="form-control position-relative" v-on:click="focusInput()">
              <b-icon icon="person-bounding-box" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Autor</h6>
              </div>
              </button>
            </b-col>
            <b-col>
              <button id="icon" class="form-control position-relative" v-on:click="focusInput()">
              <b-icon icon="reception4" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Nivel Educativo</h6>
              </div>
              </button>
            </b-col>
            <b-col>
              <button id="icon" class="form-control position-relative" v-on:click="focusInput()">
              <b-icon icon="book-fill" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Material</h6>
              </div>
              </button>
            </b-col>
            <b-col>
              <button id="icon" class="form-control position-relative" v-on:click="focusInput()">
              <b-icon icon="stack" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Area</h6>
              </div>
              </button>
            </b-col>
            <b-col>
              <button id="icon" class="form-control position-relative" v-on:click="focusInput()">
              <b-icon icon="inboxes-fill" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Tipo Material</h6>
              </div>
              </button>
            </b-col>
          </b-row>
        </b-container>
      </div>
       <!-----------------------AQUI COMIENZA EL BUSCADOR---------------------------------->
       
      <div class="buscador">
        <b-input
          responsive
          class="form-control position-relative"
          id="barra"
          type="search"
          size="lg"
          placeholder="Buscar  ...."
          aria-label="Search"
          v-model="buscar"

        />
        <b-button
          type="button"
          class="btn btn-secondary margen"
          id="boton"
          v-on:click="buscadorfinal(buscar)"
          v-b-modal.busqueda
        >
          Buscar
        </b-button>
      </div>
      <!-- -----------------AQUI COMIENZA EL V-MODEL DEL BUSCADOR ------------------------ -->
      <div>
        <b-modal id="busqueda" v-model="MaterialB" size="xl" title="MaterialB">
          <template #modal-header>
            <h5>Material</h5>
          </template>
          <div class="modalbusqueda ">
            <VueSlickCarousel v-bind="settings" class="carousel">
              <b-card-group v-for="getmaterial in getmaterial" :key="getmaterial.id">
              <b-card
            
              id="material"
              :header="`${getmaterial.nombre}`"
              :img-src="`http://127.0.0.1:8000/storage/${getmaterial.imagen}`"
              responsive
              fixed
              img-alt="Image"
              img-top
              img-height="200"
              img-width="200"
              style="max-width: 10rem; max-height: 10rem; "
              class="text-center position-relative shadow"
              v-b-popover.html="'<p> Editorial: '+`${getmaterial.editorial}`+'</p>'+
                                          '<p> Tipo: '+`${getmaterial.tipo_material}`+'</p>'+
                                          '<p> Nivel: '+`${getmaterial.nivel_educativo}`+'</p>'+
                                          '<p> Area: '+`${getmaterial.area}`+'</p>'+
                                          '<p> Autor: '+`${getmaterial.autor}`+'</p>'"    
            >
              <button
               type="button"
               class="btn btn-secondary margen"
               v-on:click="Ver(getmaterial.id, getmaterial.prioridad)"
               >Ver
              </button> 
            </b-card>   
             </b-card-group>
            </VueSlickCarousel>
          </div>
          <template #modal-footer="{ close }">
            <b-button class="btn btn-warning" @click="close()">
              Cerrar
            </b-button>
          </template>
        </b-modal>
      </div>

      <b-input-group-text style="margin-top: 3%; width: 100%" class="title">
        <h3 class="title">Los más visualizados</h3>
      </b-input-group-text>
      <div id="contenido2">
        <VueSlickCarousel v-bind="settings" class="carousel">
          <b-card-group v-for="visual in visual" :key="visual.id">
            <b-card
              id="material"
              :footer="`${visual.nombre}`"
              :img-src="`http://127.0.0.1:8000/storage/${visual.imagen}`"
              responsive
              fixed
              thumbnail
              img-alt="Image"
              img-top
              img-height="200"
              img-width="200"
              style="max-width: 10rem; max-height: 10rem; "
              class="text-center position-relative shadow img-thumbnail"
              v-b-popover.html="'<p> Editorial: '+`${visual.editorial}`+'</p>'+
                                          '<p> Tipo: '+`${visual.tipo_material}`+'</p>'+
                                          '<p> Nivel: '+`${visual.nivel_educativo}`+'</p>'+
                                          '<p> Area: '+`${visual.area}`+'</p>'+
                                          '<p> Autor: '+`${visual.autor}`+'</p>'"
            >
             
               <button
                type="button"
                class="btn btn-warning margen"
                v-on:click="Ver(visual.id, visual.prioridad)"
              >
                Ver
              </button>
           
            </b-card>
          </b-card-group>
        </VueSlickCarousel>
      </div>
      <div>
        <b-input-group-text style="margin-top: 10%; width: 100%" class="title">
          <h3 class="title">Los más descargados</h3>
        </b-input-group-text>
      </div>
      <div id="contenido2">
        <VueSlickCarousel v-bind="settings" class="carousel">
          <b-card-group v-for="descarga in descarga" :key="descarga.id">
          <b-card
              id="material"
              :footer="`${descarga.nombre}`"
              :img-src="`http://127.0.0.1:8000/storage/${descarga.imagen}`"
              responsive
              fixed
              thumbnail
              img-alt="Image"
              img-top
              img-height="200"
              img-width="200"
              style="max-width: 10rem; max-height: 10rem; "
              footer-bg-variant="warning"
              class="text-center position-relative shadow img-thumbnail"
              v-b-popover.html="'<p> Editorial: '+`${descarga.editorial}`+'</p>'+
                                          '<p> Tipo: '+`${descarga.tipo_material}`+'</p>'+
                                          '<p> Nivel: '+`${descarga.nivel_educativo}`+'</p>'+
                                          '<p> Area: '+`${descarga.area}`+'</p>'+
                                          '<p> Autor: '+`${descarga.autor}`+'</p>'"    
            >
               <button
                type="button"
                class="btn btn-secondary margen"
                v-on:click="Ver(descarga.id, descarga.prioridad)"
              >
                Ver
              </button>
            </b-card>
          </b-card-group>
        </VueSlickCarousel>
      </div>
      <div id="footer">
        <Footer />
      </div>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Menu1 from "@/components/Menu1.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "mostarUU",
  data() {
    return {
      opcionbuscar:null,
      pr: null,
      id: null,
      buscador: null,
      searchText: null,
      setTimeoutBuscador: "",
      settings:{
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 5,
        "slidesToScroll": 5,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 1
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },
      perPage: 8,
      currentPage: 1,
      getmaterial: {
        id:"",
        nombre: "",
        prioridad: "",
        editorial: "",
        area: "",
        imagen: "",
        tipo_material:"",
        autor: "",
        nivel_educativo: ""
      },
      visual:[],
      descarga:[],
      mtr_usr: {
        manejo_users: "utilidad de expansion",
        detalle_material: "visualizado",
        date_download: "2022-05-18 23:54:10",
        material_id: "",
        users_id: "",
      },
    };
  },
  components: {
    VueSlickCarousel,
    Menu1,
    Footer,
  },
  mounted() {
    this.destvisual();
    this.destdescarga();
  },
  methods: {
   focusInput(){
    document.getElementById("barra").focus();
   },
    buscadorfinal() {
      axios
        .get(`/buscadorfinal/${this.buscar}`,{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                })
        .then((response) => {
          this.getmaterial = response.data;
          console.log("Hola",this.getmaterial);
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
   
    Ver(id, priority) {
      var usrid = JSON.parse(sessionStorage.getItem("userid"));
      this.mtr_usr.users_id = usrid;
      this.mtr_usr.material_id = id;
      axios
        .post("/material__users", this.mtr_usr,{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                })
        .then((response) => {
          console.log(response);
        });
      this.$router.push({ name: "Pdf", params: { id: id, pr: priority } });
    },
     destvisual(){
         axios.get('/visualmuser')
         .then(response => {
             this.visual = response.data;
         }) 
        },
    destdescarga(){
        axios.get('/descargasuser')
        .then(response=>{
            this.descarga = response.data;
        })      
    }
  },
};
</script>

<style scoped>
 body{
        margin: 0%;
        overflow:hidden;
    }
.imagen1 {
  width: 100%;
}
.buscador {
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 90%;
}
#barra {
  font-size: 15px;
  width: 90%;
  height: 40%;
  color: #16223f;
  border: 1px #16223f solid;
  border-radius: 4px;
  padding: 12px;
}
#boton {
  border-color: #16223f;
  border-radius: 4px;
  color: white;
  background-color: #16223f;
  margin-left: 5px;
  width: 20%;
  padding: 10px;
  font-size: 15px;
}
.title {
  justify-content: center;
}
.slick-slider {
  width: 100%;
}
::v-deep .slick-arrow:before {
  color: rgb(8, 5, 45);
}
#buscar {
  background-color: #16223f;
}
#material {
  margin: 5%;
}
#cabecera {
  color: #ff9;
  height: 80px;
  overflow:hidden;
}
#contenedor {
  width: 100%;
  height: 100vh;
  display: block;
  overflow:hidden;
}
#contenido {
  float: left;
  height: 100vh;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  overflow: auto;
}
#contenido2 {
  float: left;
  height: 27rem;
  width: 95%;
  margin-left: 2%;
  justify-content: space-between;
  overflow:hidden;
}
#menu {
 width: 100%;
  overflow: hidden;
}
.b-icon {
  color: #16223f;
}
#imag {
  max-width: 10rem;
  max-height: 10rem;
  width: 10rem;
  height: 10rem;
}
#footer {
  float: left;
  height: 25rem;
  width: 100%;
}
.modalbusqueda {
  float: left;
  width: 95%;
  margin-left: 2%;
  text-align: center;
  position:relative;
}
.card-footer {
  margin-bottom: 0;
  background-color:#16223f;
  border-bottom: 1px solid white;
  color: white;
  max-height: 2.5rem;
  overflow: auto;
}
.card-header {
  background-color:#16223f;
  color: white;
  max-height: 2.5rem;
  float: left;
  overflow: auto;
  overflow-anchor:initial;
}
.card-body {
  text-align: center;
  float: left;
}
#icon{
  border: #16223f 1px solid;
  height: 100%;
  width: 100%;
  margin: 2px;
}
</style>