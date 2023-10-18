<template>
  <b-card class="customSwiper">
    <swiper
      class="swiper-parallax"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <swiper-slide v-for="(data, index) in AnayasaMaddeleri" :key="index">
        <div class="baslik" data-swiper-parallax="-300">
          <h3>{{ data.title }}</h3>
        </div>
        <div class="text" data-swiper-parallax="-300">
          {{ data.madde }}
        </div>
      </swiper-slide>
    </swiper>
  </b-card>
</template>
<script>
import { BRow, BCol, BCard, BCardText } from "bootstrap-vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    BRow,
    BCol,
    BCard,
    Swiper,
    SwiperSlide,
    BCardText,
  },
  data() {
    return {
      AnayasaMaddeleri: [
        {
          id: 1,
          title: "Madde 5 (Temel Hak ve Hürriyetlerin Sınırlanması):",
          madde:
            "Anayasa'nın 13. maddesi uyarınca, temel hak ve hürriyetler ancak Anayasa'da belirtilen sebeplere dayanılarak ve ancak bu haklara getirilecek sınırlamaların ölçülü ve orantılı olması koşuluyla sınırlanabilir.",
        },
        {
          id: 2,
          title: "Madde 20 (Kişinin Dokunulmazlığı):",
          madde:
            "Kimse, insan onuruna uygun bir şekilde muamele görmeye hakkı vardır. Kimse, insan onuruna uygun olmayan bir muamele veya cezaya tabi tutulamaz.",
        },
        {
          id: 3,
          title: "Madde 38 (Suç ve Cezanın Kanuniliği İlkesi):",
          madde:
            "Suç ve ceza hukukuna ilişkin kanunlar suçun ve cezanın önceden kanunda belirlenmesi ilkesine uygun olarak çıkarılır ve uygulanır. Suç ve cezanın tanımı ile ceza süresi ve ölçüsü kanunla belirlenir.",
        },
        {
          id: 4,
          title: "Madde 39 (Suçun Bireysel Sorumluluğu):",
          madde:
            "Suçun özel olarak kanunda belirtilmiş olması ve işlendiği dönemde yürürlükte olan kanuna tabi olma, suçun kişisel sorumluluğunu gerektirir. Suç işleyen kişi, suçun cezasını çeker.",
        },
        {
          id: 5,
          title: "Madde 90 (Uluslararası Anlaşmaların İç Hukuka Uyarlanması):",
          madde:
            "Uluslararası antlaşmalar, uygun bir şekilde yürürlüğe konulduğu takdirde, kanunlarla eşdeğerde bir hüküm ifade eder. Ancak, uluslararası antlaşmalarla kanunlar arasında çelişki olduğu takdirde, antlaşma hükümleri kanun hükmündedir.",
        },
      ],
      swiperOptions: {
        speed: 600,
        parallax: true,
        autoplay: {
          delay: 9000,
          disableOnInteraction: false,
        },
      },
    };
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.customSwiper {
  background: #e4e8ee;
  padding: 10px;
  margin-top: 8%; 
  font-family: 'Roboto', sans-serif;
  border-radius:0;
}
h3 {
  color: #b1915e;
  font-style: bold;
}
.text {
  color: black;
}
</style>
