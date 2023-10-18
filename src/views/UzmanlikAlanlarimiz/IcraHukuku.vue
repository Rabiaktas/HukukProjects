<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
      <!-- Anayasa Maddesi -->
      <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">İcra ve İflas Hukuku</h2>
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
                        İcra ve İflas Hukuku, borçların tahsilatı ve iflas
                        durumlarında borçluların ve alacaklıların haklarını
                        düzenleyen bir hukuk dalıdır. Bu hukuk dalı, borçluların
                        ödeme yükümlülüklerine uymamaları durumunda
                        alacaklıların haklarını korur ve borçların tahsil
                        edilmesini sağlar.
                      </b-card-text>

                      <b-card-text>
                        İcra Hukuku, bir borçlunun, mahkeme kararıyla veya noter
                        vasıtasıyla alacaklıya olan borcunu ödemediği durumlarda
                        uygulanır. İcra yoluyla, alacaklının borcunu tahsil
                        etmesi amaçlanır. Alacaklının icra müdürlüğüne
                        başvurarak icra takibi başlatabilmesi mümkündür. Bu
                        süreçte borçluya icra tebligatı yapılır ve borcun
                        ödenmemesi durumunda icra işlemi devam eder. İcra
                        Hukuku, icra emirlerinin düzenlenmesi, borçlunun mal
                        varlığının tespiti, haciz işlemleri ve alacak tahsilatı
                        gibi konuları içerir.
                      </b-card-text>
                      <b-card-text>
                        İflas Hukuku ise bir borçlunun mali güçsüzlüğünün bir
                        sonucu olarak borçlarını ödeyemeyecek durumda olması
                        durumunda devreye girer. İflas, borçların düzenli bir
                        şekilde ödenemediği, borçlu ile alacaklılar arasında bir
                        denge sağlanamadığı durumlarda uygulanır. İflas
                        sürecinde, borçlu kişinin mal varlığı toplu bir şekilde
                        tasfiye edilir ve bu tasfiye sonucunda alacaklıların
                        hakları sıralanarak karşılanır. İflas, alacaklıların
                        haklarını korumak ve adaleti sağlamak amacı taşır.
                      </b-card-text>
                      <b-card-text>
                        İcra ve İflas Hukuku, hem borçluların hem de
                        alacaklıların haklarını korumayı amaçlar. Bu hukuk dalı,
                        borçların ödenmesi veya iflasın düzenli bir şekilde
                        yürütülmesi süreçlerini belirler ve yasal bir çerçeve
                        içinde uygulanır. Ayrıca, borçlu ve alacaklılar
                        arasındaki hukuki anlaşmazlıkların çözümünde de önemli
                        bir rol oynar.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/İcraHukuku.jpg"
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
    margin-top: 40%;
    font-size: 42px;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
