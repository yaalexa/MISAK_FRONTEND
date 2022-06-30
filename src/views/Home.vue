<template>
  <div class="general">
    <div class="home">
      <div class="wrapper fadeInDown">
        <div id="formContent" class="login">
          <!-- logo -->
          <div class="fadeIn first">
            <img src="@/assets/logo.png" id="icon" alt="User Icon" />
          </div>
          <!-- Formulario login -->
          <form v-on:submit.prevent="recapt()" action="" method="POST">
            <input
              type="text"
              id="email"
              class="fadeIn second"
              name="login"
              placeholder="Correo"
              v-model="email"
            />
            <input
              type="password"
              id="password"
              class="form-control password1"
              name="login"
              placeholder="Contraseña"
              v-model="password"
            />
            <div class="catcha">
              <vue-recaptcha
                class="recap"
                ref="recaptcha"
                sitekey="6LdCUjcgAAAAAM-G2M8Y4utP2L87TkkGUiHU12YP"
              />
            </div>
            <input type="submit" class="fadeIn fourth" value="ENTRAR" />
          </form>
          <router-link class="fadeIn fourth" to="/Register"
            >Registrate</router-link
          >
          <br /><br />
          <router-link class="fadeIn fourth" to="/">Volver</router-link><br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueSession from "vue-session";
import { VueRecaptcha } from "vue-recaptcha";
import Swal from "sweetalert2";
export default {
  name: "Login",
  components: {
    VueSession,
    VueRecaptcha,
  },
  props: {},
  data: function () {
    return {
      siteKey: "6LdCUjcgAAAAAM-G2M8Y4utP2L87TkkGUiHU12YP",
      error: null,
      error_msg: null,
      email: "",
      password: "",
    };
  },
  methods: {
    recapt() {
      var response = grecaptcha.getResponse();
      if (response.length == 0) {
        Swal.fire({
          title: "Captcha No Verificado",
          icon: "error",
          confirmButtonColor: "#ffc107",
          iconColor: "#ffc107",
        });
        return false;
      } else {
      axios.post("/login", {email:this.email,password: this.password}).then((data) => {
        console.log(data.data.status);
        if (data.data.status == "1") {
          this.$session.start();
          this.$session.set("sactum", data.data.access_token);
          this.$session.set("useridd", data.data.usr_id);
          this.$session.set("rol_id", data.data.rol_id);
          sessionStorage.setItem(
            "user",
            JSON.stringify(data.data.access_token)
          );
          sessionStorage.setItem("userid", JSON.stringify(data.data.usr_id));
          // localStorage.token = data.data.result.token;
          if (data.data.rol_id == 1) {
            this.$router.push("/welcome");
            sessionStorage.setItem("usuario", JSON.stringify(data.data));
          } else {
            this.$router.push("/usuarioU");
            sessionStorage.setItem("usuario2", JSON.stringify(data.data));
          }
        } else {
          Swal.fire({
          title: "Verifique Credenciales de Usuario",
          icon: "error",
          confirmButtonColor: "#ffc107",
          iconColor: "#ffc107",
        });;
        }
      });
      }
    },

  },
};
</script>


<style scoped>
.img2 {
  width: 100px;
  height: 100px;
  background-position: center center;
  background-size: 100px auto;
  opacity: 70%;
}
/* BASIC */
html {
  background-color: #56baed;
}
.general {
  background-image: url("@/assets/Screenshot_2.png");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  filter: alpha(opacity=90);
}
body {
  font-family: "Poppins", sans-serif;
}
.volverv {
  margin-left: 5vw;
}
a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}
h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}
/* STRUCTURE */
.wrapper {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}
.login {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-image: url("@/assets/fondo.png");
  padding: 30px;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 90%;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}
/* TABS */
h2.inactive {
  color: #cccccc;
}
h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}
/* FORM TYPOGRAPHY*/
input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #39ace7;
}
input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
.catcha {
  display: inline-block;
  text-align: center;
  padding: 15px 32px;
}
.recap {
  transform: scale(0.87);
  -webkit-transform: scale(0.87);
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
}
input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
input[type="text"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}
input[type="text"]:placeholder {
  color: #cccccc;
}
/* ANIMATIONS */
/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}
.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}
/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}
.underlineHover:hover {
  color: #0d0d0d;
}
.underlineHover:hover:after {
  width: 100%;
}
/* OTHERS */
*:focus {
  outline: none;
}
#icon {
  width: 60%;
}
.form-control {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  transition: all 0.5s ease-in-out;
  border-radius: 5px 5px 5px 5px;
}
</style>