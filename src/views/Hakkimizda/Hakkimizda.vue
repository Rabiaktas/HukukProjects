<template> 
<div class="customBackground">
  <navbar></navbar>
<hakkimizda-detay></hakkimizda-detay>
<footerVue></footerVue></div>
</template>
<script>
import HakkimizdaDetay from './HakkimizdaDetay.vue';
import Navbar from '../Navbar/Navbar.vue';
import footerVue from '../home/components/footer.vue';
export default {
  components :{
    HakkimizdaDetay,
    footerVue,
    Navbar
  }
}
</script>
<style>
.customBackground {
  background: linear-gradient(to right, #24283E 90%, #E4E8EE 10%);
}
</style>