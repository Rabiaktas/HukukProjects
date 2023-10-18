<template>
  <div class="container">
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="11">
        <h1 class="display-4">Temel Değerlerimiz</h1>
        <div class="altin-cizgi"></div>
      </b-col>
      </b-row>
      <!--Kartlar-->
      <temel-degerler-card></temel-degerler-card>
  </div>
</template>
<script>
import { BRow, BCol } from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import TemelDegerlerCard from "./TemelDegerlerCard.vue";

export default {
  components: {
    BRow,
    BCol,
    TemelDegerlerCard
  },
  directives: {
    Ripple,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

.display-4 {
  color: black;
  font-family: "Cormorant Garamond", serif;
}
.altin-cizgi {
  width: 80px;
  border: solid 0.5px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #cda434;
}
.position-static {
  background-color: transparent;
  transition: background-color 0.7s ease, color 0.5s ease; /* Geçiş efekti ekle */
  color: black;
}

.position-static:hover {
  background-color: #cda434bd;
  color: black;
  transition: color 0.6s ease;
}
.title-style {
  color: #cda434bd;
}
.position-static:hover .title-style {
  color: black; /* Kartın hover durumunda başlığını siyah yapar */
}
.altin-cizgi-kart {
  width: 80px;
  border: solid 0.5px;
  color: #cda434;
}
.PenIcon {
  height: auto;
  width: 30px;
  margin: 10px;
  color: rgba(16, 16, 16, 0.749);
}
</style>
