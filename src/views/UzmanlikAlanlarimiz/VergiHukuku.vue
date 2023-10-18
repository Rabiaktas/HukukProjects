<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
       <!-- Anayasa Maddesi -->
       <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">İdare ve Vergi Hukuku</h2>
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
                        Vergi Hukuku, bir devletin gelir elde etmek ve kamu
                        harcamalarını finanse etmek amacıyla vatandaşlarından ve
                        işletmelerden topladığı vergileri düzenleyen hukuk
                        dalıdır. Vergi hukuku, vergi ödemelerinin hesaplanması,
                        beyan edilmesi, tahsil edilmesi, ve vergi ihtilaflarının
                        çözümlenmesi süreçlerini kapsar.
                      </b-card-text>

                      <b-card-text>
                        Vergi hukuku, farklı türdeki vergileri düzenler. Bunlar
                        arasında gelir vergisi, kurumlar vergisi, katma değer
                        vergisi, emlak vergisi gibi birçok farklı vergi türü
                        bulunur. Her bir vergi türü, belirli yasal düzenlemelere
                        tabi tutulur ve mükellefler (vergi ödeyenler) için
                        belirli yükümlülükler içerir.
                      </b-card-text>
                      <b-card-text>
                        Vergi hukuku aynı zamanda vergi mükelleflerinin
                        haklarını ve yükümlülüklerini düzenler. Vergi
                        mükelleflerine vergi beyannameleri hazırlama, vergi
                        ödemelerini yapma, vergi indirimlerinden yararlanma ve
                        vergi ihtilaflarıyla ilgilenme gibi konularda rehberlik
                        sağlar. Ayrıca, vergi hukuku, vergi kaçakçılığı ve vergi
                        dolandırıcılığı gibi vergi suçlarına karşı da yasal bir
                        çerçeve sunar.
                      </b-card-text>
                      <b-card-text>
                        Vergi hukuku, hem bireyler hem de işletmeler için önemli
                        bir hukuk dalıdır ve toplumun mali istikrarını sağlamak
                        ve kamu hizmetlerini finanse etmek amacıyla vergi
                        gelirlerini yönetir. Vergi hukuku, vergi politikalarını
                        oluşturma, vergi kanunlarını uygulama ve vergi
                        hükümetleri arasında çift vergilendirmeyi önleme gibi
                        çeşitli görevleri içerir.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/VergiHukuku.jpg"
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
    font-size: 35px;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
