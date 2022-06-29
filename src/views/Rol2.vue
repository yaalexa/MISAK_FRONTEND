<template>
  <div>
    <Header />
    <div class="container izquierda">
      <div class="col text-center">
        <h1>ROLES</h1>
      </div>

      <div class="col-12 mb-2">
        <!-- llamamos al componente para Crear   -->
        <router-link :to="{ name: 'crearrol2' }" class="btn btn-success"
          ><i class="fas fa-plus-circle"></i
        ></router-link>
      </div>
      <form action="" class="form-horizontal">
        <div class="form-group left">
          <label for="" class="control-label col-sm-4"> Email </label>
          <div class="col-sm-6">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              v-model="rol2.email"
              placeholder="ejemplo@micorreo.com"
            />
          </div>
          <button type="button" class="btn btn-primary" v-on:click="guardar()">
            Buscar
          </button>
          <button
            type="button"
            class="btn btn-dark margen"
            v-on:click="salir()"
          >
            Salir
          </button>
        </div>
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead class="bg-primary text-white">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rol2 in rol2" :key="rol2.id">
                  <td>{{ rol2.id }}</td>
                  <td>{{ rol2.name }}</td>
                  <td>{{ rol2.email }}</td>
                  <td>
                    <!-- llamamos al componente para Editar     -->
                    <router-link
                      :to="{ name: 'editarrol2', params: { id: rol2.id } }"
                      class="btn btn-info"
                      ><i class="fas fa-edit"></i
                    ></router-link>
                    <a
                      type="button"
                      @click="borrarrol2(rol2.id)"
                      class="btn btn-danger"
                      ><i class="fas fa-trash"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "rol2",
  data() {
    return {
      rol2: [],
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.mostrarRol2();
  },
  methods: {
    async mostrarRol2() {
      await this.axios
        .get("/users")
        .then((response) => {
          this.rol2 = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.areas = [];
        });
      /*             await this.axios.get('/editorials').then(response=>{
                this.editorial = response.data
            }).catch(error=>{
                console.log(error)
                this.areas = []
            }) */
    },
    borrarEditorial(id) {
      if (confirm("¿Confirma eliminar el registro?")) {
        this.axios
          .delete(`/editorials/${id}`)
          .then((response) => {
            console.log(response);
            this.mostrarEditorial();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    salir() {
      this.$router.push("/dashboard");
    },
  },
};
</script>