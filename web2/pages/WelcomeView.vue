<template>
  <v-layout column justify-center align-center>
    <v-toolbar color="blue" app absolute clipped-left>
      <span class="title ml-3 mr-5">ET&nbsp;<span class="text">Disaster Checklist</span></span>
    </v-toolbar>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center background-map">
        <img src="/static/map.jpg" alt="Map" class="mb-5"/>
      </div>
      <v-card flat color="transparent">
        <v-card-text>
          <p>Welcome to the Disaster Checklist</p>
        </v-card-text>
        <div class="buttons">
          <v-btn color="white" block router to="/create">Create a checklist</v-btn>
          <v-btn color="white" block router to="/view">View checklists</v-btn>
          <v-btn color="white" block router to="/use">Use</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<style scoped>
  .buttons {
    text-align: center;
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
