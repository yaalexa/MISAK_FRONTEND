<template>
 <section>
<div class="nav-side-menu">
 
    <div class="brand"> 
       <img src="@/assets/logo.png" id="icon" alt="User Icon" />
    </div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div class="menu-list">
            <ul id="menu-content" class="menu-content collapse out">
                <li data-toggle="collapse" data-target="#new" class="collapsed">
                <router-link exact-active-class="active" to="/welcome" class="nav-link" aria-current="page">HOME</router-link>
                </li>
                <li data-toggle="collapse" data-target="#new" class="collapsed">
                <router-link exact-active-class="active" to="/Library" class="nav-link" aria-current="page">BIBLIOTECA</router-link>
                </li>
                <!--
                 <li data-toggle="collapse" data-target="#new" class="collapsed">
                <router-link exact-active-class="active" to="/dashboard" class="nav-link" aria-current="page">MATERIAL</router-link>
                </li>
                  <li data-toggle="collapse" data-target="#new" class="collapsed">
                <router-link exact-active-class="active" to="/Editorial" class="nav-link" aria-current="page">EDITORIAL</router-link>
                </li>

                    <li  data-toggle="collapse" data-target="#products" class="collapsed">
                   <router-link exact-active-class="active" to="/Autores" class="nav-link" aria-current="page">AUTORES</router-link>
                </li>
                
                <li data-toggle="collapse" data-target="#service" class="collapsed">
                   <router-link exact-active-class="active" to="/TipoMaterial" class="nav-link" aria-current="page">TIPO MATERIAL</router-link>
               
                </li>  

              
                
                   <li data-toggle="collapse" data-target="#new" class="collapsed">
                <router-link exact-active-class="active" to="/NivelEducativo" class="nav-link" aria-current="page">NIVEL EDUCATIVO</router-link>
                </li>-->

                <!--usuario-->
                  <li data-toggle="collapse" data-target="#new" class="collapsed">
                  <router-link exact-active-class="active" to="/usuarios" class="nav-link" aria-current="page">USUARIOS</router-link>
                </li>
               <!-- <li data-toggle="collapse" data-target="#new" class="collapsed">
                  <router-link exact-active-class="active" to="/rol" class="nav-link" aria-current="page"> ROLES </router-link>
                </li>-->
                 <!--reportes-->
                  <li data-toggle="collapse" data-target="#new" class="collapsed">
                  <router-link exact-active-class="active" to="/reportes" class="nav-link" aria-current="page">REPORTES</router-link>
                </li>
                 </ul>  
     </div>
     <fieldset >
      <div class="contenedor"> 
        <table>
            <thead>
                  <tr>
                      <td class="td">Tipo Usuario: {{}} </td>
                  </tr>
                  <tr>
                     <td> <img src="@/assets/sena.png" id="icon" ></td> 
                  </tr>
                 
            </thead>
            <tbody>
                  <td class="td"> Nombre: {{}} </td>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="7" class="centro">Servicio Nacional de Aprendizaje SENA</td>
                </tr>
            </tfoot>
        </table>
      </div>
    </fieldset> 
</div>
    </section>
</template>

<style>
.nav-side-menu {
  overflow: auto;
  font-family: verdana;
  font-size: 12px;
  font-weight: 200;
  background-color: #2e353d;
  color: #e1ffff;
  background-image:url("@/assets/fondo.png") ;
   opacity: 0.7;
 
  height: 100vh;
  width: 100%;
}
.nav-side-menu .brand {
  background-color: #23282e;
  line-height: 50px;
  
  width: 100%;
  text-align: center;
  font-size: 14px;
  background-image:url("@/assets/fondo.png") ;
   opacity: 0.7;
}
.nav-side-menu .toggle-btn {
  display: none;
}
.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  cursor: pointer;

}
.nav-side-menu ul :not(collapsed) .arrow:before,
.nav-side-menu li :not(collapsed) .arrow:before {
  font-family: FontAwesome;
  content: "\f078";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  float: right;
}
.nav-side-menu ul .active,
.nav-side-menu li .active {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
}
.nav-side-menu ul .sub-menu li.active,
.nav-side-menu li .sub-menu li.active {
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li.active a,
.nav-side-menu li .sub-menu li.active a {
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #020203;
}
.nav-side-menu ul .sub-menu li:before,
.nav-side-menu li .sub-menu li:before {
  font-family: FontAwesome;
  content: "\f105";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
}
.nav-side-menu li {
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}
.nav-side-menu li a {
  text-decoration: none;
  color: #e1ffff;
}
.nav-side-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li:hover {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

  .nav-side-menu {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    color: #000;
    width: 40px;
    text-align: center;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }


  .nav-side-menu .menu-list .menu-content {
    display: block;
  }

body {
  margin: 0px;
  padding: 0px;
}
#icon {
  width:70%;
  background-position: center center;
  background-size: 100px auto;
 
}
</style>