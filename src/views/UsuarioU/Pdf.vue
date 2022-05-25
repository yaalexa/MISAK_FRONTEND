<template>
    <div class="cara2">
      <Menu1/>
      <section>
          <div class="archive" v-for="todo in todos" :key=todo.id>
              <iframe class="archive" :src="`http://127.0.0.1:8000/storage/${todo.pdf}`"></iframe>
          </div>
          <br>
          <button type="button" class="btn btn-dark margen" v-on:click="downloadWithAxios('','material' )">Descargar</button>
       </section>
    </div>

</template>

<script>
/* import func from 'vue-editor-bridge'; */
import axios from "axios";
import Menu1 from "@/components/Menu1.vue";
import {saveAs} from 'file-saver';
export default {
  data() {
    return {
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
    Menu1
  },

  mounted() {
    this.getTodos();
  },

  methods: {
     
    downloadWithAxios(url, title) {
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
.cara2{
    width: 100%;
}
.archive{
  margin-top:20px;
    width: 99vw;
    height: 100vw;
    display: inline-block;
}
section{
  background-color:  #323639;
}

</style>