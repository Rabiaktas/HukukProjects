<template>
  <div class="customBackground">
    <navbar-vue></navbar-vue>
        <!-- Anayasa Maddesi -->
        <anayasa-vue></anayasa-vue>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2">Ceza Hukuku</h2>
      </b-card-text>
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
                        Ceza hukuku, toplumun düzenini ve güvenliğini sağlamak
                        amacıyla suçların tanımlandığı, cezaların belirlendiği
                        ve yargılama süreçlerinin düzenlendiği hukuk dalıdır.
                        Ceza hukuku, suç işleyen kişilere uygulanacak cezaları
                        ve bu cezaların nasıl uygulanacağını belirler. Ayrıca
                        suç işlemenin önlenmesi ve toplumun güvenliği için
                        caydırıcı bir etki yaratmayı hedefler.
                      </b-card-text>

                      <b-card-text>
                        Ceza hukukunda suçlar, genellikle kanunlarla tanımlanır
                        ve her suçun bir ceza türü ve miktarı bulunur. Bu
                        cezalar, suçun ciddiyetine ve suçun işlenme şekline göre
                        değişebilir. Ceza hukuku, suçlu kişilerin adil bir
                        yargılama sürecinden geçmelerini sağlar ve haklarını
                        korur.
                      </b-card-text>
                      <b-card-text>
                        Ayrıca, ceza hukuku adaletin sağlanmasını ve suçların
                        cezasız kalmamasını amaçlar. Suçlu kişilere verilen
                        cezalar, toplumun adalet duygusunu tatmin etmeye yönelik
                        bir rol oynar. Ceza hukuku, hukukun temel bir dalıdır ve
                        toplumun düzenini korumak ve suçları önlemek için önemli
                        bir araç olarak kullanılır.
                      </b-card-text>
                      <b-card-text>
                        Ceza hukuku aynı zamanda suçlu kişilerin haklarını da
                        önemser. Yargılama süreçlerinde adil bir şekilde savunma
                        haklarına saygı gösterilmesi, suçlu kişilerin suçlarını
                        ispat etmek üzere mahkemede karşılarına çıkan delillere
                        erişme haklarına sahip olmaları gibi temel prensiplere
                        dayanır. Böylece, suçlu kişilere hukuki koruma sağlanır
                        ve suçlu oldukları kanıtlanmadan ceza almalarının önüne
                        geçilir. Bu sayede, ceza hukuku adaletin hem suçlu hem
                        de masum bireylere ulaşmasını sağlayan önemli bir hukuk
                        dalı olarak işlev görür.
                      </b-card-text>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-center">
              <b-img
                class="resim-container"
                src="@/assets/images/UzmanlikAlanlar/CezaHukuku.jpg"
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
    margin-top: 30%;
  }
}
.resim-container {
  border: 1px solid #b1915e;
  border-radius: 1%;
}
</style>
