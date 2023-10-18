<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
    <!-- Anayasa Maddesi -->
    <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">Miras Hukuku</h2>
      </b-card-text>
      <div style="color: #e4e8ee" class="altin-cizgi"></div>
    </div>
    <br />
    <!-- Body-->
    <b-row class="custom">
      <b-col md="1"></b-col>
      <b-col md="10">
        <div class="divClass">
          <b-row>
            <b-col md="6">
              <b-row>
                <b-card class="text">
                  <b-card-body>
                    <div>
                      <b-card-text>
                        Miras Hukuku, bir kişinin vefat etmesi durumunda
                        malvarlığının nasıl dağıtılacağını ve mirasçıların
                        haklarını düzenleyen bir hukuk dalıdır. Miras hukuku,
                        aile hukukunun bir alt dalı olarak kabul edilir ve
                        kişilerin ölümü sonrasında malvarlığının aktarılması,
                        mirasçıların haklarının korunması ve mirasın nasıl
                        bölüşüleceği konularını ele alır.
                      </b-card-text>

                      <b-card-text>
                        Mirasın nasıl dağıtılacağı, genellikle kişinin vasiyeti
                        veya yasal mirasçılar arasında belirli kurallara göre
                        gerçekleşir. Miras hukuku, bu tür dağıtım kurallarını ve
                        mirasın bölüşülmesi sırasındaki süreçleri düzenler.
                        Miras hukuku, vasiyetname düzenlemeyi, mirasçıların
                        kimler olduğunu tespit etmeyi ve mirasın yasal
                        düzenlemelerine uygun şekilde dağıtılmasını sağlar.
                      </b-card-text>
                      <b-card-text>
                        Miras hukuku, aynı zamanda mirasın vergilendirilmesi
                        konularını da ele alır. Mirasçıların mirasın üzerinden
                        ödemeleri gereken vergiler ve bu vergilerin nasıl
                        hesaplanacağı gibi konuları düzenler. Mirasın hukuki ve
                        mali yönlerini ele alarak, kişilerin ölümü sonrasında
                        malvarlığının adil ve yasal bir şekilde dağıtılmasını ve
                        mirasçıların haklarının korunmasını sağlar.
                      </b-card-text>
                      <b-card-text>
                        Miras hukuku, kişilerin hayatlarının son döneminde ve
                        vefatları sonrasında önemli bir rol oynar. Bu hukuk
                        dalı, adaletin sağlanması ve mirasçıların haklarının
                        korunması açısından büyük öneme sahiptir.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/MirasHukuku.jpg"
                fluid
                alt="Responsive image"
                width="430"
            /></b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
    <br />
    <!-- Swiper-->
    <swiper-vue></swiper-vue> <br />
    <!-- Footer-->
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import {
  BImg,
  BRow,
  BCol,
  BCard,
  BButton,
  BCardGroup,
  BCardText,
  BCardBody,
  BCardTitle,
  BCardFooter,
  BCardSubTitle,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import NavbarVue from "../Navbar/Navbar.vue";
import footerVue from "../home/components/footer.vue";
import SwiperVue from "../home/components/Swiper.vue";
import AnayasaVue from "../AnayasaMaddesi/Anayasa.vue";
export default {
  components: {
    BImg,
    BRow,
    BCol,
    BCard,
    BButton,
    BCardGroup,
    BCardText,
    BCardBody,
    BCardFooter,
    BCardSubTitle,
    BCardTitle,
    Ripple,
    NavbarVue,
    SwiperVue,
    footerVue,
    AnayasaVue
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.customBackground {
  background: linear-gradient(to right, #24283e 90%, #e4e8ee 10%);
}
.text {
  border: 2px solid #b1915e;
  left: 0;
  color: white;
  background: transparent;
}
@media (max-width: 1000px) {
  .text {
    background: #e4e8eee7;
    color: black;
  }
}
.display-2 {
  text-align: center;
  color: #b1915e;
  font-family: "Cormorant Garamond", serif;
  margin-bottom: 0%;
}
@media (max-width: 768px) {
  .display-2 {
    margin-top: 35%;
    font-size: 45px;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
