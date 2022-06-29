<template>
  <div>
    <header class="header">
      <div class="contenedor logo-contenedor">
        <span class="menu-icon">Ver menú</span>
        <img class="logo" src="../assets/logo.png" alt="" />
        <input placeholder="Buscar " type="text" v-model="search" />
        <div class="nav">
          <ul>
            <li><router-link to="/UsuarioU">Inicio</router-link></li>
            <li><router-link to="/UsuarioU">Catalogo</router-link></li>
            <li><router-link to="/UsuarioU">Contacto</router-link></li>
          </ul>
        </div>
        <img class="logo" src="../assets/user1.png" alt="" />
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Menu"
};
</script>
<style scoped>
contenedor {
  width: 90%;
  margin: 0 auto;
}
.header {
  background: linear-gradient(to top, #16223f, 5%, #16223f);
  color: black;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
.header a {
  color: rgb(251, 253, 253);
  text-decoration: none;
}
.logo-contenedor {
  display: flex;
  justify-content: space-between;

  align-items: center;
}
.logo {
  margin: 1rem;
  width: 3%;
  height: 3%;
}
.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav ul li {
  display: inline-block;
}
.nav ul li a {
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.4s linear;
  border-radius: 5px;
}
.nav ul li a:hover {
  background: #16223f;
}
.main {
  padding: 12rem 0rem;
}
h1 {
  text-align: center;
}
.img1 {
  width: 40%;
}
.imag01 {
  display: flex;
  justify-content: center;
}
.menu-icon {
  display: none;
}
@media only screen and (max-width: 767px) {
  .menu-icon {
    display: block;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
  .nav {
    width: 100%;
    margin-top: 1rem;
  }
  .nav ul {
    display: none;
  }
  .nav ul.show {
    display: block;
  }
  .nav ul li {
    display: block;
  }
  .nav ul li a {
    display: block;
    padding: 0.5rem 0;
    transition: all 0.4s linear;
    border-radius: 5px;
  }
  .nav ul li a:hover {
    background: #16223f;
  }
}
</style>
