<template>
    <div class="container">
      <b-row>
        <!--Kartlar-->
        <b-col md="1"></b-col>
        <b-col md="5">
          <b-card align="center" class="position-static">
            <feather-icon class="PenIcon" icon="PenToolIcon" />
            <h2 class="title-style">Ehliyet</h2> <hr />
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card></b-col
        >
        <b-col md="5">
          <b-card align="center" class="position-static">
            <feather-icon class="PenIcon" icon="PenToolIcon" />
            <h2 class="title-style">Güven</h2> <hr />
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card></b-col
        >
        <b-col md="1"></b-col>
  
        <b-col md="1"></b-col>
        <b-col md="5">
          <b-card align="center" class="position-static">
            <feather-icon class="PenIcon" icon="PenToolIcon" />
            <h2 class="title-style">Dürüstlük</h2> <hr />
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card></b-col
        >
  
        <b-col md="5">
          <b-card align="center" class="position-static">
            <feather-icon class="PenIcon" icon="PenToolIcon" />
            <h2 class="title-style">Hakkaniyet</h2> <hr />
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card></b-col
        >
        <b-col md="1"></b-col>
        <b-col md="1"></b-col>
  
        <b-col md="5">
          <b-card align="center" class="position-static">
            <feather-icon class="PenIcon" icon="PenToolIcon" />
            <h2 class="title-style">Sadakat</h2>
            <hr />
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card></b-col
        >
        <b-col md="5">
          <b-card align="center" class="position-static">
            <feather-icon class="PenIcon" icon="PenToolIcon" />
            <h2 class="title-style">Saygı</h2>
            <hr />
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card></b-col
        >
      </b-row> <br>
    </div>
  </template>
  <script>
  import { BRow, BCol, BCardGroup, BCard, BCardText } from "bootstrap-vue";
  import Ripple from "vue-ripple-directive";
  
  export default {
    components: {
      BRow,
      BCol,
      BCardGroup,
      BCard,
      BCardText,
    },
    directives: {
      Ripple,
    },
  };
  </script>
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");
  
  .position-static {
    background-color: transparent;
    transition: background-color 0.7s ease, color 0.5s ease; /* Geçiş efekti ekle */
    color: black;
  }
  
  .position-static:hover {
    background-color: #b1915ec2;
    color: black;
    transition: color 0.6s ease;
  }
  .title-style {
    color: #B1915E
  }
  .position-static:hover .title-style {
    color: black; /* Kartın hover durumunda başlığını siyah yapar */
  }
  .PenIcon {
    height: auto;
    width: 30px;
    margin: 10px;
    color: rgba(16, 16, 16, 0.749);
  }
  </style>
  