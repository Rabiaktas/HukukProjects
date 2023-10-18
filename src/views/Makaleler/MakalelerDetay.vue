<template>
  <div>
    <div class="customBack container">
      <!-- Title-->
      <b-card-text>
        <h2 class="display-2 text-center text-md-center">Makaleler</h2>
      </b-card-text>
      <hr />
    </div>
    <!-- Cardlar-->
    <div class="container">
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="10">
          <b-card-group deck class="mb-0 ikincikisim">
            <!-- card 1 -->
            <b-card
              :img-src="require('@/assets/images/slider/1.jpg')"
              img-alt="Card image cap"
              img-top
              no-body
            >
              <b-card-body>
                <b-card-title class="cardTitle">1. Makale</b-card-title>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-card-text>
              </b-card-body>
              <b-card-footer>
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline"
                  class="btnStyle"
                >
                  Detay..
                </b-button>
              </b-card-footer>
            </b-card>

            <!-- card 2 -->
            <b-card
              :img-src="require('@/assets/images/slider/2.jpg')"
              img-alt="Card image cap"
              img-top
              no-body
            >
              <b-card-body>
                <b-card-title class="cardTitle">2. Makale</b-card-title>
                <b-card-text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </b-card-text>
              </b-card-body>
              <b-card-footer>
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline"
                  class="btnStyle"
                >
                  Detay..
                </b-button>
              </b-card-footer>
            </b-card>

            <!-- card 3 -->
            <b-card
              :img-src="require('@/assets/images/slider/3.jpg')"
              img-alt="Card image cap"
              img-top
              no-body
            >
              <b-card-body>
                <b-card-title class="cardTitle">3. Makale</b-card-title>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </b-card-text>
              </b-card-body>
              <b-card-footer>
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline"
                  class="btnStyle"
                >
                  Detay..
                </b-button>
              </b-card-footer>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
      <br />
      <!-- 2. Cardlar-->
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="10">
          <b-card-group deck class="mb-0 ikincikisim">
            <!-- card 1 -->
            <b-card
              :img-src="require('@/assets/images/slider/4.jpg')"
              img-alt="Card image cap"
              img-top
              no-body
            >
              <b-card-body>
                <b-card-title class="cardTitle">4. Makale</b-card-title>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </b-card-text>
              </b-card-body>
              <b-card-footer>
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline"
                  class="btnStyle"
                >
                  Detay..
                </b-button>
              </b-card-footer>
            </b-card>

            <!-- card 2 -->
            <b-card
              :img-src="require('@/assets/images/slider/5.jpg')"
              img-alt="Card image cap"
              img-top
              no-body
            >
              <b-card-body>
                <b-card-title class="cardTitle">5. Makale</b-card-title>
                <b-card-text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </b-card-text>
              </b-card-body>
              <b-card-footer>
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline"
                  class="btnStyle"
                >
                  Detay..
                </b-button>
              </b-card-footer>
            </b-card>

            <!-- card 3 -->
            <b-card
              :img-src="require('@/assets/images/slider/6.jpg')"
              img-alt="Card image cap"
              img-top
              no-body
            >
              <b-card-body>
                <b-card-title class="cardTitle">6. Makale</b-card-title>
                <b-card-text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </b-card-text>
              </b-card-body>
              <b-card-footer>
                <b-button
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline"
                  class="btnStyle"
                >
                  Detay..
                </b-button>
              </b-card-footer>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col md="1"></b-col>
      </b-row>
    </div>
   
  </div>
</template>
<script>
import {
  BImg,
  BRow,
  BCol,
  BCard,
  BButton,
  BCardGroup,
  BCardText,
  BCardBody,
  BCardTitle,
  BCardFooter,
  BCardSubTitle,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
  components: {
    BImg,
    BRow,
    BCol,
    BCard,
    BButton,
    BCardGroup,
    BCardText,
    BCardBody,
    BCardFooter,
    BCardSubTitle,
    BCardTitle,
    Ripple,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&family=Prompt:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.ikincikisim {
  text-align: center;
  background-attachment: fixed;
  font-size: 16px;
  color: black;
}
.display-2 {
  text-align: center;
  color: #b1915e;
  font-family: "Cormorant Garamond", serif;
}
@media (max-width: 768px) {
  .display-2 {
    margin-top: 140px;
  }
}
.customBack {
  margin-top: 8%;
}
.cardTitle {
  color: #b1915e;
}
.btnStyle {
  border: 1px solid #b1915e;
  color: #b1915e;
}
.btnStyle:hover {
  background-color: #b1915e;
  color: white;
}
</style>
