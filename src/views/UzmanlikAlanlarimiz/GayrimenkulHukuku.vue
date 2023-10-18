<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
     <!-- Anayasa Maddesi -->
     <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">Gayrimenkul & Kira Hukuku</h2>
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
                        Gayrimenkul hukuku, taşınmaz
                        malların sahipliği, devri, kullanımı ve üzerindeki
                        hakların düzenlenmesi ile ilgilenir. Bu hukuk dalı,
                        özellikle mülkiyet hakkı, tapu işlemleri, sınırların
                        belirlenmesi, mülkiyetin korunması ve taşınmaz malların
                        miras yoluyla devri gibi konuları kapsar. Ayrıca,
                        gayrimenkul hukuku, kamulaştırma süreçleri, yapı
                        izinleri ve gayrimenkul işlemlerinde hukuki danışmanlık
                        gibi konularda da rol oynar.
                      </b-card-text>
                      <b-card-text>
                        Kira hukuku, bir gayrimenkulün kiralanması
                        ve kiracı ile mülk sahibi arasındaki ilişkileri
                        düzenler. Bu hukuk dalı, kira sözleşmelerinin
                        oluşturulması, şartların belirlenmesi, kira bedelinin
                        tespiti, kiracının hakları ve mülk sahibinin
                        yükümlülükleri gibi konuları içerir. Kiracı ve mülk
                        sahibi arasındaki anlaşmazlıkların çözümü de kira hukuku
                        kapsamındadır.
                      </b-card-text>
                      <b-card-text>
                        Kira hukuku, hem kiracının hem de mülk sahibinin
                        haklarını ve sorumluluklarını koruma amacı taşır.
                        Genellikle ülkeden ülkeye farklılık gösterebilecek bu
                        hukuk dalı, yerel yasalara ve düzenlemelere bağlı olarak
                        değişiklik gösterebilir. Kiracıların ev sahiplerine
                        karşı ve tam tersi durumlar için hakları ve
                        yükümlülükleri hukuki olarak korunmuştur ve
                        anlaşmazlıkların mahkemede çözümü için bir temel sağlar.
                        Bu nedenle, kiracılar ve ev sahipleri kira hukuku
                        konusunda bilinçli olmalı ve kira sözleşmelerini özenle
                        hazırlamalıdır.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/Gayrimenkul.jpg"
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
@media (max-width: 768px){
  .display-2{
    margin-top: 35%;
    font-size: 40px;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
