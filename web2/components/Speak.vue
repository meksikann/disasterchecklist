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
  import  test from ''
  export default {
    name: "Speak",
    methods: {
      startButton(event) {
        let finalTranscript = '';
        let recognition = new webkitSpeechRecognition();

        // TODO: REmove **************************************
        let checklist = ['medicine','water','passport','money'];
         localStorage.setItem(`checklist`, JSON.stringify(checklist));

        function  generateSpeech(text) {
          responsiveVoice.speak(text);
        };

        function getCheckList() {
          let list = JSON.parse(localStorage.getItem('checklist'));

          // TODO: should return array as ['medicine','water','passport','money']
          return list;
        }

        function getAllList() {

        }

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

          // reconize intent ==================>>>>>
          switch (finalTranscript.toLocaleLowerCase()) {
            case finalTranscript.includes('show'):
              let msg = '';
              let list = getCheckList();

              console.log(list);

              if(list && list.length) {
                msg = list.join(',');
              } else {
                msg = 'There are no items in list';
              }
              generateSpeech(msg);

              break;
            default:
              generateSpeech('I do not understand you. Repeat again please.');
          }

          // generateSpeech(finalTranscript);
        };
        recognition.onerror = function (event) {
          console.log('error')
        };
        recognition.onend = function () {
          console.log('end')
        };

        recognition.start();
      }
    }
  }
</script>

<style scoped>

</style>
