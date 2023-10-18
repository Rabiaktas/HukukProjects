<template>
  <div>
    <!-- NavBar-->
    <navbar-home />
    <!-- Home İmg -->
    <img-home></img-home> <br /><br />
      <!-- Swiper -->
      <swiper></swiper> <br><br>
    <!-- Uzmanlık Alanlarımız -->
    <uzmanlik-alanlarimiz-vue></uzmanlik-alanlarimiz-vue>
    <!-- Meslek İlkeleri -->
    <meslek-ikeleri></meslek-ikeleri><br /><br />
    <!-- Temel Degerlerimiz -->
    <temel-degerlerimiz></temel-degerlerimiz>
    <!-- Footer -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";


import NavbarHome from "./Navbar/JustNav.vue";
import footerVue from "./home/components/footer.vue";
import MeslekIkeleri from "./home/components/MeslekIkeleri.vue";
import ImgHome from "./home/components/Img.vue";
import TemelDegerlerimiz from "./home/components/TemelDegerlerimiz.vue";
import UzmanlikAlanlarimizVue from "./home/components/UzmanlıkAlanlarımız.vue";
import Swiper from "./home/components/Swiper.vue";
export default {
  components: {
    BRow,
    BCol,
    NavbarHome,
    footerVue,
    MeslekIkeleri,
    ImgHome,
    TemelDegerlerimiz,
    UzmanlikAlanlarimizVue,
    Swiper,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-blog.scss";
</style>
