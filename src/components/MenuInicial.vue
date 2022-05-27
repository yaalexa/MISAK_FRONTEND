<template>
  <div class="todo">
    <div class="fondo">
        <ul class="ul">
          <li class="lia"></li>
          <li><router-link to="/">INICIO</router-link></li>
          <li><router-link to="/Cultura">CULTURA</router-link></li>
          <li><router-link to="/Nosotros">NOSOTROS</router-link></li>
          <li><router-link to="/Casa">INGRESAR</router-link></li>
          <li class="lib"></li>
        </ul>
    </div>
    
  </div>
</template>
<style scoped>
.todo{
  display: flex;
  position: fixed;
  width: 100%;
}
.fondo{
  background-image:url("@/assets/fondo33.jpg");
  background-size: cover;
  width: 100%;
}
.ul{
  display: flex;
  justify-content: center;
  position: static;
  align-content: center;
  margin: 0;
  padding: 0;
}
li{
  margin-right: 4vw;
  margin-top: 3vw;
  list-style: none;
}
/* .lia{
  border-left: 2px solid #ffffff;
  } */
.lia::before{
  content:"_________________________________|";
  color: white;
  }
/* .lib{
  border-right: 2px solid #fffdfd;
  } */
.lib::after{
  content: "|_________________________________";
  color: white;
  }
.hr {
  height: 10px;
  border-color: rgb(255, 255, 255);
}
a:hover {
    background: linear-gradient(to top, rgb(231, 167, 167), 5%, #2d0aca);
    color: rgb(255, 255, 255);
}
a{
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.menu{
  margin-right: 1vw;
}
</style>