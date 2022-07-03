<template>
    <div class="cont">
        <div class="biblio">
            <H1 class="titulos">Biblioteca Virtual Misak</H1>
            <strong>En esta biblioteca virtual vas a poder encontrar diferentes<br>
                    materiales educativos propios producidos por la comunidad misak<br>
                    en aras del fortalecimiento y recuperación de la cultura misak. <br>
            </strong><br>
        </div> <br>
        <div class="todo">
            <div><H2 class="titulos">CULTURA</H2></div> 
            <div class="contenido">
                <div class="right">
                    <p>Los misak o guambianos son un pueblo originario americano <br>
                    que habita en el sur de Colombia en el departamento del Cauca. <br>
                    Su Resguardo Mayor original Guambìa está en el municipio de <br>
                    Silvia y habitan también en otros lugares cercanos, de la <br>
                    Cordillera Central de los Andes colombianos. </p>
                </div>
                <div class="left">
                    <img src="../assets/ftp.png" alt="" />
                </div>
            </div>
        </div> <br> <br>
        <div><H2 class="titulos">NOSOTROS</H2></div> 
        <div class="contenidoa">
            <div class="righta">
                <img src="../assets/grupo.png" alt="" />
            </div>
            <div class="lefta">
                <p class="texto">   Somos un grupo de estudiantes que ha desarrollado  <br>
                                    una biblioteca virtul para la comunidad misak.  <br>
                                    De izquierdad a derecha se encuentran los nombres <br>
                                     de los participantes</p>
                  <ul>
                  <li>Veronica Palechor: Desarrolladora Backend & apoyo a Frontend  </li>
                  <li>Daniel Cruz: Desarrollador Frontend & apoyo a Documentacion   </li>
                  <li>Andres Camayo: Desarrollador Backend & apoyo a Frontend       </li>
                  <li>Zulema Leon: Intructora lider                                 </li>
                  <li>Josue Rivera: Desarrollador Backend & apoyo a Frontend        </li>
                  <li>Eduard Urbano: Desarrollador Backend & apoyo a Frontend       </li>
                  <li>Alvaro Morales: Documentacion & apoyo a Frontend              </li>
                  <li>Erika Martinez: Documentación & apoyo a Frontend              </li>
                  <li>William Sevilla: Desarrollador Frontend & apoyo a Backend     </li>
                  <li>Zareth Certuche: Documentación & apoyo a Frontend             </li>
                  <li>Wilfrido Franco: Diseño & apoyo a Frontend                    </li>
                  </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.biblio{
    justify-content: center;
    padding: 0;
    border: 3px solid rgb(185, 146, 17);
    margin: 2vw;
    border-radius: 1vw;
}
img{
    width: 30vw;
    box-shadow: 0 0 8px 8px white inset;
    border-radius: 1vw;
    margin: 2vw;
}
.contenido{
    display: flex;
    justify-content: space-around;
    align-content: center;
    
}
.right{
    padding:0;
    margin: 0;
    margin-top: 7vw;
    margin-right: -25vw;
}
.left{
     padding:0;
    margin: 0;
}
p{
    font-weight:2
}
.righta{
    padding:0;
    margin: 0;
    margin-right: -25vw;
}
.lefta{
     padding:0;
    margin: 0;
    margin-top: 4vw;
}
.contenidoa{
    display: flex;
    justify-content: space-around;
    align-content: center;
    text-align: justify;
    margin: 2vw;
    border: 3px solid rgb(185, 146, 17);
    border-radius: 1vw;
}
.todo{
    margin: 2vw;
    border: 3px solid rgb(185, 146, 17);
    border-radius: 1vw;
}
.titulos{
    margin-top: 1vw;
}
.cont{
    background: linear-gradient(to top, rgb(44, 43, 43), 15%, #ffffff);
}
@media all and (max-width: 999px) {
    .biblio{
    justify-content: center;
    padding: 0;
    border: 3px solid rgb(185, 146, 17);
    margin: 2vw;
    border-radius: 1vw;
}
img{
    width: 85vw;
}
.contenido{
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: column;
    
}
.right{
    padding:0;
    margin: 0;
}
.left{
     padding:0;
    margin: 0;
}
p{
    font-weight:2;
}
.righta{
    padding:0;
    margin: 0;
}
.lefta{
     padding:0;
    margin: 0;
    margin-top: 4vw;
}
.contenidoa{
    display: flex;
    justify-content: space-around;
    align-content: center;
    text-align: center;
    flex-direction: column;
    margin: 2vw;
    border: 3px solid rgb(185, 146, 17);
    border-radius: 1vw;
}
.todo{
    margin: 2vw;
  border: 3px solid rgb(185, 146, 17);
    border-radius: 1vw;
    
}
.titulos{
    margin-top: 1vw;
}
.cont{
    background: linear-gradient(to top, rgb(92, 89, 89), 15%, #ffffff);
}
.texto{
    margin: 3vw;
}
ul{
    margin-right: 3vw;
}
li{
    list-style: none;
}
}
@media only screen and (min-width: 1000px) and (max-width: 1600px){
    .biblio{
    justify-content: center;
    padding: 0;
    border: 3px solid rgb(185, 146, 17);
    margin: 2vw;
    border-radius: 1vw;
}
img{
    width: 50vw;
    box-shadow: 0 0 8px 8px white inset;
    border-radius: 1vw;
    margin: 2vw;
}
.contenido{
    display: flex;
    justify-content: space-around;
    align-content: center;
    
}
.right{
    padding:0;
    margin: 0;
    margin-top: 7vw;
}
.left{
     padding:0;
    margin: 0;
}
p{
    font-weight:2;
    margin: 2vw;
}
.righta{
    padding:0;
    margin: 0;
    margin-right: -25vw;
}
.lefta{
     padding:0;
    margin: 0;
    margin-top: 4vw;
    margin-left: 25vw;
}
.contenidoa{
    display: flex;
    justify-content: space-around;
    align-content: center;
    text-align: justify;
    margin: 2vw;
    border: 3px solid rgb(185, 146, 17);
    border-radius: 1vw;
}
.todo{
    margin: 2vw;
    border: 3px solid rgb(185, 146, 17);
    border-radius: 1vw;
}
.titulos{
    margin-top: 1vw;
}
.cont{
    background: linear-gradient(to top, rgb(44, 43, 43), 15%, #ffffff);
}
.texto{
    margin-right: 3vw;
}
ul{
    margin-right: 2vw;
}
}
</style>