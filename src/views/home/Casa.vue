<template>
  <div>
    <header>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="6" md="4">
            <div>
              <!-- Image and text -->
              <b-navbar variant="faded" type="light">
                <b-navbar-brand href="/Casa">
                  <img
                    src="@/assets/logo.png"
                    class="d-inline-block align-top"
                    height="50px"
                    width="50px"
                    alt="Kitten"
                  />
                  Libreria virtual
                </b-navbar-brand>
              </b-navbar>
            </div>
          </b-col>
          <b-col class="header" cols="12" md="8">
            <div>
              <b-nav class="ul" pills>
                <b-nav-item>Inicio</b-nav-item>
                <b-nav-item>Catalogos</b-nav-item>

                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Coleciones"
                  toggle-class="nav-link-custom"
                  right
                >
                  <b-dropdown-item>One</b-dropdown-item>
                  <b-dropdown-item>Two</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>Three</b-dropdown-item>
                </b-nav-item-dropdown>
 
                <b-nav-item>Contacto</b-nav-item>
                <b-nav-item href="/casa">Ingresar|Registrar</b-nav-item>
              </b-nav>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <div class="mgBa">
      <div class="box">
        <div class="nav-biblo">
          <img
            src="@/assets/logo.png"
            alt="Biblioteca Virtual"
            height="100px"
            width="100px"
          />
          <p>Biblioteca Virtual del Sena</p>
        </div>
        <div class="divisor"></div>
        <!-- <div>Biblioteca Virtual</div> -->
        <div class="contenedor">
          <h2>
            Efecto de máquina de escribir hola nuevo texto.<span>&#160;</span>
          </h2>
        </div>
      </div>
    </div>
    <br />

    <article>
      <b-row>
        <b-col cols="6" md="4">
          <b-navbar variant="faded" type="light">
            <b-navbar-brand href="/Casa">
              <img
                src="@/assets/logo.png"
                class="d-inline-block align-top"
                height="50px"
                width="50px"
                alt="Kitten"
              />
              Consulta
            </b-navbar-brand>
            <p>
              solicitudes de préstamo y consulta de los materiales
              bibliográficos, hemerográficos y audiovisuales que reposan en los
              depósitos de nuestras bibliotecas
            </p>
          </b-navbar>
        </b-col>
        <b-col cols="6" md="4">
          <b-navbar variant="faded" type="light">
            <b-navbar-brand href="/Casa">
              <img
                src="@/assets/logo.png"
                class="d-inline-block align-top"
                height="50px"
                width="50px"
                alt="Kitten"
              />
              Coleciones
            </b-navbar-brand>
            <p>
              descripciones y generalidades de publicaciones con cerca de 100
              materiales periódicos y revistas
            </p>
          </b-navbar>
        </b-col>
        <b-col cols="6" md="4">
          <b-navbar variant="faded" type="light">
            <b-navbar-brand href="/Casa">
              <img
                src="@/assets/logo.png"
                class="d-inline-block align-top"
                height="50px"
                width="50px"
                alt="Kitten"
              />
              Actividades
            </b-navbar-brand>
            <p>
              Conoce las principales actividades culturales organizadas por la
              Biblioteca Misak de Colombia.
            </p>
          </b-navbar>
        </b-col>
      </b-row>
    </article>
    <br />
    <section class="filtro">
      <div>
        <b-container class="bv-example-row">
          <b-row class="text-center">
            <h1>Filtro de busqueda</h1>
          </b-row>
        </b-container>
      </div>
      <div>
        <b-container class="bv-example-row mb-3">
          <b-row cols="4" class="busqueda">
            <b-col class="busqueda">
              <b-navbar-brand href="/Casa">
                <img
                  src="@/assets/logo.png"
                  class="d-inline-block align-top"
                  height="50px"
                  width="50px"
                  alt="Kitten"
                  title="Ir a la busqueda de los autores"
                />
                Autores
              </b-navbar-brand>
            </b-col>
            <b-col class="busqueda">
              <b-navbar-brand href="/Casa">
                <img
                  src="@/assets/logo.png"
                  class="d-inline-block align-top"
                  height="50px"
                  width="50px"
                  alt="Kitten"
                  title="Ir a la busqueda de los autores"
                />
                Niveles Educativos
              </b-navbar-brand>
            </b-col>
            <b-col class="busqueda">
              <b-navbar-brand href="/Casa">
                <img
                  src="@/assets/logo.png"
                  class="d-inline-block align-top"
                  height="50px"
                  width="50px"
                  alt="Kitten"
                  title="Ir a la busqueda de los autores"
                />
                Videos
              </b-navbar-brand>
            </b-col>
            <b-col class="busqueda">
              <b-navbar-brand href="/Casa">
                <img
                  src="@/assets/logo.png"
                  class="d-inline-block align-top"
                  height="50px"
                  width="50px"
                  alt="Kitten"
                  title="Ir a la busqueda de los autores"
                />
                Materiales
              </b-navbar-brand>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>

    <div>
      <footer class="foter">
        <b-container class="bv-example-row bv-example-row-flex-cols">
          <b-row align-v="stretch">
            <b-col>
              <h3 class="footer-l">Nuestra Bibloteca</h3>
              <ul>
                <li>mmm</li>
                <li>mmm</li>
                <li>mmmmm</li>
              </ul>
            </b-col>
            <b-col>
              <h3 class="footer-l">Servicios</h3>
              <ul>
                <li>mmm</li>
                <li>mmm</li>
                <li>mmmmm</li>
              </ul>
            </b-col>
            <b-col>
              <h3 class="footer-l">Contacto</h3>
              <ul>
                <li>Personales</li>
                <li>Bibloteca Misak</li>
                <li>Tel. (2) 587951 | Silvia, Cauca</li>
                <li>Contactenos@biblomisak.com.co</li>
              </ul>
              <ul>
                <b-navbar-brand href="/Casa">
                  <img
                    src="@/assets/facebook.png"
                    class="d-inline-block align-top"
                    height="40px"
                    width="40px"
                    alt="Kitten"
                    title="Ir a la busqueda de los autores"
                  />
                </b-navbar-brand>
                <b-navbar-brand href="/Casa">
                  <img
                    src="@/assets/twitter-sign.png"
                    class="d-inline-block align-top"
                    height="40px"
                    width="40px"
                    alt="Kitten"
                    title="Ir a la busqueda de los autores"
                  />
                </b-navbar-brand>
                <b-navbar-brand href="/Casa">
                  <img
                    src="@/assets/instagram.png"
                    class="d-inline-block align-top"
                    height="40px"
                    width="40px"
                    alt="Kitten"
                    title="Ir a la busqueda de los autores"
                  />
                </b-navbar-brand>
                <b-navbar-brand href="/Casa">
                  <img
                    src="@/assets/youtube.png"
                    class="d-inline-block align-top"
                    height="40px"
                    width="40px"
                    alt="Kitten"
                    title="Ir a la busqueda de los autores"
                  />
                </b-navbar-brand>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Casa",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
};
</script>
<style scoped>
body {
  
}
header {
  display: flex;
  background: #16223f;
  align-items: center;
}
.bv-example-row {
  margin-top: 10px;
}
.mgBa {
  background-image: url("https://picsum.photos/1650/650/?image=41");
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
  background-position-x: center;
  background-position-y: center;
}
.filtro {
  background: #16223f;
  margin: 2px;
  border: 2px;
}
.busqueda {
  background: #16223f;
}
h1 {
  color: white;
}
.ul {
  justify-content: flex-end;
  text-align: center;
}
.box {
  margin: auto;
  display: flex;
  width: 40%;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;
}
.divisor {
  width: 1px !important;
  background-color: aliceblue;
}
.box div {
  width: 300px;
  height: 500px;
  margin: auto;
  margin-top: 100px;
  right: 10px;
}
.nav-biblo {
  display: flex;
}
.footer-l {
  color: black;
}
.foter {
  background: grey;
}
.contenedor {
  margin: auto;
  display: table;
}
h2 {
  position: relative;
  color: #fff;
  font-size: 1.5em;
}
h2 span {
  position: absolute;
  right: 0;
  width: 0;
  background: white;
  border-left: 1px solid #000;
  animation: escribir 4s steps(30) infinite;
}
@keyframes escribir {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>