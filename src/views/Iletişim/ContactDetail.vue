<template>
  <div>
    <!-- Title-->
    <b-row>
      <b-col md="12">
        <div>
          <h2 class="display-2 text-center justify-contect-center">İletişim</h2>
        </div>
      </b-col>
    </b-row>
    <b-row class="margin-row">
      <b-col md="1"></b-col>
      <b-col md="10">
        <b-row>
          <b-col md="7">
            <!--Form -->
            <div class="cardForm">
              <b-row>
                <br />
                <b-card class="contactCard">
                  <b-col md="12"
                    ><h2 style="color: white">Bize Ulaşın:</h2></b-col
                  >
                  <hr />
                  <b-col md="12">
                    <b-form @submit.prevent>
                      <b-row>
                        <b-col md="6">
                          <b-form-group
                            label-for="mc-first-name"
                            class="custom-label"
                          >
                            <h6 class="custom-label">İsim</h6>
                            <b-form-input id="mc-first-name" />
                          </b-form-group>
                        </b-col>
                        <b-col md="6">
                          <b-form-group
                            label-for="mc-last-name"
                            class="custom-label"
                          >
                            <h6 class="custom-label">Soyad</h6>
                            <b-form-input id="mc-last-name" />
                          </b-form-group>
                        </b-col>
                        <b-col md="6">
                          <b-form-group
                            label-for="v-mobile"
                            class="custom-label"
                          >
                            <h6 class="custom-label">Telefon</h6>
                            <b-form-input id="v-mobile" type="number" />
                          </b-form-group>
                        </b-col>
                        <b-col md="6">
                          <b-form-group label-for="mc-email">
                            <h6 class="custom-label">Email</h6>
                            <div class="form-label-group">
                              <b-form-input id="mc-email" type="email" />
                            </div>
                          </b-form-group>
                        </b-col>
                        <b-col md="12">
                          <div class="form-label-group">
                            <b-form-textarea
                              id="textarea"
                              rows="3"
                              placeholder="Hakkınızda.."
                            />
                            <label for="label-textarea"
                              >Label in Textarea</label
                            >
                          </div>
                        </b-col>

                        <!-- submit -->
                        <b-col
                          class="d-flex justify-content-center align-items-center"
                        >
                          <b-button
                            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                            type="submit"
                            variant="outline-secondary"
                            id="submitForm"
                          >
                            SUBMIT
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-form>
                  </b-col> </b-card
                ><br />
              </b-row></div
          ></b-col>
          <b-col md="5">
            <!--Gif -->
            <b-img
              class="resim-container text-md-end"
              src="@/assets/images/banner/iletişim.gif"
              fluid
              alt="Responsive image"
              width="450"
          /></b-col>
        </b-row>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
<br><br>
    <!--Swiper-->
    <swiper></swiper> <br>
  </div>
</template>
<script>
import {
  BRow,
  BCol,
  BJumbotron,
  BCard,
  BCardText,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormTextarea,
  BImg,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import { LMap, LTileLayer, LCircle } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import Swiper from "../home/components/Swiper.vue";
export default {
  components: {
    BRow,
    BCol,
    BJumbotron,
    BCard,
    BCardText,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BFormTextarea,
    BImg,
    LMap,
    LTileLayer,
    LCircle,
    Swiper,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 8,
      center: [47.31322, -1.319482],
      circle: {
        center: [47.41322, -1.0482],
        radius: 4500,
        color: "#EA5455",
      },
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.cardForm {
  font-family: "Prompt", sans-serif;
}
.margin-row {
  margin-top: 1%;
}
.resim-container {
  border: 2px solid #b1915e;
  border-radius: 1%;
  height: 400px;
  margin-top: 20px;
  margin-left: 50px;
}

.display-2 {
  text-align: center;
  color: #b1915e;
  font-family: "Cormorant Garamond", serif;
  margin-top: 10%;
  margin-bottom: 0%;
}
@media (max-width: 768px) {
  .display-2 {
    margin-top: 140px;
  }
}
.contactCard {
  background-color: #b1915e !important;
  border: 1px solid white;
  box-shadow: 4px 4px 10px grey;
}

.custom-label {
  color: white;
}

#submitForm {
  border: 1px solid #b1915e !important;
  padding: 15px 50px;
  font-size: 18px;
  color: #b1915e;
  background-color: white;
  transition: background-color 0.3s, color 0.3s;
}
#submitForm:hover {
  background-color: #b1915e; /* Hover olduğunda arka plan rengi */
  color: white; /* Hover olduğunda metin rengi */
  cursor: pointer; /* Fare imleci türü */
  border: 1px solid white !important;
}
</style>
<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 350px;
  }
}
</style>
