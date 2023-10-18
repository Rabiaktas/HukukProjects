<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
     <!-- Anayasa Maddesi -->
     <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">Aile Hukuku</h2>
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
                        Aile hukuku, aile ilişkilerini ve aile birliğini
                        düzenleyen hukuki bir dal olarak karşımıza çıkar. Bu
                        hukuk dalı, evlilik, boşanma, çocukların velayeti,
                        miras, nafaka gibi aile içi meseleleri düzenler. Aile
                        hukuku, toplumun temel yapı taşı olan aile birliğini
                        koruma ve aile üyelerinin haklarını ve sorumluluklarını
                        belirleme amacı taşır.
                      </b-card-text>

                      <b-card-text>
                        Evlilik, aile hukukunun önemli bir unsurudur. Evlilik,
                        iki kişi arasında yasal olarak tanınan bir birlik kurma
                        sürecidir ve bu birliğin kurulması, korunması ve
                        sonlandırılması aile hukuku kapsamında düzenlenir. Aile
                        hukuku, boşanma durumunda mülkiyetin bölüşülmesi,
                        velayetin belirlenmesi ve nafaka gibi konuları ele alır.
                        Ayrıca, çocukların haklarına da büyük önem verir ve
                        onların korunmasını sağlar.
                      </b-card-text>
                      <b-card-text>
                        Miras hukuku da aile hukukunun bir parçasıdır. Bir
                        kişinin vefatı durumunda, mal varlığının nasıl
                        dağıtılacağını ve kimin mirasçı olacağını düzenler. Aile
                        hukuku, mirasçıların haklarını korurken, bir kişinin
                        vasiyetine de saygı gösterir. Genel olarak, aile hukuku
                        aile içi ilişkileri düzenler ve ailenin istikrarını ve
                        refahını sağlamaya yönelik bir hukuki çerçeve sunar.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/AileHukuku.jpg"
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
import AnayasaVue from '../AnayasaMaddesi/Anayasa.vue';
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
@media (max-width: 768px){
  .display-2{
    margin-top: 35%;
    font-size: 50px;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
