<template>
<div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
          <section>
      <div class="header">
        <h1 class="titulo">MATERIAL</h1>
      </div>
 
      <div v-for="todo in todos" :key=todo.id>
        <div>
          <img class="img" :src="`http://127.0.0.1:8000/storage/${todo.img}`"> <br>
          <iframe  :src="`http://127.0.0.1:8000/storage/${todo.pdf}`"></iframe>
          <h1>{{todo.name}}</h1>
          <h3>{{todo.isbn}}</h3>
          <h3>{{todo.num_pages}}</h3>
          <h3>{{todo.priority}}</h3>
          <button type="button" class="btn btn-dark margen" v-on:click="Ver()">Ver</button>
          <h3>{{todo.year}}</h3>
        </div>
      </div>
       </section>
    </div>

  </div>
</template>

<script>
/* import func from 'vue-editor-bridge'; */
import axios from "axios";
import Header from "@/components/Header.vue";

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
    Header,
  },

  mounted() {
    this.getTodos();
  },

  methods: {
    getTodos() {
      axios
        .get("http://127.0.0.1:8000/api/materials")
        .then((response) => {
          this.todos = response.data;
          console.log("hola", this.todos);
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
    Ver(){
            this.$router.push("/Pdf");
        },
  },
};
</script>

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.fondo{
  margin-left: 255px;
}
.header {
  background-color: #216276de;
  display: flex;
  align-items: center;
}
.titulo {
  color: aliceblue;
  padding: 5px;
  text-align: center;
  width: 90%;
}
/* Cuerpo */
.cont {
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
  background-position: 100%;
  background-attachment: fixed;
}
.img{
  margin: auto;
  width: 200px;
  height: 200px;
}

</style>