<template>
  <div class="pantalla">
    <div class="cara1">
      <header>
        <Header />
      </header>
    </div>
    <div class="cara2">
      <section>
        <div class="container izquierda">
          <h1>NUEVO MATERIAL</h1>
          <div class="form-group left">
            <label for="" class="control-label col-sm-2">NOMBRE</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                v-model="formData.name"
                required minlength="4"
                maxlength="35"
                size="30"
              />
            </div>
          </div>
          <div class="form-group left row">
            <div class="col">
              <label for="" class="control-label col-sm-3">AÑO</label>
              <div class="col-sm-7">
                <input
                  type="number"
                  class="form-control"
                  name="year"
                  id="year"
                  v-model="formData.year"
                  required minlength="4"
                maxlength="5"
                size="5"
                />
              </div>
            </div>
            <div class="col">
              <label for="" class="control-label col-sm-5">ISBN</label>
              <div class="col-sm-7">
                <input
                  type="number"
                  class="form-control"
                  name="isbn"
                  id="isbn"
                  v-model="formData.isbn"
                  required min="2"
                  max="4"
                />
              </div>
            </div>
          </div>
          <div class="form-group left row">
            <div class="col">
              <label for="" class="control-label col-sm-3">PAGINAS</label>
              <div class="col-sm-7">
                <input
                  type="number"
                  class="form-control"
                  name="num_pages"
                  id="num_pages"
                  v-model="formData.num_pages"
                  required minlength="4"
                  maxlength="10"
                  size="11"
                />
              </div>
            </div>
            <div class="col">
              <label for="" class="control-label col-sm-5">PRIORIDAD</label>
              <div class="col-xs-8">
                <select
                  name="document_type"
                  id="document_type"
                  class="form-control"
                  v-model="formData.priority"
                >
                  <br />
                  <option value="1">Visualizado</option>
                  <option value="2">Descargado</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-group left row">
            <div class="col">
              <label for="" class="control-label col-sm-5">EDITORIAL</label>
              <div class="col-sm-7">
                <select class="form-control" v-model="formData.editorial">
                  <option
                    v-for="editorial in editorial"
                    v-bind:value="editorial.id"
                  >
                    {{ editorial.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col">
              <label for="" class="control-label col-sm-3">AREA</label>
              <div class="col-sm-7">
                <select class="form-control" v-model="formData.areas">
                  <option v-for="areas in areas" v-bind:value="areas.id">
                    {{ areas.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group left row">
            <div class="col">
              <label for="" class="control-label col-sm-5">TIPO MATERIAL</label>
              <div class="col-sm-7">
                <select class="form-control" v-model="formData.TipoMaterial">
                  <option
                    v-for="TipoMaterial in TipoMaterial"
                    v-bind:value="TipoMaterial.id"
                  >
                    {{ TipoMaterial.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-group left row">
            <div class="col">
              <label for="pdf1" class="control-label col-sm-5">PDF</label>
              <div class="col-sm-10">
                <input
                  type="file"
                  accept="application/pdf"
                  @change="pdfObtenidoMethodo"
                  name="pdf"
                  id="pdf"
                />
              </div>
            </div>
            <div class="col">
              <label for="imagen" class="control-label col-sm-3">IMAGEN</label>
              <div class="col-sm-7">
                <input
                  type="file"
                  accept="application/img"
                  @change="imagenObtenidaMethodo"
                  name="img"
                  id="imagen1"
                />
              </div>
              <br />
              <!-- <figure>
               <img :src="imagen1" width="200" height="200" alt="Foto-Libro" />
               </figure> -->
            </div>
          </div>
        </div>
 

        <!-- :src="material.img" -->
        <div class="form-group">
          <button
            type="button"
            class="btn btn-warning"
            @click="guardarGuardar()"
          >
            Guardar
          </button>
          <b-button
            type="button"
            class="btn btn-secondary margen"
            v-on:click="salir()"
            variant="primary"
          >
            Salir
          </b-button>
        </div>
      </section>
    </div>
  </div>
</template>




<script>
import Header from "@/components/Header.vue";
//import Footer from '@/components/Footer.vue'
import Swal from 'sweetalert2';
import axios, { Axios } from "axios";
export default {
  name: "NuevoM",
  props: ["imageUrl"],
  data: function () {
    return {
      selected: "",
      formData: {
        name: "",
        isbn: "",
        year: "",
        num_pages: "",
        priority: "",
        pdf: "",
        img: "",
        editorial: "",
        areas: "",
        TipoMaterial: "",
      },
      areas: null,
      TipoMaterial: null,
      editorial: null,
    };
  },
  mounted: function () {
    axios.get("/type_materials",{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                }).then((result) => {
      this.TipoMaterial = result.data;
    });

    axios.get("/editorials",{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                }).then((result) => {
      this.editorial = result.data;
    });

    axios.get("/areas",{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                }).then((result) => {
      this.areas = result.data;
    });
  },
  components: {
    Header,
    //Footer
  },

  methods: {
    /* Codigo de imagen */
    imagenObtenidaMethodo(e) {
      let file = e.target.files[0];
      console.log("CargaImagen", file);
      this.formData.img = file;
      this.cargarImagenNuevo(file);
    },
    cargarImagenNuevo(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.imagenMiniatura = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log("miniatura", reader);
    },
    /* Codigo del PDF */
    pdfObtenidoMethodo(e) {
      let pdfs = e.target.files[0];
      console.log("CargaPDF", pdfs);
      this.formData.pdf = pdfs;
      this.cargarPdf(pdfs);
    },

    cargarPdf() {
      let find = new FileReader();
      find.onload = (e) => {
        this.pdfMiniatura = e.target.result;
      };
    },
    guardarGuardar() {
      let formDataDataCambiar = new FormData();
      formDataDataCambiar.append("name", this.formData.name);
      formDataDataCambiar.append("isbn", this.formData.isbn);
      formDataDataCambiar.append("year", this.formData.year);
      formDataDataCambiar.append("num_pages", this.formData.num_pages);
      formDataDataCambiar.append("priority", this.formData.priority);
      formDataDataCambiar.append("pdf", this.formData.pdf);
      formDataDataCambiar.append("img", this.formData.img);
      formDataDataCambiar.append("editorial_id", this.formData.editorial),
      formDataDataCambiar.append("area_id", this.formData.areas);
      formDataDataCambiar.append("type_material_id",this.formData.TipoMaterial
      );
      axios
        .post("/materials", formDataDataCambiar,{ headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("user"))
                }
                })
        .then((response) => {
          this.form= response.data
          console.log("formulario: ", this.form.mensaje);
          var icono = "success";
          var colorb = "#ffc107";
          var colori = "#ffc107";
          if (this.form.res == true){
          }
          else{
            icono = "error";
            colorb = "#c42a2a";
            colori = "#c42a2a";
          }
          Swal.fire({title:this.form.mensaje,
                    icon: icono,
                    confirmButtonColor: colorb,
                    iconColor:colori});
        });
          this.makeToast("Hecho", "material creado", "success");
          this.$router.push("/dashboard");
        
    },
    salir() {
      this.$router.push("/dashboard");
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
  computed: {
    imagen1() {
      return this.imagenMiniatura;
    },
    pdf1() {
      return this.pdfMiniatura;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0%;
}
.pantalla {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.cara1 {
  height: 100vh;
  width: 20%;

}
.cara2 {
  width: 80%;
  height: 90vh;
  overflow: auto;
}
.izquierda {
  text-align: left;
  width: 60%;
  overflow: auto;
}
</style>