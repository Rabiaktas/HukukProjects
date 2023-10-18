<template>
  <div class="container">
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="11">
        <h1 class="display-4">Uzmanlık Alanlarımız</h1>
        <div class="altin-cizgi"></div>
      </b-col>
    </b-row>
    <!--Img-->
    <uzmanlik-alanlarimiz-img-vue></uzmanlik-alanlarimiz-img-vue> <br> <br>
    
  </div>
</template>
<script>
import { BRow, BCol,} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import UzmanlikAlanlarimizImgVue from "./UzmanlıkAlanlarımızImg.vue";

export default {
  components: {
    BRow,
    BCol,
    UzmanlikAlanlarimizImgVue,
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
</style>
