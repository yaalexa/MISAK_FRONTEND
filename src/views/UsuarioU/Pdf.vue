<template>
<div>
  <body style="height: 100%; width: 100%; overflow: hidden; margin: 0px; background-color: rgb(82, 86, 89);">
    <div v-for="pdf in pdf" :key=pdf.id>
        <div>
          
          <embed class="pdf" :src="`http://127.0.0.1:8000/storage/${pdf.pdf}`" type="application/pdf"> <br>
          
    
          <button type="button" class="btn btn-primary margen" v-on:click="salir()">salir</button>
     
        </div>
    </div>
  </body>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";

export default {
  data() {
    return {
      pdf: {
        
        pdf: "",
      },
    };
  },

  components: {
    Header,
  },

  mounted() {
    this.getpdf();
  },

  methods: {
    getpdf() {
      axios
        .get("http://127.0.0.1:8000/api/materials")
        .then((response) => {
          this.pdf = response.data;
          console.log("hola", this.pdf);
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
    salir(){
            this.$router.push("/Usuariou");
        },
  },
};
</script>

<style scoped>
.pdf{
  width: 100%;
  height: 100vh;
}

</style>