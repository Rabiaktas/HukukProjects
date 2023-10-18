<template>
  <div class="customBackground">
    <!-- NavBar-->
    <navbar-vue />
    <!-- Makaleler-->
    <makaleler-detay></makaleler-detay> <br />
    <!--Footer-->
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import MakalelerDetay from "./MakalelerDetay.vue";
import footerVue from "../home/components/footer.vue";
import NavbarVue from "../Navbar/Navbar.vue";
import Swiper from "../home/components/Swiper.vue";

export default {
  components: {
    NavbarVue,
    footerVue,
    MakalelerDetay,
    Swiper,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
/*
.aboutText {
  height: auto;
  font-size: 50px;
  font-family: "Prompt", sans-serif;
  color: #ada77e;
  margin: 50px;
}

.ikincikisim {
  text-align: center;
  background-attachment: fixed;
  font-family: "Prompt", sans-serif;
  font-size: 16px;
}*/
.customBackground {
  background: linear-gradient(to right, #24283e 80%, #e4e8ee 35%);
}
</style>
