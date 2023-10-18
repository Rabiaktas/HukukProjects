<template>
  <div class="customBackground">
    <!-- NavBar-->
    <navbar-vue />
    <!-- Contact-->
    <contact-detail-vue></contact-detail-vue> 
    <!--Footer-->
    <footer-vue></footer-vue>
  </div>
</template>
<script>
import footerVue from "../home/components/footer.vue";
import NavbarVue from "../Navbar/Navbar.vue";
import ContactDetailVue from "./ContactDetail.vue";

export default {
  components: {
    NavbarVue,
    footerVue,
    ContactDetailVue,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

.customBackground {
  background: linear-gradient(to right, #24283e 90%, #e4e8ee 10%);
}
</style>
