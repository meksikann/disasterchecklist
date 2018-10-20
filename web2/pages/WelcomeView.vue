<template>
  <v-layout column justify-center align-center>
    <Speak></Speak>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center background-map">
        <img src="/static/map.jpg" alt="Map" class="mb-5"/>
      </div>
      <v-card flat color="transparent">
        <v-layout row wrap class="buttons">
          <v-flex xs6 sm6 md6>
            <div class="content create">
              <v-btn color="white"  router to="/create">Create</v-btn>
            </div>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <div class="content">
              <v-btn color="white" router to="/view">View</v-btn>
            </div>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <div class="content">
              <v-btn color="white" router to="/use">Use</v-btn>
            </div>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <div class="content">
              <v-btn color="white" @click="startButton()">Talk</v-btn>
            </div>
          </v-flex>
        </v-layout>
        <!--<v-card-actions>-->
          <!--<v-btn color="primary" flat router to="/inspire">Continue</v-btn>-->
        <!--</v-card-actions>-->
      </v-card>
    </v-flex>
  </v-layout>
</template>
<style scoped>
  .buttons {
    text-align: center;
  }

  .buttons .content {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background-map {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

  /*.background-map img {*/
  /*position: absolute;*/
  /*top: -9999px;*/
  /*left: -9999px;*/
  /*right: -9999px;*/
  /*bottom: -9999px;*/
  /*margin: auto;*/
  /*min-width: 100%;*/
  /*min-height: 100%;*/
  /*}*/

  .background-map::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
  }
</style>

<script>
  import Speak from "../components/Speak";
  export default {
    components: {Speak}
  }
</script>
