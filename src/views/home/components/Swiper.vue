<template>
  <div>
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="10">
        <swiper
          class="swiper-autoplay"
          :options="swiperOptions"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          :key="swiperOptions.slidesPerView"
        >
          <swiper-slide v-for="(data, index) in swiperData" :key="index">
            <b-img :src="data.img" fluid />
          </swiper-slide>

          <div slot="pagination" class="swiper-pagination" /> </swiper
      ></b-col>
      <b-col md="1"></b-col>
    </b-row>
    <br />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { BImg, BRow, BCol } from "bootstrap-vue";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BImg,
    BRow,
    BCol,
  },
  data() {
    return {
      /* eslint-disable global-require */
      swiperData: [
        { img: require("@/assets/images/swiper/ADBLogo.png") },
        { img: require("@/assets/images/swiper/resmiGazete.png") },
        { img: require("@/assets/images/swiper/AYMLogo.png") },
        { img: require("@/assets/images/swiper/yargıtay.png") },
        { img: require("@/assets/images/swiper/edevlet.png") },
        { img: require("@/assets/images/swiper/mevzuatbilgi.png") },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    if (window.innerWidth <= 1000) {
      this.swiperOptions.slidesPerView = 2;
    } else {
      this.swiperOptions.slidesPerView = 4;
    }
  },
  methods: {
    
  },
};
</script>
