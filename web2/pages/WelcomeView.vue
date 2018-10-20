<template>
  <v-layout column justify-center align-center class="main-layout">
    <v-flex xs12 sm8 md6 class="center">
      <div class="text-xs-center background-map">
        <img src="/static/map.jpg" alt="Map" class="mb-5"/>
      </div>
      <v-card flat color="transparent">
        <v-layout row wrap justify-space-between class="buttons">
          <v-flex xs6 sm6 md6>
            <div class="content create">
              <v-btn color="rgba(98, 61, 189, .7)" large block router to="/checklist">
                <div>
                  <v-icon large>add_circle</v-icon>
                  create checklist
                </div>
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <div class="content">
              <v-btn color="rgba(45, 137, 239, .7)" large block router to="/view">
                <div>
                  <v-icon large>edit</v-icon>
                  view
                </div>
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <div class="content">
              <v-btn color="rgba(217, 83, 44, .7)" large block router to="/use">
                <div>
                  <v-icon large>view_list</v-icon>
                  use
                </div>
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <div class="content">
              <v-btn color="rgba(187, 29, 71, .7)" large block router to="/use">
                <div>
                  <v-icon large>warning</v-icon>
                  Report a disaster
                </div>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-card>

    </v-flex>
  </v-layout>
</template>
<style scoped>
  .main-layout {
    height: calc(100vh - 132px);
  }
  .center {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .buttons {
    text-align: center;
  }

  .buttons .content {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  .buttons .v-btn {
    font-size: 15px;
    max-width: 95%;
    height: 100%;
    color: #fff;
  }
  .buttons .v-btn i {
    display: block;
    margin-bottom: 15px;
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
