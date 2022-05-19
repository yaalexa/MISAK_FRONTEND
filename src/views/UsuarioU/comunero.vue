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
       
      </div>
      <div>
          <b-nav small>
            <b-nav-item active>Categoria</b-nav-item>
            <b-nav-item>Autor</b-nav-item>
            <b-nav-item>Tipo </b-nav-item>
            <b-nav-item>Editorial </b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
</div>
    </div>

    <div class="contenedor4">
      
      <input type="" name="" id="buscar" class="barra">
      <button class="boton">Buscar</button>
      

    </div>
    <div class="contenedor4">
       <b-pagination v-model="currentPage" 
       :total-rows="todos.length" 
       :per-page="perPage" first-text="First" 
       prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>
    </div>

    <div class="contenedor3">
       
      <div v-for="todo in todos.slice((currentPage-1)*perPage,(currentPage-1)*perPage+perPage)" :key="todo.id" class="bloque2">
      
        <div>
          <b-card
            img
            src="../assets/fondo.png"
            alt=""
            img-top
            tag="articulo"
            style="max-width: 15rem"
            class="card"
            
            header-bg-variant="dark"
            header-text-variant="white"
            border-variant="dark"
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

              <button type="button" class="btn btn-primary margen" v-on:click="Ver(todo.id)">Ver</button>
            </div>
          </b-card>
        </div>
        
      </div>
      <br>
      
    </div>


  </div>
</template>

<script>

import axios from "axios";
import Header from "@/components/Header.vue";


export default {
  data() {
    return {
      perPage: 8,
      currentPage: 1,
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
        /* date_download: Date.now(), */
        material_id: "",
        users_id: ""
      },
     
    };
  },

  components: {
    Header,
  },

  mounted() {
    this.getTodos();
    this.paginate(this.perPage, 0);
  },
computed: {
        rows() {
          return this.todos.length
        },
        /* now: function () {
         return Date.now()
        } */
        
      },

  methods: {
     Ver(id){            
            /* this.mtr_usr.date_download = Date.now(); */ 
            var usrid = JSON.parse(sessionStorage.getItem("userid"));
            this.mtr_usr.users_id = usrid;
            this.mtr_usr.material_id = id;
            axios
            .post("http://127.0.0.1:8000/api/material__users",this.mtr_usr)
            .then(response => {
              console.log(response)
            });
            this.$router.push(`/Pdf/${id}`);
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
page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #d71e1e;
    border-color: #d30944;
}
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
.title{
  background: #16223f;
  color: white;
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
  
  margin: 30px;
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
  margin: 20px;
}
.card {
  border: 1px solid black;
  margin: 15px;
}
</style>