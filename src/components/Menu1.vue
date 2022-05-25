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
            <b-nav-item>INICIO</b-nav-item>
            <b-nav-item>NOSOTROS</b-nav-item>
            <b-nav-item>CULTURA</b-nav-item>
          </b-nav>
        </div>
    </div>
  </div>
</template>
<style scoped>
.contenedor_todo {
  border: 1px solid black;
  background: #16223f;
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: absolute;
  align-items: center;
  width: 100vw;
  
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
    background: #e20c0c;
    color: rgb(8, 0, 0);
}
a{
    color: white;
}

</style>