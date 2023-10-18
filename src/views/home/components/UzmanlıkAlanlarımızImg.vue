<template>
  <div>
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="10">
        <b-row>
          <b-col
            v-for="expertise in expertiseList"
            :key="expertise.img"
            md="4"
            class="my-2"
            @mouseover="hoverImage(expertise)"
            @mouseleave="resetImage(expertise)"
          >
            <b-link :to="{ name: expertise.url }">
              <b-img
                :src="expertise.img"
                fluid
                alt="Fluid image"
                :class="{ hovered: (expertise.hovered == null ? false: expertise.hovered) }"
            /></b-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BImg, BLink } from "bootstrap-vue";

export default {
  data() {
    return {
      expertiseList: [
        {
          id: 1,
          // eslint-disable-next-line global-require
          title: "Aile Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/AileHukuku.jpg"),
          url: "AileHukuku",
        },
        {
          id: 2,
          // eslint-disable-next-line global-require
          title: "Ceza Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/CezaHukuku.jpg"),
          url: "CezaHukuku",
        },
        {
          id: 3,
          // eslint-disable-next-line global-require
          title: "Gayrimenkul ve Kira Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/Gayrimenkul.jpg"),
          url: "GayrimenkulHukuku",
        },
        {
          id: 4,
          // eslint-disable-next-line global-require
          title: "İcra Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/İcraHukuku.jpg"),
          url: "IcraHukuku",
        },
        {
          id: 5,
          // eslint-disable-next-line global-require
          title: "İş ve Sosyal Güvenlik Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/İşHukuku.jpg"),
          url: "IsHukuku",
        },
        {
          id: 6,
          // eslint-disable-next-line global-require
          title: "Miras Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/MirasHukuku.jpg"),
          url: "MirasHukuku",
        },
        {
          id: 7,
          // eslint-disable-next-line global-require
          title: "Tazminat Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/TazminatHukuku.jpg"),
          url: "TazminatHukuku",
        },
        {
          id: 8,
          // eslint-disable-next-line global-require
          title: "Tüketici Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/TüketiciHukuku.jpg"),
          url: "TuketiciHukuku",
        },
        {
          id: 9,
          // eslint-disable-next-line global-require
          title: "İdare ve Vergi Hukuku",
          img: require("@/assets/images/UzmanlikAlanlar/VergiHukuku.jpg"),
          url: "VergiHukuku",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BImg,
    BLink,
  },
  methods: {
    hoverImage(expertise) {
      console.log("fare içerde");
      expertise.hovered = true;
      console.log(expertise);
    },
    resetImage(expertise) {
      console.log("fare dışarda");
      expertise.hovered = false;
      console.log(expertise);
    },
  },
};
</script>

<style>
.hovered {
  /* Resmin üzerine gelindiğinde animasyon eklemek için CSS kodu */
  transition: transform 0.2s ease-in-out !important;
  transform: scale(1.10)!important; /* Resmin boyutunu biraz büyütün (isteğe bağlı) */
}
</style>
