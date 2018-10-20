<template>
  <v-layout column justify-center align-center>
    <Speak></Speak>
    <v-layout column>
      <v-flex xs12 sm12 md12>
        <div class="content">
          <div class="background">
            <img src="" alt="">
          </div>
          <v-btn block router to="/disaster-fire">Fire</v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <div class="content">
          <div class="background">
            <img src="" alt="">
          </div>
          <v-btn block router to="/disaster-flood">Flood</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<style scoped>
</style>


<script>
  import Speak from "../components/Speak";
  export default {
    components: {Speak}
  }
</script>
