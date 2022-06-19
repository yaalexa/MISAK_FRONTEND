<template>
  <div id="contenedor">
    <div  id="menu" class="shadow-lg bg-white rounded">
      <Menu1 />
    </div>
    <div id="contenido">
      <div id="imagenp" class="mt-4">
         <b-img fluid  :src="require('../../assets/fondoprincipal.png')" alt="Image 8"></b-img>
      </div>
      <div id="menu" class="p-3 bg" style="margin-top: 2%; border: 1px solid #d9d9d9">
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <b-icon icon="pencil-fill" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Editorial</h6>
              </div>
            </b-col>
            <b-col>
              <b-icon icon="person-bounding-box" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Autor</h6>
              </div>
            </b-col>
            <b-col>
              <b-icon icon="reception4" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Nivel Educativo</h6>
              </div>
            </b-col>
            <b-col>
              <b-icon icon="book-fill" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Material</h6>
              </div>
            </b-col>
            <b-col>
              <b-icon icon="stack" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Area</h6>
              </div>
            </b-col>
            <b-col>
              <b-icon icon="inboxes-fill" font-scale="2.5"></b-icon>
              <div class="d-block text-center">
                <h6>Tipo Material</h6>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
       <!-----------------------AQUI COMIENZA EL BUSCADOR---------------------------------->
      <div class="buscador">
        <b-input
          response
          class="form-control"
          id="barra"
          type="search"
          size="sm"
          placeholder="Buscar por material, editorial, autor ...."
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
          <div>
            <VueSlickCarousel v-bind="settings" class="carousel">
              <b-card-group v-for="getmaterial in getmaterial" :key="getmaterial.id">
              <b-card
              id="material"
              :header="`${getmaterial.nombre}`"
              :img-src="`http://127.0.0.1:8000/storage/${getmaterial.imagen}`"
              img-alt="Image"
              img-top
              img-height="200"
              img-width="200"
              class="text-center position-relative"
            >
              <button
                    type="button"
                    class="btn btn-secondary margen"
                    v-on:click="Ver(getmaterial.id, getmaterial.prioridad)"
                  >Ver
              </button>
            </b-card>
                <b-card
                 
                  id="material"
                  class="shadow p-3 mb-5 bg-white rounded"
                  border-variant="dark"
                  footer-bg-variant="warning"
                  header-bg-variant="secondary"
                  header-text-variant="white"
                  
                >
                  <template v-slot:header>
                    {{ getmaterial.nombre }}
                  </template>
                      <b-img
                        v-b-popover.html="'<p> Editorial: '+`${getmaterial.editorial}`+'</p>'+
                                          '<p> Tipo: '+`${getmaterial.tipo_material}`+'</p>'+
                                          '<p> Nivel: '+`${getmaterial.nivel_educativo}`+'</p>'+
                                          '<p> Area: '+`${getmaterial.area}`+'</p>'+
                                          '<p> Autor: '+`${getmaterial.autor}`+'</p>'"                                                    
                        id="imag"
                        thumbnail
                        :src="`http://127.0.0.1:8000/storage/${getmaterial.imagen}`"
                        alt="Image"
                      ></b-img>
                      
                      <b-popover target="popover-target-1" triggers="hover" placement="top">
                      <template #title>{{ getmaterial.nombre }}</template>
                      A <b>component</b> content!
                    </b-popover>
                  <button
                    type="button"
                    class="btn btn-secondary margen"
                    v-on:click="Ver(getmaterial.id, getmaterial.prioridad)"
                  >
                    Ver
                  </button>
                  <template v-slot:footer>

                    <small class="text-muted">{{ getmaterial.autor }}</small>
                    
                  </template>
                </b-card>
                </b-card-group>
             
              
            </VueSlickCarousel>
          </div>
          <template #modal-footer="{ close }">
            <b-button class="btn btn-secondary" @click="close()">
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
          <div v-for="visual in visual" :key="visual.id">
            <b-card
              id="material"
              class="shadow p-3 mb-5 bg-white rounded"
              border-variant="dark"
              footer-bg-variant="warning"
              header-bg-variant="secondary"
              header-text-variant="white" 
            >
              <template v-slot:header>
                {{ visual.name }}
              </template>
               <b-card-body >
                  <b-img
                    id="imag"
                    thumbnail
                    :src="`http://127.0.0.1:8000/storage/${visual.img}`"
                    alt="Image"
                  ></b-img>
              </b-card-body>
               <button
                type="button"
                class="btn btn-secondary margen"
                v-on:click="Ver(visual.id, visual.priority)"
              >
                Ver
              </button>
              <template v-slot:footer >

                {{ visual.name }}
               
              </template>
            </b-card>
          </div>
        </VueSlickCarousel>
      </div>
      <div>
        <b-input-group-text style="margin-top: 10%; width: 100%" class="title">
          <h3 class="title">Los más descargados</h3>
        </b-input-group-text>
      </div>
      <div id="contenido2">
        <VueSlickCarousel v-bind="settings" class="carousel">
          <div v-for="descarga in descarga" :key="descarga.id">
            <b-card
              id="material"
              class="shadow p-3 mb-5 bg-white rounded"
              border-variant="dark"
              header-bg-variant="secondary"
              header-text-variant="white"
            >
              <template v-slot:header>
                {{ descarga.name }}
              </template>
              <b-card-body >
                  <b-img
                    fluid 
                    id="imag"
                    thumbnail
                    :src="`http://127.0.0.1:8000/storage/${descarga.img}`"
                    alt="Image"
                  ></b-img>
              </b-card-body>
              <button
                type="button"
                class="btn btn-secondary margen"
                v-on:click="Ver(descarga.id, descarga.priority)"
              >
                Ver
              </button>
              <template v-slot:footer>
                {{ descarga.name }}
              </template>
            </b-card>
          </div>
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
        manejo_users: "no se que va aqui",
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
    buscadorfinal() {
      axios
        .get(`http://127.0.0.1:8000/api/buscadorfinal/${this.buscar}`)
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
        .post("http://127.0.0.1:8000/api/material__users", this.mtr_usr)
        .then((response) => {
          console.log(response);
        });
      this.$router.push({ name: "Pdf", params: { id: id, pr: priority } });
    },
     destvisual(){
         axios.get('http://127.0.0.1:8000/api/visualmuser')
         .then(response => {
             this.visual = response.data;
         }) 
        },
    destdescarga(){
        axios.get('http://127.0.0.1:8000/api/descargasuser')
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
  border: 1px black;
  margin-left: 200px;
  margin-right: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
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
  max-width: 640px;
  height:350px
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
  width: 10rem;
  height: 10rem;
}
#footer {
  float: left;
  height: 25rem;
  width: 100%;
}
.card-footer {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #16223f;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  color: white;
}
</style>