<template>
  <div id="contenedor">
    <div  class="shadow-lg bg-white rounded">
      <Menu1 />
    </div>
    <div id="contenido">
      <div class="mt-4">
         <b-img fluid  :src="require('../../assets/fondoprincipal.png')" alt="Image 8"></b-img>
      </div>
      <div class="p-3 bg" style="margin-top: 2%; border: 1px solid #d9d9d9">
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
      <div class="buscador">
        <b-input class="form-control" id="barra" type="search" size="sm" placeholder="Buscar por material...." aria-label="Search" v-model="buscador"/>
        <b-form-select
          class="form-control"
          size="sm"
          id="barra"
          v-model="opcionbuscar"
          :options="opt"
        />
        <b-button
          type="button"
          class="btn btn-secondary margen"
          id="boton"
          v-on:click="getTodos(buscador)"
        >
          Buscar
        </b-button>
        <b-button v-b-modal.busqueda>Show Modal</b-button>
      </div>

      <b-input-group-text style="margin-top: 3%; width: 100%" class="title">
        <h3 class="title">Los más visualizados</h3>
      </b-input-group-text>
      <div id="contenido2">
        <VueSlickCarousel v-bind="settings" class="carousel">
          <div v-for="todos in todos" :key="todos.id">
            <b-card
              id="material"
              class="shadow p-3 mb-5 bg-white rounded"
              border-variant="dark"
              footer-bg-variant="warning"
              header-bg-variant="secondary"
              header-text-variant="white"
            >
              <template v-slot:header>
                {{ todos.name }}
              </template>
              <b-row no-gutters>
                <b-col md="6">
                  <b-img
                    id="imag"
                    thumbnail
                    :src="`http://127.0.0.1:8000/storage/${todos.img}`"
                    alt="Image"
                  ></b-img>
                </b-col>
                <b-col md="6">
                  <p class="mb-0">
                    ISBN: {{ todos.isbn }} Prioridad: {{ todos.priority }}
                  </p>
                </b-col>
              </b-row>
              <button
                type="button"
                class="btn btn-secondary margen"
                v-on:click="Ver(todos.id, todos.priority)"
              >
                Ver
              </button>
              <template v-slot:footer>
                {{ todos.name }}
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
          <div v-for="todos in todos" :key="todos.id">
            <b-card
              id="material"
              class="shadow p-3 mb-5 bg-white rounded"
              border-variant="dark"
              header-bg-variant="secondary"
              header-text-variant="white"
            >
              <template v-slot:header>
                {{ todos.name }}
              </template>
              <b-row no-gutters>
                <b-col md="6">
                  <b-img
                    fluid 
                    id="imag"
                    thumbnail
                    :src="`http://127.0.0.1:8000/storage/${todos.img}`"
                    alt="Image"
                  ></b-img>
                </b-col>
                <b-col md="6">
                  <p class="mb-0">
                    ISBN: {{ todos.isbn }} Prioridad: {{ todos.priority }}
                  </p>
                </b-col>
              </b-row>
              <button
                type="button"
                class="btn btn-secondary margen"
                v-on:click="Ver(todos.id, todos.priority)"
              >
                Ver
              </button>
              <template v-slot:footer>
                {{ todos.name }}
              </template>
            </b-card>
          </div>
        </VueSlickCarousel>
      </div>
      <div id="footer">
        <Footer />
      </div>
      <div>
        <!--------------------------------modal busqueda------------------------------------------>
        <b-modal id="busqueda" v-model="MaterialB" size="xl" title="MaterialB">
          <template #modal-header>
            <h5>Material</h5>
          </template>
          <div>
          <VueSlickCarousel v-bind="settings" class="carousel">
          <div v-for="todos in todos" :key="todos.id">
            <b-card
              id="material"
              class="shadow p-3 mb-5 bg-white rounded"
              border-variant="dark"
              footer-bg-variant="warning"
              header-bg-variant="secondary"
              header-text-variant="white"
            >
              <template v-slot:header>
                {{ todos.name }}
              </template>
              <b-row no-gutters>
                <b-col md="6">
                  <b-img
                    id="imag"
                    thumbnail
                    :src="`http://127.0.0.1:8000/storage/${todos.img}`"
                    alt="Image"
                  ></b-img>
                </b-col>
                <b-col md="6">
                  <p class="mb-0">
                    ISBN: {{ todos.isbn }} Prioridad: {{ todos.priority }}
                  </p>
                </b-col>
              </b-row>
              <button
                type="button"
                class="btn btn-secondary margen"
                v-on:click="Ver(todos.id, todos.priority)"
              >
                Ver
              </button>
              <template v-slot:footer>
                {{ todos.name }}
              </template>
            </b-card>
          </div>
        </VueSlickCarousel>
          </div>
          <template #modal-footer="{ close }">
            <b-button class="btn btn-secondary" @click="close()">
              Cerrar
            </b-button>
          </template>
        </b-modal>
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
      opt: [
        { value: "0", text: "Todos" },
        { value: "1", text: "Editorial" },
        { value: "2", text: "Material" },
        { value: "3", text: "Autor" },
        { value: "4", text: "Nivel Educativo" },
        { value: "5", text: "Areas" },
        { value: "6", text: "Tipo Material" },
      ],
      pr: null,
      id: null,
      buscador: null,
      searchText: null,
      setTimeoutBuscador: "",
    
      settings:{
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "initialSlide": 0,
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
              "initialSlide": 2
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
      visual: null,
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
      errored: false,
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
    this.getTodos();
  },

  methods: {
    buscarmaterial() {
      clearTimeout(this.setTimeoutBuscador);
      this.setTimeoutBuscador = setTimeout(this.getTodos, 360);
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
      if (this.buscador) {
        axios
          .get(`http://127.0.0.1:8000/api/search/${this.buscador}`)
          .then((response) => {
            this.libros = response.data;
            console.log("hola", this.libros);
          })
          .catch((errorgrave) => console.log(errorgrave));
      }
      if (!this.buscador) {
        axios
          .get(`http://127.0.0.1:8000/api/materials`)
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
* {
  font-family: cursive;
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
}
#cabecera {
  color: #ff9;
  height: 80px;
  overflow:hidden;
}
#contenedor {
  width: 100%;
  overflow: hidden;
  height: 300vh;
  display: block;
  overflow:hidden;
}
#contenido {
  float: left;
  height: 300vh;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  overflow: scroll;
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
  background: linear-gradient(to top, #aab0c0, 5%, #d3d3d4);
  float: left;
  height: 100vh;
  padding: 20px;
  width: 20%;
  overflow: auto;
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