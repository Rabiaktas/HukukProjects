<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
    <!-- Anayasa Maddesi -->
    <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">İş ve Sosyal Güvenlik Hukuku</h2>
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
                        İş ve sosyal güvenlik hukuku, bir toplumun çalışma
                        yaşamını düzenleyen ve çalışanların haklarını koruyan
                        önemli bir hukuk alanıdır. İş hukuku, işçi ve işveren
                        ilişkilerini düzenlerken, işçilerin çalışma koşulları,
                        ücretleri, iş güvenceleri gibi temel konuları ele alır.
                        İşçilerin haklarının korunması, iş sağlığı ve güvenliği
                        standartlarının uygulanması, işçi sendikalarının ve
                        işveren derneklerinin faaliyetleri iş hukukunun merkezi
                        unsurlarını oluşturur. İş hukuku, işçilerin adil bir
                        şekilde işe alınmalarını, işlerini sürdürmelerini ve
                        işlerini kaybetmelerini düzenler. Aynı zamanda
                        işverenlerin de işçilerine adil davranmalarını ve
                        yasalara uygun olarak iş sözleşmelerini yönetmelerini
                        sağlar.
                      </b-card-text>

                      <b-card-text>
                        Sosyal güvenlik hukuku ise bireylerin sağlık, emeklilik,
                        işsizlik, ve diğer sosyal yardımlar gibi temel
                        ihtiyaçlarını karşılamak için devletin yürüttüğü
                        programları ve politikaları düzenler. Bu hukuk dalı,
                        vatandaşların yaşamlarını ekonomik belirsizliklere karşı
                        koruma amacı taşır. Sosyal güvenlik, sağlık sigortaları,
                        emeklilik fonları, işsizlik yardımları ve aile
                        yardımları gibi bir dizi farklı programı içerir. Sosyal
                        güvenlik hukuku, toplumsal refahı artırmak ve ekonomik
                        eşitsizlikleri azaltmak için hayati bir rol oynar. Bu
                        iki hukuk dalı, bir toplumun çalışma hayatını ve sosyal
                        güvencesini düzenlerken adalet, eşitlik ve insan hakları
                        değerlerine dayanır ve toplumsal refahın temel
                        taşlarından birini oluşturur.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/TüketiciHukuku.jpg"
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
    AnayasaVue,
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
    margin-top: 36%;
    font-size: 40px;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
