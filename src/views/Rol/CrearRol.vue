<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>

    <div class="cara2">
      <section>
        <form @submit.prevent="guardar" class="form-horizontal">
          <div class="form-group row">
            <label for="" class="control-label"> Creando rol </label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                placeholder="nombre del rol"
              />
            </div>
            <div class="col-sm-4">
              <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </form>
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
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "CrearRol",
  data: function () {
    return {
      form: {
        name: "",
      },
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.guardar();
    this.$router.push("/Mostrar");
  },
  methods: {
    guardar() {
      this.axios
        .post("/rols", this.form)
        .then((data) => {
          console.log(data);
          this.makeToast("Hecho", "rol creado", "success");
          this.$router.push("/mostrar");
        })
        .catch((e) => {
          console.log(e);
          this.makeToast("Error", "Error al guardar", "error");
        });
    },
    salir() {
      this.$router.push("/mostrar");
    },
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