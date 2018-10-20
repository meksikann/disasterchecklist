<template>
  <v-layout column justify-center align-center>
    <Speak></Speak>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center background-map">
        <img src="/static/map.jpg" alt="Map" class="mb-5"/>
      </div>
    </v-flex>
  </v-layout>
</template>
<style scoped>
  .background-map {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

</style>

<script>
  import Speak from "../components/Speak";
  export default {
    components: {Speak}
  }
</script>
