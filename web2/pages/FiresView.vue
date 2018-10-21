<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 class="image">
      <img :src="image" alt="">
    </v-flex>
    <v-flex>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { VCarousel } from 'vuetify'
  export default {
    data: function() {
      return {
        image: ['/static/fires_1.jpg'],
        description: '',
        descriptionOpen: false
      }
    },
    mounted() {
      document.title = 'Disaster Assistant | Fires';
    }
  }
</script>

<style scoped>
  .image {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  .image img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
  }
</style>
