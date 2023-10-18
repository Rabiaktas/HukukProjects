<template>
  <b-row>
    <b-col md="12">
      <!-- NavBar-->
      <b-navbar toggleable="lg" class="navbar-bg">
        <b-navbar-brand href="/">
          <b-img
            src="@/assets/images/logo/HukukLogo1.png"
            class="logo-img"
            width="100"
            height="110"
          >
          </b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Anasayfa</b-nav-item>
            <b-nav-item href="/hakkimizda">Hakkımızda</b-nav-item>


            <!--DropDown-->
            <b-nav-item-dropdown text="Uzmanlık Alanlarımız" right>
              <template #button-content>           
                <span
                  class="dropdownItem"
                  style="color: #b1915e; font-size: 21px"
                  >Uzmanlık Alanlarımız</span
                >
              </template>

              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/CezaHukuku"
                >Ceza Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/AileHukuku"
                >Aile Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/TazminatHukuku"
                >Tazminat Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/IcraHukuku"
                >İcra ve İflas Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/MirasHukuku"
                >Miras Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/TuketiciHukuku"
                >Tüketici Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/VergiHukuku"
                >İdare ve Vergi Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/GayrimenkulHukuku"
                >Gayrimenkul ve Kira Hukuku</b-dropdown-item
              >
              <b-dropdown-item class="dropdownItemChild" href="/UzmanlikAlanlarimiz/IsVeSosyalGuvenlikHukuku"
                >İş ve Sosyal Güvenlik Hukuku</b-dropdown-item
              >
             
            </b-nav-item-dropdown>
            <!--/DropDown-->
            <b-nav-item href="/about">Makaleler</b-nav-item>
            <b-nav-item href="/contact">İletişim</b-nav-item>
          </b-navbar-nav>

          <b-nav-item class="ml-auto">
            <feather-icon class="NavIcon" icon="FacebookIcon" />
            <feather-icon class="NavIcon" icon="MailIcon" />
            <feather-icon class="NavIcon" icon="InstagramIcon" />
          </b-nav-item>
        </b-collapse>
      </b-navbar>
      <!-- /Navbar --></b-col
    >
  </b-row>
</template>
<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BPagination,
  BIcon,
  BCard,
  BLink,
  BNavbar,
  BNavItem,
  BCollapse,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
  BDropdown,
  BFormInput,
  BButton,
  BNavbarToggle,
  BNavbarBrand,
  BImg,
} from "bootstrap-vue";
import DarkToggler from "@core/layouts/components/app-navbar/components/DarkToggler.vue";
export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BPagination,
    BIcon,
    BCard,
    BLink,
    BNavbar,
    BNavItem,
    BCollapse,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdown,
    BFormInput,
    BButton,
    BNavbarToggle,
    BNavbarBrand,
    BImg,
    DarkToggler,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap");

/* Navbar için stil */
.navbar-bg {
  background: transparent; /* Navbar için arka plan rengi ve opaklık ayarı */
  width: 100%; /* Sayfa genişliği kadar geniş olacak */
  z-index: 2; /* Navbar'ı diğer öğelerin üstünde tutar */
  position: absolute;
  left: 0;
  right: 0;
}
@media (max-width: 1000px) {
  .navbar-bg {
    background: #fdfdfd;
  }
  .custom-dropdown-item {
    background: #fdfdfd;
  }
}
/* Navbar linkleri için stil */
.navbar-bg a {
  position: relative;
  z-index: 1;
  color: #b1915e !important;
  font-size: 22px;
  font-family: "Cormorant Garamond", serif;
}
.dropdownItem  {
  font-size: 22px;
  font-family: "Cormorant Garamond", serif;
}
/* hover */
.dropdownItemChild:hover{
  background-color: #b1915ed8;
  color: black !important;
}
.dropdownItemChild.clicked {
  background-color: #b1915ed8;
  color: black !important;
}

.NavIcon {
  margin-right: 8px;
  color: #b1915e;
}
.logo-img {
  margin-left: 15px;
}
</style>
