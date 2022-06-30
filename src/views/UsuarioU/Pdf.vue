<template>
  <div id="contenedor">
    <div id="menu" class="shadow-lg bg-white rounded"><Menu1 /></div>

    <div id="contenido">
      <div id="contenido2">
        <b-embed
          class="archivo"
          allowfullscreen
          frameborder="0"
          v-bind:src="this.pdfsrc + '#toolbar=0'"
        />
        <br />
        <div v-if="this.prioridad != 1">
          <button
            type="button"
            class="btn btn-dark margen"
            v-on:click="downloadWithAxios()"
          >
            Descargar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import func from 'vue-editor-bridge'; */
import axios from "axios";
import Menu1 from "@/components/Menu1.vue";
export default {
  name: "Pdf",
  data() {
    return {
      prioridad: null,
      codigo: null,
      descargara: null,
      pdfsrc: null,
      mtr_usr: {
        manejo_users: "no se que va aqui",
        detalle_material: "descargado",
        date_download: "2022-05-18 23:54:10",
        material_id: "",
        users_id: "",
      },
    };
  },

  components: {
    Menu1,
  },

  mounted() {
    this.getTodos();
  },

  methods: {
    downloadWithAxios() {
      axios({
        url: `/download/${this.$route.params.id}`,
        method: "GET",
        responseType: "blob",
        headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        this.descargara = response.data;
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        //codigo eduard extraemos el tipo de archivo
        var typer = this.descargara.type;
        // eduard sacamos la extension y la concatenamos a file
        var ext = typer.slice(typer.search("/") + 1, typer.length);
        var file = "file." + ext;
        console.log("type = ", typer);
        console.log("file =", file);
        fileLink.setAttribute("download", file);
        document.body.appendChild(fileLink);
        fileLink.click();
      });
      // codigo Eduard guarda el proceso del boton de descarga
      var usrid = JSON.parse(sessionStorage.getItem("userid"));
      this.mtr_usr.users_id = usrid;
      this.mtr_usr.material_id = this.$route.params.id;
      axios
        .post("/material__users", this.mtr_usr,{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                })
        .then((response) => {
          console.log(response);
        });
    },

    async getTodos() {
      this.codigo = this.$route.params.id;
      this.prioridad = this.$route.params.pr;
      await axios
        .get(`/download/${this.codigo}`, {
          responseType: "blob",
          headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                
        })
        .then((response) => {
          //codigo eduard para optener el type
          this.descargara = response.data;
          var typer = this.descargara.type;
          //codigo eduard cambiamos el 'application/pdf' por typer
          var fileURL = window.URL.createObjectURL(
            new Blob([response.data], { type: typer })
          );
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", "file.pdf");
          this.pdfsrc = document.body.appendChild(fileLink);
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
  },
};
</script>

<style scoped>
#cabecera {
  color: #ff9;
  height: 80px;
}

#contenido {
  float: left;
  height: 120vh;
  padding: 10px;
  width: 100%;
  overflow: auto;
}
#contenido2 {
  float: left;
  height: 100vh;
  padding: 10px;
  width: 100%;
  padding: 1%;
  margin-left: 2%;
  overflow: hidden;
}
.archivo {
  height: 100vh;
  width: 80%;
  overflow: hidden;
}
</style>