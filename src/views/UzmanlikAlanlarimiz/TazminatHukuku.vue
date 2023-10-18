<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
     <!-- Anayasa Maddesi -->
     <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">Tazminat Hukuku</h2>
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
                        Tazminat hukuku, hukuk sistemlerinde önemli bir yer
                        tutan bir alt dal olarak karşımıza çıkar. Tazminat, bir
                        kişinin veya kurumun, başka bir kişiye veya kuruma zarar
                        vermesi sonucu ortaya çıkan hukuki sorumluluğu ifade
                        eder. Bu zarar, maddi veya manevi olabilir ve tazminat
                        hukuku, bu zararın tazmin edilmesi ile ilgili kuralları
                        ve prensipleri düzenler.
                      </b-card-text>

                      <b-card-text>
                        Tazminat hukukunda temel amaç, zarar gören kişinin veya
                        kurumun, zarar veren tarafın kusurlu davranışının
                        sonuçlarına katlanmadan zararlarını telafi etmektir.
                        Tazminat hukuku, tazminatın miktarını belirleme, kusurun
                        tespiti, haksız fiilin meydana gelme şartları gibi bir
                        dizi konuyu kapsar. Ayrıca, tazminatın ödenmesi için
                        mahkemeye başvurmanın prosedürlerini ve davalarda
                        izlenmesi gereken yolu da düzenler.
                      </b-card-text>
                      <b-card-text>
                        Tazminat hukuku, bireyler arasındaki ilişkilerden iş
                        hukukuna, trafik kazalarından tıbbi hatalara kadar pek
                        çok farklı alanda uygulanır. Hukuki sistemler, tazminat
                        hukukunu düzenlerken genellikle adaleti sağlama, zarar
                        görenleri koruma ve zarar verenlerin sorumluluğunu
                        belirleme amacını güder. Bu nedenle, tazminat hukuku,
                        hukukun temel prensiplerinden birini oluşturur ve her
                        toplumda farklı yasal düzenlemelerle uygulanır.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/TazminatHukuku.jpg"
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
  background: linear-gradient(to right, #24283e 80%, #e4e8ee 35%);
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
    margin-top: 36%;
    font-size: 48px;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
