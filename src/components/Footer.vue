<template>
  <div>
    <div class="footer">
      <ul class="ul">
        <li>
          <h4>Contactanos</h4>
          <img src="../assets/twitter-sign.png" alt="" />
          <h5>Silvia Cauca</h5>
          <p>Telefono 7032205 ext 201</p>
          <p>Direccion: calle 7</p>
          <p>repomisak@misak.com</p>
        </li>

        <li>
          <h4>Redes sociales</h4>
          <p>Siguenos como RepoMisak</p>
          <section class="redess">
            <a href="https://twitter.com/namuiwamSena"><img class="redes" src="../assets/twitter-sign.png" alt="" /></a>
            <a href="https://www.youtube.com/channel/UCNj4Kw9GQ-x3RQLk9g1otPw"><img class="redes" src="../assets/youtube.png" alt="" /></a>
           <a href="https://www.instagram.com/namuiwambibliotecavirtualmisak/"> <img class="redes" src="../assets/instagram.png" alt="" /></a>
          </section>
        </li>

        <li>
          <h4>Lo nuestro</h4>
          <img src="../assets/twitter-sign.png" alt="" />
          <p>namuiwan isukun</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style  scoped>
.footer {
  margin-top: -2vw;
  background-color: #2b252c;
  background-size: cover;
  width: 100%;
}
.ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
li {
  margin-right: 4vw;
  margin-top: 3vw;
  color: rgb(255, 255, 255);
  text-decoration: none;
  list-style: none;
}
img {
  width: 3vw;
}
.redes {
  margin-right: 7px;
}
.redess {
  position: relative;
  background: rgba(128, 128, 128, 0.05);
  border-radius: 4em;
  padding: 0.35em 0.75em 0.35em 0.75em;
}


@media all and (max-width: 700px) {
  .footer {
  background-color: #2b252c;
  background-size: cover;
  width: 100%;
}
.ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
li {
  margin-right: 4vw;
  margin-top: 3vw;
  color: rgb(255, 255, 255);
  text-decoration: none;
  list-style: none;
}
img {
  width: 3vw;
}
.redes {
  margin-right: 7px;
}
.redess {
  position: relative;
  background: rgba(128, 128, 128, 0.05);
  border-radius: 4em;
  padding: 0.35em 0.75em 0.35em 0.75em;
}
}
</style>