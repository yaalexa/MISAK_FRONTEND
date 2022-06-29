<template>
  <div>
    <div><MenuInicial /></div>
    <div class="fondo"></div>
    <div>
      <section>
        <H2>Nuestro Equipo</H2>
        <hr />
        <p>
          Los misak o guambianos son un pueblo originario americano que habita
          en el sur de Colombia en el departamento del Cauca. Su Resguardo Mayor
          original Guambìa está en el municipio de Silvia y habitan también en
          otros lugares cercanos, de la Cordillera Central de los Andes
          colombianos. Para poder acceder a tierra cultivable, algunos han
          emigrado a fundar nuevos resguardos en el mismo Cauca. Para los
          antropólogos, los Misak son originarios del territorio del
          prehispánico cacicazgo de Calambás, que hacía parte de la
          Confederación Pubense, cuyo centro era la actual Popayán, en el Valle
          de Pubenza y que llegaba hasta Santander de Quilichao al norte, al sur
          el río Moras, y al oriente los páramos y las estribaciones orientales
          de la Cordillera Central. Con la Conquista y la Colonia este cacicazgo
          desapareció, y aquellos que se refugiaron en las estribaciones más
          lejanas de los páramos, pudieron pervivir. Con las décadas recibirían
          a otros Misak que huían de las zonas de tierra caliente. De esta
          mezcla de poblaciones vienen los actuales Misak. La Corona española
          tituló en 1700 como resguardo a Guambía, cuya autoridad principal es
          el Cabildo, elegido actualmente por voto popular.
        </p>
        <h3>Misión</h3>
        <p>
          Con los siglos muchos Misak migrarían de nuevo a tierra caliente, y a
          partir de 1991 con el cambio Constitucional, pudieron conformar nuevos
          resguardos. A toda la red de nuevos resguardos (16 y dos comunidades),
          se les llama Nu nachak, que significa "nuestro gran fogón", o Gran
          Confederación Misak, y se refiere a la unión social Misak como si
          fuese un fogón familiar de las antiguas cocinas. De estos fogones es
          de donde tradicionalmente nace todo: la palabra, la historia, el
          territorio, la familia y la autoridad. Han sido reconocidos los
          siguientes resguardos Misak: Guambía (Silvia, Cauca) La María
          (Piendamó, Cauca) Bonanza (Morales, Cauca) La Gaitana (La Plata,
          Huila) Nuevo Amanecer (La Argentina, Huila) Nam Misak (La Plata y La
          Argentina, Huila) Comparten con la comunidad nasa el resguardo de La
          Reforma, en La Plata. En Tuluá, se encuentra una comunidad en Barragán
          y en Cali, vive hace 50 años la comunidad Nu Pachik chak. Otros
          asentamientos Misak están en territorios del Cauca, como Kurak-Chak
          (Cajibío), Piscitao, (Pinedamó), Munchique (El Tambo), San Antonio
          (Morales) y Ovejas (Caldono)
        </p>
        <h3>Visión</h3>
        <p>
          Los grupos domésticos patrilocales son la base de la organización
          social. Practican la endogamia étnica y la exogamia veredal (de la
          comunidad local). La base de su economía es la agricultura Sus
          principales cultivos son el maíz, papa, café, ulluco, frijol, repollo
          y habas. Su pensamiento es dual, basado en oposiciones como sol-luna,
          masculino-femenino. El mөrөpik es el curandero Misak, es escogido
          entre niños con disposición y educado para intermediar con los
          espíritus. Realiza la ceremonia de limpieza llamada pishimarөp. El
          traje tradicional del hombre es una reboso corta azul que envuelven
          alrededor de la cintura, dos ruanas rectangulares y sombrero. Las
          mujeres llevan un anaco vestimenta propia de los misak, blusa de un
          solo color y pañolón azul de lana.
        </p>
        <h4>Slogan</h4>
        <p>La base de su economía es la agricultura Sus principales cultivos</p>
        <h4>Logo</h4>
        <br />
        <p><img src="@/assets/logo.png" alt="" /></p>
      </section>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import MenuInicial from "@/components/MenuInicial.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Nosotros",
  components: {
    MenuInicial,
    Footer,
  },
};
</script>
<style scoped>
.fondo {
  background-image: url("@/assets/misakkk.png");
  background-size: cover;
  width: 100%;
  height: 50vh;
}
section {
  margin-left: 8vw;
  margin-right: 8vw;
}
img {
  width: 30vw;
}
</style>