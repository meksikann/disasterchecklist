<template>
  <v-layout column justify-center align-center>
    <!--<Speak></Speak>-->
    <v-flex xs12>
      <div class="content">
        <div class="background">
          <img src="/static/fires_1.jpg" alt="">
        </div>
        <v-btn flat large color="white" router to="/disaster-fire">Fires</v-btn>
      </div>
    </v-flex>
    <v-flex xs12>
      <div class="content">
        <div class="background">
          <img src="/static/flood_1.jpg" alt="">
        </div>
        <v-btn flat large color="white" router to="/disaster-flood">Flood</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .layout > .flex {
    width: 100%;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    position: relative;
  }
  .content .background {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }

  .content img {
    position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    animation: grow linear infinite 30s;
  }

  .content .background::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
  }

  .content .btn {
    position: relative;
  }

  .flex {
    margin-bottom: 40px;
  }

  @keyframes grow {
    0%   { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
</style>

<script>
  import Speak from "../components/Speak";

  export default {
    components: {Speak}
  }
</script>
