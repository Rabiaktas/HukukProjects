<template>
  <div>
    <b-row>
      <b-col md="12" class="mobile-max-height">
        <b-img
          class="resim-container"
          src="@/assets/images/banner/HomeArkaPlan2.jpg"
          fluid
          alt="Responsive image"
        />
      </b-col>
    </b-row>
    <!-- Title -->
    <b-row class="resim-metin-container">
      <b-col md="1"></b-col>
      <b-col md="5">
        <!-- primary bg card -->
        <b-card class="position-static bg-transparent h-100">
          <b-card-body>
            <h1 class="display-4">HUKUK BÜROSUNA</h1>
            <h1 class="display-4">HOŞGELDİNİZ</h1>
          </b-card-body>
          <blockquote class="blockquote mb-0">
            <p>
              Avukat Rabia Aktaş, kurduğu hukuk bürosuyla Ceza Hukuku, Aile
              Hukuku, Tazminat Hukuku ve Gayrimenkul Hukuku başta olmak üzere
              birçok hukuk alanında, Sakarya ili merkezli olmak üzere ülke
              genelinde hizmet sunmaktadır.
            </p>
          </blockquote>
          <br />
          <div style="color: #B1915E" class="altin-cizgi"></div>
        </b-card>
      </b-col>
      <!-- /Title -->
    </b-row>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { BImg, BCol, BRow, BCard, BCardBody } from "bootstrap-vue";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
    BCol,
    BRow,
    BCard,

    BCardBody,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");
.resim-container {
  margin-top: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
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

.resim-container img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
}
.resim-metin-container {
  position: absolute;
  top: 27%;
  color: rgba(0, 0, 0, 0.76) !important;
  font-family: "Cormorant Garamond", serif;
}
h1 {
  color: #B1915E!important;
}
p {
  font-family: "Cormorant Garamond", serif;
}
.altin-cizgi {
  width: 80px;
  border: solid 0.5px;
}
</style>
