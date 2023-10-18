<template>
  <b-row>
    <b-col>
      <comp-vue />
    </b-col>
  </b-row>
</template>
<script>
import { BImg, BRow, BCol } from "bootstrap-vue";
import CompVue from "./CompVue.vue";
export default {
  components: {
    BImg,
    BRow,
    BCol,
    CompVue,
  },
  data() {
    return {
    };
  },
};
</script>
<style></style>
