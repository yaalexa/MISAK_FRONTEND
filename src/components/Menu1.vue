<template>
  <div>
    <div class="contenedor_todo">
        <div class="contenedor1">
            <img
              src="@/assets/logo.png"
              class="logo"
              height="80px"
              width="80px"
              alt="Kitten"/>
              <h1 class="titulo">Libreria Virtual</h1>
        </div>
        <div>
          <b-nav  class="menu">
             <b-nav-item><router-link class="right" to="/UsuarioU">INICIO</router-link></b-nav-item>
              <b-nav-item href="/proceso">PROCESO</b-nav-item>
            <button class="btn btn-secondary"
          type="button"
          name="cerar"
          value="CerrarSesion"
          v-on:click="cerrarTodo()"><b-icon icon="box-arrow-right" aria-hidden="true"></b-icon></button>
         
            </b-nav>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default{
mounted(){
    this.getTodos();
    this.paginate(this.perPage, 0);
    var obj = JSON.parse(sessionStorage.getItem("user"));
  },
methods: {
        async cerrarTodo(obj) {
      if (confirm("¿Confirma cerrar sesión?")){
        sessionStorage.clear();
        this.$router.push("/casa");
        }  
      }
}
}
</script>
<style scoped>
.contenedor_todo {
  border: 1px solid black;
  background: #16223f;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  
}
.contenedor1 {
  display: flex;
  align-items: center;
}
.logo {
  border: 1px blueviolet;
  padding: 4px;
}
.titulo {
  color: white;
  padding-left: 20px;
}
.menu a:hover {
    background: linear-gradient(to top, rgb(44, 43, 43), 5%, #ffffff);
    color: rgb(0, 0, 0);
}
a{
    color: rgb(255, 255, 255);
    text-decoration: none;
}
</style>