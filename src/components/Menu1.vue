<template>
  <div class="contenedor_todo">
    <b-navbar toggleable="lg" type="dark" fixed fill>
      <b-navbar-brand class="log">
        <b-img
          fluid
          v-bind="pops"
          :src="require('../assets/logo2.png')"
          alt="Image 8"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-b-tooltip.hover title="Inicio" href="/UsuarioU"
            ><b-icon
              icon="house-fill"
              aria-hidden="true"
              font-scale="1.5"
            ></b-icon
          ></b-nav-item>
          <b-nav-item href="/proceso" v-b-tooltip.hover title="Proceso" 
            ><b-icon
              icon="cloud-download-fill"
              aria-hidden="true"
              font-scale="1.5"
            ></b-icon
          ></b-nav-item>
          <b-nav-item href="/perfilu" v-b-tooltip.hover title="Usuario" 
            ><b-icon icon="person" aria-hidden="true" font-scale="1.5"></b-icon
          ></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-dropdown-item>
            <button
              class="btn btn-secondary"
              type="button"
              name="cerar"
              value="CerrarSesion"
              v-on:click="cerrarTodo()"
              v-b-tooltip.hover title="Cerrar Sesion" 
            >
              <b-icon icon="box-arrow-right" aria-hidden="true"></b-icon>
            </button>
          </b-dropdown-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Menu1",
  data() {
    return {
      pops: {
        width: 210,
        height: 100,
        fluid: true,
      },
    };
  },
  mounted() {
    this.getTodos();
    var obj = JSON.parse(sessionStorage.getItem("user"));
  },

  methods: {
    async cerrarTodo(obj) {
      if (confirm("¿Confirma cerrar sesión?")) {
        sessionStorage.clear();
        this.$router.push("/casa");
      }
    },
  },
};
</script>

<style scoped>
.log {
  width: 80%;
  min-width: 1%;
  text-align: left;
}
.contenedor_todo {
  border: 1px solid black;
  background: #16223f;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
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
a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
</style>