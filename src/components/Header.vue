<template>
  <section>
    <div>
      <b-navbar toggleable="sm" style="position: fixed">
        <b-navbar-toggle v-b-toggle.sidebar-no-header></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav> </b-collapse>
      </b-navbar>
    </div>
    <div class="nav-side-menu" id="nav-side-menu">
      <br />
      <i
        class="fa fa-bars fa-2x toggle-btn"
        data-toggle="collapse"
        data-target="#menu-content"
      ></i>
      <div>
        <div class="menu-list" id="navbarSupportedContent">
          <div class="brand">
            <img src="@/assets/logo.png" id="icon" alt="User Icon" />
          </div>
          <ul id="menu-content" class="menu-content collapse out">
            <li data-toggle="collapse" data-target="#new" class="collapsed">
              <router-link
                exact-active-class="active"
                to="/Library"
                class="nav-link"
                aria-current="page"
                >BIBLIOTECA</router-link
              >
            </li>

            <!--usuario-->
            <li data-toggle="collapse" data-target="#new" class="collapsed">
              <router-link
                exact-active-class="active"
                to="/usuarios"
                class="nav-link"
                aria-current="page"
                >USUARIOS</router-link
              >
            </li>
            <li data-toggle="collapse" data-target="#new" class="collapsed">
              <router-link
                exact-active-class="active"
                to="/MostrarRol"
                class="nav-link"
                aria-current="page"
                >ROLES
              </router-link>
            </li>

            <!--reportes-->
            <li data-toggle="collapse" data-target="#new" class="collapsed">
              <router-link
                exact-active-class="active"
                to="/vistaReporte"
                class="nav-link"
                aria-current="page"
                >REPORTES</router-link
              >
            </li>
            <li>
              <b-button
                variant="outline-warning"
                @click="cerrarTodo()"
                class="mb-2"
              >
                <b-icon icon="power" aria-hidden="true"></b-icon> Cerrar Sesión
              </b-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="menu1">
      <b-sidebar
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow
      >
        <template #default="{ hide }">
          <div class="p-3">
            <img src="@/assets/logo.png" id="icon" alt="User Icon" />
            <nav class="mb-3">
              <b-nav vertical>
                <li data-toggle="collapse" data-target="#new" class="collapsed">
                  <router-link
                    exact-active-class="active"
                    to="/Library"
                    class="nav-link"
                    aria-current="page"
                    >BIBLIOTECA</router-link
                  >
                </li>

                <!--usuario-->
                <li data-toggle="collapse" data-target="#new" class="collapsed">
                  <router-link
                    exact-active-class="active"
                    to="/usuarios"
                    class="nav-link"
                    aria-current="page"
                    >USUARIOS</router-link
                  >
                </li>
                <li data-toggle="collapse" data-target="#new" class="collapsed">
                  <router-link
                    exact-active-class="active"
                    to="/MostrarRol"
                    class="nav-link"
                    aria-current="page"
                    >ROLES
                  </router-link>
                </li>

                <!--reportes-->
                <li data-toggle="collapse" data-target="#new" class="collapsed">
                  <router-link
                    exact-active-class="active"
                    to="/vistaReporte"
                    class="nav-link"
                    aria-current="page"
                    >REPORTES</router-link
                  >
                </li>
                <li>
                  <b-button
                    variant="outline-warning"
                    @click="cerrarTodo()"
                    class="mb-2"
                  >
                    <b-icon icon="power" aria-hidden="true"></b-icon> Cerrar
                    Sesión
                  </b-button>
                </li>
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="hide"
              >CERRAR MENU</b-button
            >
          </div>
        </template>
      </b-sidebar>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2';
export default {
  name: "MenuAdmin",
  mounted() {
    var obj = JSON.parse(sessionStorage.getItem("user"));
    var usrid = JSON.parse(sessionStorage.getItem("userid"));
    var rolusr2 = JSON.parse(sessionStorage.getItem("rolusr"));
    this.obtenerUsuario(usrid);
  },
  created() {},
  data: function () {
    return {
      administrador: false,
      rolName: null,
    };
  },
  methods: {
    obtenerUsuario(usrid) {
      this.rolName = JSON.parse(sessionStorage.getItem("usuario"));
      this.rolName = this.rolName.usr_name;
      this.administrador = this.rolName.usr_name;
    },
    async cerrarTodo(obj) {
      Swal.fire({
        title: "Cierre de sesión",
        icon: "warning",
        iconColor: "#ffc107",
        showCancelButton: true,
        confirmButtonColor: "#ffc107",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cerrar sesión!",
      }).then((result) => {
        if (result.isConfirmed) {
          var token = JSON.parse(sessionStorage.getItem("user"));
          this.axios
            .get(`/logout`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            })
            .then((response) => {
              console.log("logout: ", response.data);
              sessionStorage.clear();
              this.$router.push("/");
            })
            .catch((errorgrave) => console.log(errorgrave));
          Swal.fire({
            icon: "success",
            iconColor: "#ffc107",
            confirmButtonColor: "#ffc107",
            text: "Cierre de sesión exitosa",
          });
        }
      });
    },
  },
};
</script>
<style>
.navbar {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.nav-side-menu {
  overflow: auto;
  font-family: verdana;
  font-size: 12px;
  font-weight: 200;
  background: linear-gradient(to top, #16223f, 5%, #16223f);

  color: #e1ffff;
  background-image: url("@/assets/fondo.png");
  height: 100vh;
  width: 100%;
}
.nav-side-menu .brand {
  background-color: #000000;
  line-height: 50px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  background-image: url("@/assets/fondo.png");
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
  width: 80%;
  background-position: center center;
}
#sena {
  width: 40%;
  background-position: center center;
  opacity: 0.9;
}
.menu1 {
  display: none;
}

@media (max-width: 600px) {
  .nav-side-menu {
    display: none;
  }

  .btn-secondary {
    background-color: white !important;
    border-color: #000 !important;
  }
  .b-sidebar-body {
    background: #16223f !important;
    color: white !important;
  }
  .btn-primary {
    color: #fff !important;
    background-color: #16223f !important;
    border-color: #f6f6f6 !important;
  }
  .nav-link {
    color: #e9ecef !important;
  }
  .menu1 {
    position: sticky;
    top: 20px;
    display: list-item;
  }
}
</style>