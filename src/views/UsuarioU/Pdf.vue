<template>
    

<div class="cara2">

        <div class="contenedor_todo">
      <div class="contenedor1">
        <img
          src="@/assets/logo.png"
          class="logo"
          height="80px"
          width="80px"
          alt="Kitten"
        />
        <h1 class="titulo">Libreria Virtual</h1>
      </div>
      <div class="contenedor2">
      </div>
    </div>
    <div class="contenedor3">
          <section>
      <div class="archive" v-for="todo in todos" :key=todo.id>
          <iframe class="archive" :src="`http://127.0.0.1:8000/storage/${todo.pdf}`"></iframe>
    <!-- <vue-pdf-app style="height: 100vh;" pdf="https://www.seducoahuila.gob.mx/leer/assets/cuentos-breves.pdf"
           @after-created="afterCreatedHandler"
           @open="openHandler"
           @pages-rendered="pagesRenderedHandler"></vue-pdf-app>-->
      </div>
      <br>
      <button type="button" class="btn btn-dark margen" v-on:click="downloadWithAxios( )">Descargar</button>
       </section>
    </div>

  </div>
</template>

<script>
/* import func from 'vue-editor-bridge'; */
import axios from "axios";
import Header from "@/components/Header.vue";
import VuePdfApp from "vue-pdf-app";
import "vue-pdf-app/dist/icons/main.css";
import Loader from "@/components/Loader.vue";
export default {
  data() {
    
    return {
      name: "PdfjsInteraction",
      info: [],
      todos: {
        img: "",
        name: "",
        isbn: "",
        num_pages: "",
        priority: "",
        pdf: "",
        year: "",
      },
      todos: null,
    };
  },

  components: {
  
    "vue-pdf-app": () => ({
      component: new Promise((res) => {
        return setTimeout(
          () => res(import(/* webpackChunkName: "vue-pdf-app" */ "vue-pdf-app")),
          4000
        );
      }),
      loading: Loader,
    }),
  
  },

  mounted() {
    this.getTodos();
  },

  methods: {
      afterCreatedHandler(pdfApp) {
      // to prevent browser tab title changing to pdf document name
      pdfApp.isViewerEmbedded = true;
    },
    async openHandler(pdfApp) {
      this.info = [];
      const info = await pdfApp.pdfDocument
        .getMetadata()
        .catch(console.error.bind(console));
      if (!info) return;
      const props = Object.keys(info.info);
      props.forEach((prop) => {
        const obj = {
          name: prop,
          value: info.info[prop],
        };
        this.info.push(obj);
      });
    },
    pagesRenderedHandler(pdfApp) {
      setTimeout(() => (pdfApp.pdfViewer.currentScaleValue = "page-height"));
    },
  
     
    downloadWithAxios( ) {
     axios({
              url: 'http://127.0.0.1:8000/storage/file/mmOpFZeOeGw7HznrRbSgjULSCC43healRfuHo8B8.pdf', // download file link goes here
          method: 'GET',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded',
           'Access-Control-Allow-Origin' :'*',
           'Access-Control-Allow-Credentials': true,
           'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
           "X-Requested-With": "XMLHttpRequest",
           'Connection': 'keep-alive',

  },
          responseType: 'blob', 
        }).then((res) => {
          var FILE = window.URL.createObjectURL(new Blob([res.data]));
        
          var docUrl = document.createElement('x');
          docUrl.href = FILE;
          docUrl.setAttribute('download', 'sample.pdf');
          document.body.appendChild(docUrl);
          docUrl.click();
            });

    },
  
    getTodos() {
      axios
        .get(`http://127.0.0.1:8000/api/materials/${this.$route.params.id}`)
        .then((response) => {
          this.todos = response.data;
          console.log("hola", this.todos);
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
    Ver(id){
            this.$router.push(`/Pdf/${id}`);
        },
  },
};
</script>

<style scoped>
.contenedor_todo {
  border: 1px solid black;
  background: #16223f;
  display: flex;
  justify-content: space-between;
}
.contenedor1 {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.logo {
  border: 1px blueviolet;
  padding: 4px;
}
.titulo {
  /* border: 1px solid red; */
  color: white;
  padding-left: 20px;
}
.contenedor2 {
  /* border: 1px solid red; */
  padding-top: 10px;
  
}
.ingresar {
  /* border: 1px solid black; */
  color: white;
  width: 80%;
}

.contenedor4 {
  
  margin: 100px;
  display: flex;
  justify-content: center;
}
.barra{
  
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: block;
  width: 70%;
  padding: 10.5px 10px;
  transition: all 0.2s;
  color:#16223f;
  border: 1px solid rgba(0, 0, 0, 0.442);
  border-radius: 4px;
  background-color: white;
  background-clip: padding-box;
}
.boton{
  border-color: #16223f;
  border-radius: 4px;
  color: white;
  background-color: #16223f;
  margin-left: 5px;
}

.contenedor3 {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  
  margin: 30px;
}
.cara2{
    width: 100%;
    
}
.archive{
    width: 100vh;
    height: 80vh;
    display: inline-block;
}

</style>