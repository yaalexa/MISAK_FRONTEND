<template>
  <div>
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
        <img src="@/assets/login.png" alt="" class="ingresar" />
      </div>
    </div>

    <div class="contenedor4">
      
      <input type="" name="" id="buscar" class="barra">
      <button class="boton">Buscar</button>
      
    </div>

    <div class="contenedor3">
      <div v-for="todo in todos" :key="todo.id" class="bloque2">
        <div>
          <b-card
            img
            src="../assets/fondo.png"
            alt=""
            img-top
            tag="articulo"
            style="max-width: 15rem"
            class="card"
          >
            <img
              :src="`http://127.0.0.1:8000/storage/${todo.img}`"
              style="height: 200px; width: 200px"
              accept="application/img"
            />
            <div class="">
              <h1>{{ todo.name }}</h1>
              <h10>ISBN: {{ todo.isbn }}</h10
              ><br />
              <h10>Número de páginas: {{ todo.num_pages }}</h10
              ><br />
              <h10> Prioridad: {{ todo.priority }}</h10
              ><br />

              <b-button href="#" variant="primary">Ver</b-button>
            </div>
          </b-card>
        </div>
      </div>
    </div>

    
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          @change="onPageChanged"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>

  </div>
</template>

<script>

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
      items: items,
      bloque2: items,
      currentPage: 1,
      perPage: 2,
      totalRows: items.length
    };
  },

  components: {
    Header,
  },

  mounted() {
    this.getTodos();
    this.paginate(this.perPage, 0);
  },


  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.items;
      this.bloque2 = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
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
  flex-wrap: wrap;
  margin: 30px;
}
.card {
  border: 1px solid black;
  margin: 15px;
}
</style>