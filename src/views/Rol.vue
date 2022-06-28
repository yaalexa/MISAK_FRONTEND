<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>

    <div class="cara2">
      <section>
        <form action="" class="form-horizontal">
          <div class="form-group row">
            <label for=""> Email </label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="usr.email"
                placeholder="ejemplo@micorreo.com"
              />
            </div>
            <div class="col-sm-4">
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="guardar()"
              >
                Buscar
              </button>
            </div>
          </div>
          <div class="form-group left">
            <button
              type="button"
              class="btn btn-dark margen"
              v-on:click="salir()"
            >
              Salir
            </button>
          </div>
          <br />
          <div class="form-group">
            <!-- <button type="button" class="btn btn-primary" v-on:click="guardar()" > Buscar </button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  > Salir </button> -->
            <div class="col-12 mb-2">
              <button
                type="button"
                class="btn btn-success"
                v-on:click="iraRoles()"
              >
                crear Roles
              </button>
              <!-- llamamos al componente para Crear rol  -->
              <!-- <router-link :to='{name:"mostrar"}' class="btn btn-success"><i class="fas fa-plus-circle"> Mostrar Roles</i></router-link> -->
            </div>
          </div>

          <br />

          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="bg-primary text-white">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="usr in usr" :key="usr.id">
                    <td>{{ usr.id }}</td>
                    <td>{{ usr.name }}</td>
                    <td>{{ usr.full_name }}</td>
                    <td>{{ usr.email }}</td>
                    <td>{{ usr.rol_id }}</td>

                    <td>
                      <!-- llamamos al componente para Editar     -->
                      <router-link
                        :to="{ name: 'Editar', params: { id: usr.id } }"
                        class="btn btn-info"
                        ><i class="fas fa-edit">
                          editar Rol Usuario
                        </i></router-link
                      >
                      <!-- <a type="button" @click="borrarEditorial(rol.id)" class="btn btn-danger"><i class="fas fa-trash">eleminar</i></a> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>

        <!-- <Footer /> -->
      </section>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
//import Footer from '@/components/Footer.vue'
import axios from "axios";
export default {
  name: "Roles",

  data() {
    return {
      usr: [],
    };
  },
  components: {
    Header,
    //Footer
  },
  mounted() {
  
    this.mostrarUsr();
  },
  methods: {
    
    async mostrarUsr() {
      await this.axios
        .get("/users")
        .then((response) => {
          this.usr = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buscar() {
      this.usr
        .find(this.usr.email)
        .then((response) => {
          this.usr = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    guardar() {},
    iraRoles() {
      this.$router.push("/mostrar");
    },

    salir() {
      this.$router.push("/dashboard");
    },
    /* ordenarEmail(){
            this.usr.sort(this.usr.email)
        }, */

    makeToast(titulo, texto, tipo) {
      this.toastCount++;
      this.$bvToast.toast(texto, {
        title: titulo,
        variant: tipo,
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
  },
};
</script>

<style scoped>
.left {
  text-align: left;
}
.izquierda {
  text-align: left;
  width: 50%;
}
</style>