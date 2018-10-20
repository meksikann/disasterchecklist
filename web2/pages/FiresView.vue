<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 class="image">
        <img src="/static/fires_1.jpg" alt="">
    </v-flex>

  </v-layout>
</template>

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

<script>
  import Speak from "../components/Speak";

  export default {
    components: {Speak}
  }
</script>
