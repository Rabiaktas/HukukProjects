<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="image-container">
        
          <div class="overlay">
            <b-col md="1"></b-col>

            <!--Title-->
            <b-col md="4">
              <h2 class="display-4 meslek-title">Neden Bizi Tercih Etmelisiniz?</h2>
              <div style="color: #cda434" class="altin-cizgi"></div>
            </b-col>
            <!--/Title-->

             <!--Collapse -->
            <b-col md="6">  
            <app-collapse  accordion >
              <app-collapse-item  class="butonlar" title="Gizlilik ve Mesleki Sır">
                Pie dragée muffin. Donut cake liquorice marzipan carrot cake
                topping powder candy. Sugar plum brownie brownie cotton candy.
                Tootsie roll cotton candy pudding bonbon chocolate cake lemon
                drops candy. Jelly marshmallow chocolate cake carrot cake bear
                claw ice cream chocolate. Fruitcake apple pie pudding jelly
                beans pie candy canes candy canes jelly-o. Tiramisu brownie
                gummi bears soufflé dessert cake.
              </app-collapse-item>

              <app-collapse-item  class="butonlar" title="Şeffaflık">
                Pie dragée muffin. Donut cake liquorice marzipan carrot cake
                topping powder candy. Sugar plum brownie brownie cotton candy.
                Tootsie roll cotton candy pudding bonbon chocolate cake lemon
                drops candy. Jelly marshmallow chocolate cake carrot cake bear
                claw ice cream chocolate. Fruitcake apple pie pudding jelly
                beans pie candy canes candy canes jelly-o. Tiramisu brownie
                gummi bears soufflé dessert cake.
              </app-collapse-item>

              <app-collapse-item  class="butonlar" title="Bağımsızlık">
                Pie dragée muffin. Donut cake liquorice marzipan carrot cake
                topping powder candy. Sugar plum brownie brownie cotton candy.
                Tootsie roll cotton candy pudding bonbon chocolate cake lemon
                drops candy. Jelly marshmallow chocolate cake carrot cake bear
                claw ice cream chocolate. Fruitcake apple pie pudding jelly
                beans pie candy canes candy canes jelly-o. Tiramisu brownie
                gummi bears soufflé dessert cake.
              </app-collapse-item>
            </app-collapse></b-col>
              <!--/ Collapse -->

            <b-col md="1"></b-col>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BRow,
    BCol,
    AppCollapseItem,
    AppCollapse
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

.image-container {
  position: relative;
  width: 100%;
  max-width: 100%; /* Resmin maksimum genişliği ekledik */
  overflow: hidden;
  background-image: url("../../../assets/images/banner/comp2.jpg");
  background-size: cover; /* Resmi sayfa boyutuna uygun şekilde doldur */
  background-repeat: no-repeat; /* Resmi yinelenmesini engelle */
  background-attachment: fixed;
  height: 500px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.meslek-title {
  color: white;
  font-family: "Cormorant Garamond", serif;
}
.overlay-text {
  color: white;
  font-size: 24px;
  text-align: center;
}
.altin-cizgi {
  width: 80px;
  border: solid 0.5px;
}
.butonlar{
  background-color: transparent !important;
  color: white;
}
</style>
