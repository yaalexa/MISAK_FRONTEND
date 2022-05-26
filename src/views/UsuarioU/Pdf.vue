<template>
  <div>
      <Menu1/>
      <section class="cont">
        <div class="archive" >
          <b-embed class="archive" frameborder="0" v-bind:src="this.pdfsrc+'#toolbar=0'"  />
        </div>
        <br><br>
        <button type="button" class="btn btn-dark margen" v-on:click="downloadWithAxios( )">Descargar</button>
      </section>
  </div>
</template>

<script>
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
      Menu1,
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
.cont{
  justify-content: center;
}

.archive{
  margin: 3vw;
    width: 80vw;
    height: 50vw;
    display: inline-block;
}

</style>