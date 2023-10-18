<template>
  <!-- blogs -->
  <div>
    <b-row class="custom">
      <b-col md="1"></b-col>
      <b-col md="10">
        <div class="divClass">
          <b-row>
            <b-col md="6">
              <b-row>
                <b-card class="bg-transparent text">
                  <b-card-body>
                    <div>
                      <b-card-text>
                        <h2 class="display-2">Hakkımızda</h2>
                      </b-card-text>
                      <br />
                      <b-card-text>
                        Avukatlık Bürosu olarak, yılların birikimi ve
                        uzmanlığımızla hukuk alanında çözüm odaklı hizmetler
                        sunuyoruz.
                      </b-card-text>

                      <b-card-text>
                        Kuruluşumuzdan bu yana, adaletin ve hukukun üstünlüğünün
                        savunucusu olarak, müvekkillerimize hukuki ihtiyaçlarını
                        karşılamak için elimizden gelenin en iyisini yapma
                        taahhüdünde bulunuyoruz.
                      </b-card-text>
                      <b-card-text>
                        Ekibimiz, farklı hukuk alanlarındaki uzmanlığıyla
                        müşterilerimize geniş bir yelpazede hizmet sunmaktadır.
                        Müvekkillerimizin haklarını korumak ve hukuki
                        sorunlarını çözmek için tüm kaynaklarımızı seferber
                        ediyoruz. Müvekkillerimize dürüstlük, saygı ve
                        profesyonellikle yaklaşarak, onların güvenini kazanmayı
                        amaçlıyoruz. Bizimle çalıştığınızda, hukuki
                        ihtiyaçlarınızı karşılamak için güçlü bir ortak
                        bulacaksınız. İhtiyaçlarınıza uygun hukuki çözümler için
                        bize güvenebilirsiniz.
                      </b-card-text>
                      <h5>Rabia Aktaş</h5>
                    </div>
                  </b-card-body></b-card
                >
              </b-row>
            </b-col>
            <b-col md="6" class="mobile-max-height text-right">
              <b-img
                class="resim-container "
                src="@/assets/images/banner/hakkında.gif"
                fluid
                alt="Responsive image"
                width="450" 
            /></b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
    <br /><br />
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardText,
  BCardTitle,
  BImg,
  BCardBody,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BCardBody,
    BCardTitle,
    BImg,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap");

@media (max-width: 767px) {
  .customBackground {
    display: flex;
    flex-direction: column-reverse; /* Reverse the column order on small screens */
  }
  .mobile-max-height {
    max-height: none; /* Reset the max-height on small screens */
  }
  .resim-container {
    width: 100%; /* Make the image responsive */
    margin-bottom: 20px; /* Add spacing between the image and the card */
  }
}

@media (max-width: 767px) {
  .mobile-max-height {
    max-height: 80vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.text {
  border: 2px solid #b1915e;
  margin-top: 50px;
  left: 0;
  color: white;
}
h5{
  color: white;
}
.divClass {
  margin-top: 170px;
}
.display-2 {
  text-align: center;
  color: #b1915e;
  font-family: "Cormorant Garamond", serif;
}
.resim-container {
  border: 2px solid #b1915e;
  border-radius: 1%;
  margin-top: 48px;
  height: 540px;
}
</style>

<style lang="scss">
@import "@core/scss/vue/pages/page-blog.scss";
</style>
