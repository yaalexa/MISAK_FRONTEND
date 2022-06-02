<template>  
<div id="contenedor">
   <div id="cabecera"><Menu1/>
   </div>
      
   <div id="contenido">
      <div id="contenido2">
           <b-embed class="archivo" frameborder="0" v-bind:src="this.pdfsrc+'#toolbar=0'"  />
      <br>
      <div v-if="this.prioridad != 1">
      <button type="button" class="btn btn-dark margen" v-on:click="downloadWithAxios( )">Descargar</button>
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
  data() {
    return {
       prioridad:null,
      codigo:null,
      descargara:null,
      pdfsrc:null,
       mtr_usr: {
        manejo_users: "no se que va aqui",
        detalle_material: "descargado",
        date_download: "2022-05-18 23:54:10",
        material_id: "",
        users_id: ""
      },
    };
  },

  components: {
        Menu1
  },

  mounted() {
    this.getTodos();
  },

  methods: {
    
    downloadWithAxios() {
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
        // codigo Eduard guarda el proceso del boton de descarga
     var usrid = JSON.parse(sessionStorage.getItem("userid"));
     this.mtr_usr.users_id = usrid;
     this.mtr_usr.material_id = this.$route.params.id;
     axios
    .post("http://127.0.0.1:8000/api/material__users",this.mtr_usr)
      .then(response => {
       console.log(response)
      });   
   },
  
   async getTodos() {
          this.codigo=this.$route.params.id;
          this.prioridad=this.$route.params.pr;
     await axios
        .get(`http://127.0.0.1:8000/api/download/${this.codigo}`,{responseType: 'arraybuffer'  })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data],{ 'type': 'application/pdf' }));
          var fileLink = document.createElement('a');
           fileLink.href = fileURL;
            fileLink.setAttribute('download', 'file.pdf');
            this.pdfsrc= document.body.appendChild(fileLink)

           
            
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
   
  },
};
</script>

<style scoped>
 #cabecera {
        color:#ff9;
        height:80px;
        overflow:hidden;
        display: flex;
        
      }
      #contenedor {
        width:100%;
        overflow:hidden;
        height: 100vh;
      }
     #contenido {
        float:left;
        height: 100vh;
        padding:10px;
        width:100%;
        overflow: auto;
      }
       #contenido2 {
        float:left;
        height: 150vh;
        padding:10px;
        width:100%;
        padding: 1%;
        margin-left: 2%;
        overflow: auto;
      }
      .archivo{
         height: 100vh;
         width:80%;
      }

</style>