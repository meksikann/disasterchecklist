<template>

  <v-layout column justify-center align-center>
    <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
    <v-flex xs12 sm8 md6>
      <div>
        <v-btn id="start_button" @click="startButton()">Talk 🔊</v-btn>
        <v-btn id="start_button" @click="generateSpeech('this a test')">generate Speech</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "Speak",
    methods: {
      startButton(event) {
        let finalTranscript = '';
        let recognition = new webkitSpeechRecognition();
        recognition.onstart = function () {
          console.log('start');
        };
        recognition.onresult = function (event) {
          console.log('result', event)
          var interim_transcript = '';

          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interim_transcript += event.results[i][0].transcript;
            }
          }
          console.log(finalTranscript);

          // TODO: do some actions with it

        };
        recognition.onerror = function (event) {
          console.log('error')
        };
        recognition.onend = function () {
          console.log('end')
        };

        recognition.start();
      },
      generateSpeech(text) {
        responsiveVoice.speak(text);
      }
    }
  }
</script>

<style scoped>

</style>
