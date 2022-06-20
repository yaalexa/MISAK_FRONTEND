<template>
  <div class="new_conten">
    <div class="container">
      <header class="heading">RESTABLECIMIENTO DE CONTRASEÑA</header>
      <div class="form">
      <div class="col-sm-8">

          <div class="col-sm-12">
            <div class="row">
              <div class="col-xs-4">
                <label class="mail">Email:</label>
              </div>
              <div class="col-xs-8">
                <input 
                  type="email"
                  name="email"
                  id="email"
                  v-model="email"
                  placeholder="Enter your email"
                  class="form-control"
                />
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="row">
              <div class="col-xs-4">
                <label class="pass">Contraseña Antigua:</label>
              </div>
              <div class="col-xs-8">
                <input
                  type="password"
                  name="oldpassword"
                  id="password"
                  v-model="password"
                  placeholder="Enter your Password"
                  class="form-control"
                />
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="row">
              <div class="col-xs-4">
                <label class="pass">Nueva Contraseña:</label>
              </div>
              <div class="col-xs-8">
                <input
                  type="password"
                  name="newpassword"
                  id="password_confirmation"
                  placeholder="Enter your Confirmation Password"
                  class="form-control"
                />
              </div>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="row">
              <div class="col-xs-4">
                <label class="pass">Confirmacion de Contraseña Nueva:</label>
              </div>
              <div class="col-xs-8">
                <input
                  type="text"
                  name="confirmacion"
                  id="certificate_misak"
                  placeholder="Certificado misak"
                  class="form-control"
                />
              </div>
            </div>
          </div>

          <div>
            <br />
            <button type="button" class="btn btn-primary">Guardar</button>
          </div>
          <router-link class="fadeIn fourth volverv" to="/Casa">Volver</router-link><br><br>
      </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Restablecer",
  components: {},
  methods: {},
};
</script>
<style>
.new_conten{
	 background-image:url("@/assets/Screenshot_2.png");
      height: 100vh;
	 background-repeat:no-repeat;
	 background-size:cover;
	 width:100%;
	 height:100vh;
	 overflow:auto;
    filter: alpha(opacity=50);
     
}
.container {
   background-image:url("@/assets/fondo.png");
    opacity: 0.8;
    box-shadow: 2px 5px 5px 0px #eee;
     padding-top: 10px;
     height: 450px;
     margin-top: 50px;
     background-repeat:no-repeat;
	 background-size:cover;
     
}
.form{
    
    display: flex;
    justify-content: center;
    
}
.row{
    
    width: 100%;
    align-items: center;
    flex-direction: column;
}

.heading{
	 font-size:30px;
	 color:#F96;
	 padding-top:10px;
}
#email{
	  margin-top: 5px;
}
.mail{
	 margin-left: 44px;
     font-family: sans-serif;
     color: white;
     font-size: 14px;
     margin-top: 13px;
}
.pass{
	 color: white;
     margin-top: 9px;
     font-size: 14px;
     font-family: sans-serif;
     margin-left: 6px;
     margin-top: 9px;
}
#password{
 margin-top: 6px;
}
button{
	 color: white;
     font-size: 20px;
     width: 15%;
     margin-top: 16px;
   }
.button.btn-warning:hover {
    box-shadow: 2px 1px 2px 3px #99ccff;
	background:#5900a6;
	color:#fff;
	transition: background-color 1.15s ease-in-out,border-color 1.15s ease-in-out,box-shadow 1.15s ease-in-out;
	
}

</style>
