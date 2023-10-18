<template>
  <footer>
    <div class="jumbotron text-center">
      <div class="container">
        <h2 class="footerLink">
          <a @click="scrollToTop">HUKUK & DANIŞMANLIK BÜROSU</a>
        </h2>
        <hr />
        <br />

        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="1"></b-col>
              <b-col md="10">
                <b-row class="footerText">
                  <b-col md="4">
                    <h4>İletişim</h4>
                    <p>Email: info@mysite.com</p>
                    <p>Telefon: 123 456 789</p>
                    <p>Fax: 123 456 789</p>
                  </b-col>
                  <b-col md="4">
                    <h4>Adres</h4>
                    <p>Kemalpaşa, Esentepe Kampüsü</p>
                    <p>Ünivesite Caddesi</p>
                    <p> Serdivan/Sakarya </p></b-col
                  >
                  <b-col md="4">
                    <h4>Çalışma Saatlerimiz</h4>
                    <p>Pzt-Cuma: 08.00-18.00</p>
                    <p>Cumartesi: 08.00-13.00</p>
                    <p>Pazar: Closed</p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="1"></b-col>
            </b-row>
          </b-col>
          <!-- social buttons -->

          <b-col md="4"></b-col>
          <b-col md="4">
            <div class="auth-footer-btn d-flex justify-content-center">
              <b-button
                class="facebook"
                variant="facebook"
                href="javascript:void(0)"
              >
                <feather-icon icon="FacebookIcon" />
              </b-button>
              <b-button class="mail" variant="google" href="javascript:void(0)">
                <feather-icon icon="MailIcon" />
              </b-button>
              <b-button
                class="instagram"
                variant="instagram"
                href="javascript:void(0)"
              >
                <feather-icon icon="InstagramIcon" />
              </b-button>
            </div>
            <p class="lastText">© 2023 by Hukuk Bürosu.</p>
          </b-col>
          <b-col md="4"></b-col>
        </b-row>
      </div>
    </div>
  </footer>
</template>
<script>
import { BRow, BCol, BButton, BFormGroup, BFormInput } from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
export default {
  components: {
    BButton,
    BCol,
    BRow,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Animasyonlu kaydırma
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

.jumbotron {
  background-color:#af8f5a;
  font-family: "Cormorant Garamond", serif;
}
.footerLink {
  color: white !important;
  font-family: "Cormorant Garamond", serif;
  font-size: 35px;
}
.footerText {
  border: 1px solid #b1915e;
  color: white;
  padding: 10px;
  font-size: 18px;
}
.auth-footer-btn {
  margin: 0%;
}
.lastText {
  color:#b1915e
}
h4 {
  color:#b1915e;
  background-color: white;
  padding: 5px;
}
.facebook {
  margin-right: 2px;
  background-color: #b1915e;
  border: 1px solid white;
}
.mail {
  margin-right: 2px;
  background-color: #b1915e;
  border: 1px solid white;
}
.instagram {
  margin-right: 2px;
  background-color: #b1915e;
  border: 1px solid white;
}
</style>
<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
