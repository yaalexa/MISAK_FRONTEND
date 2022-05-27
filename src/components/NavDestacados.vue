<template>
 <section>
<div class="nav-side-menu1">

  <h6 class="tittle">LOS MAS VISUALIZADOS</h6>
  <br><br>

  <b-list-group >
  <b-list-group-item class="list-group-item-dark" v-for="visual in visual" v-bind:key="visual.id"> {{visual.name}} &nbsp; <b-icon icon="star-fill" animation="fade" scale="2" variant="danger"></b-icon>&nbsp; {{visual.conteo}} </b-list-group-item>
  </b-list-group>

  <div><br><br></div>

  <h6 class="tittle">LOS MAS DESCARGADOS</h6>
  <br><br>

  <b-list-group >
  <b-list-group-item class="list-group-item-dark" v-for="descarga in descarga" v-bind:key="descarga.id"> {{descarga.name}} &nbsp; <b-icon icon="star-fill" animation="fade" scale="2" variant="danger"></b-icon>&nbsp; {{descarga.conteo}} </b-list-group-item>
  </b-list-group>
 
        
   </div>
 </section>
</template>

<script>
import axios from "axios";
export default{
    data(){
        return{
            visual:null,
            descarga:null
            
        };
    },
    mounted(){
        this.destvisual();
        this.destdescarga();
    },
    methods: {
        destvisual(){
         axios.get('http://127.0.0.1:8000/api/visualmuser')
         .then(response => {
             this.visual = response.data;
         }) 
        },
        destdescarga(){
        axios.get('http://127.0.0.1:8000/api/descargasuser')
        .then(response=>{
            this.descarga = response.data;
        })
            
        }
        
    }
}
</script>

<style>
.tittle{
  color:darkblue;
  
}
.nav-side-menu1 {
  overflow: hidden;
  font-family: verdana;
  font-size: 12px;
  font-weight: 200;
    background: linear-gradient(to top, #aab0c0, 5%, #d3d3d4);
  color: #9aaaaa;
  /*background-image:url("@/assets/fondo.png") ;*/
  background-color: #75838f;
  height: 100vh;
  width: 100%;
}
.nav-side-menu .brand {
  background-color: #335d91;
  line-height: 50px;
  
  width: 100%;
  text-align: center;
  font-size: 14px;
  /*background-image:url("@/assets/fondo.png") ;*/
   opacity: 0.9;
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
    text-align: center !important;
    font-size: 22px;
    padding-left: 10px;
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
.tablavisualizacion{
    text-align: center;
    color: #e1ffff;
}
</style>