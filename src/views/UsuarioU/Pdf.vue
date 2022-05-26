<template>  
<div class="cara2">
 <Menu1/>
      
    <div class="contenedor3">
          <section>
      <div class="archive" >
         
           <b-embed class="archive" frameborder="0" v-bind:src="this.pdfsrc+'#toolbar=0'"  />
      </div>
      <br>
      <button type="button" class="btn btn-dark margen" v-on:click="downloadWithAxios( )">Descargar</button>
       </section>
    </div>

  </div>
</template>

<script>
/* import func from 'vue-editor-bridge'; */
import axios from "axios";
import Menu1 from "@/components/Menu1.vue";
export default {
  data() {
    
    return {
    
      descargara:null,
      pdfsrc:null
    };
  },

  components: {
        Menu1
  },

  mounted() {
    this.getTodos();
  },

  methods: {
    
    downloadWithAxios( ) {
      axios({
      url: `http://127.0.0.1:8000/api/download/${this.$route.params.id}`,
      method: 'GET',
      responseType: 'blob',
      }).then((response) => {
     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
     this.descargara=response.data;
     var fileLink = document.createElement('a');
     fileLink.href = fileURL;
     fileLink.setAttribute('download', 'file.pdf');
     document.body.appendChild(fileLink);
     fileLink.click();
        });
   },
  
   async getTodos() {
     await axios
        .get(`http://127.0.0.1:8000/api/download/${this.$route.params.id}`,{responseType: 'arraybuffer'  })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data],{ 'type': 'application/pdf' }));
          var fileLink = document.createElement('a');
           fileLink.href = fileURL;
            fileLink.setAttribute('download', 'file.pdf');
           this.pdfsrc= document.body.appendChild(fileLink)

      
        // this.pdfsrc = VuePdfApp.createLoadingTask(objectUrl);
          
          
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
    Ver(id){
            this.$router.push(`/Pdf/${id}`);
        },
  },
};
</script>

<style scoped>
.contenedor_todo {
  border: 1px solid black;
  background: #16223f;
  display: flex;
  justify-content: space-between;
}
.contenedor1 {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.logo {
  border: 1px blueviolet;
  padding: 4px;
}
.titulo {
  /* border: 1px solid red; */
  color: white;
  padding-left: 20px;
}
.contenedor2 {
  /* border: 1px solid red; */
  padding-top: 10px;
  
}
.ingresar {
  /* border: 1px solid black; */
  color: white;
  width: 80%;
}

.contenedor4 {
  
  margin: 100px;
  display: flex;
  justify-content: center;
}
.barra{
  
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: block;
  width: 70%;
  padding: 10.5px 10px;
  transition: all 0.2s;
  color:#16223f;
  border: 1px solid rgba(0, 0, 0, 0.442);
  border-radius: 4px;
  background-color: white;
  background-clip: padding-box;
}
.boton{
  border-color: #16223f;
  border-radius: 4px;
  color: white;
  background-color: #16223f;
  margin-left: 5px;
}

.contenedor3 {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  
  margin: 30px;
}
.cara2{
    width: 100%;
    
}
.archive{
    width: 130vh;
    height: 150vh;
    display: inline-block;
}

</style>