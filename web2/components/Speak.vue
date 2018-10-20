<template>

  <v-layout column justify-center align-center>
    <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
    <v-flex xs12 sm8 md6>
      <div>
        <v-btn color="white" large block @click="startButton()">Talk 🔊</v-btn>
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

        // TODO: remove this mock
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
          console.log('recognized: ',finalTranscript);
          console.log(finalTranscript.includes('show'));



          // reconize intent ==================>>>>>
          if(finalTranscript.includes('show')) {
            let msg = '';
            let list = getCheckList();

            console.log(list);

            // show check lists
            if(list && list.length) {
              msg = list.join(',');
            } else {
              msg = 'There are no items in list';
            }
            generateSpeech(msg);

          } else {
            generateSpeech('I do not understand you. Repeat again please.');
          }

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
