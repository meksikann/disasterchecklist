<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-text>
          <p>Welcome to the Webpack SSR template.</p>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>. If you have questions, please join the official <a href="https://gitter.im/vuetifyjs/Lobby" target="_blank" title="chat">gitter</a>. Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.</p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat router to="/inspire">Continue</v-btn>
          <div class="right">
            <button id="start_button" @click="startButton()">Talk</button>
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

  export default{
    data(){
      return {

      }
    },
    methods: {
      startButton(event) {
        let finalTranscript = '';
       let recognition = new webkitSpeechRecognition();
        recognition.onstart = function() {
          console.log('start')
        };
        recognition.onresult = function(event) {
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

        };
        recognition.onerror = function(event) { console.log('error') };
        recognition.onend = function() { console.log('end')};
        console.log('test')

        recognition.start();
      }
    }
  }
</script>
