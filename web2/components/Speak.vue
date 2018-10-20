<template>
    <div id="speak">
      <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
      <v-btn color="info" fab large dark @click="startButton()">
        <v-icon>mic</v-icon>
      </v-btn>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Speak",
    methods: {
      startButton(event) {
        const luisUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/180cb4ca-9c66-42d9-b922-cec6b59a1934?subscription-key=029d627f757d4d8494495c92dc3c5742&timezoneOffset=-360&q=';
        let finalTranscript = '';
        let recognition = new webkitSpeechRecognition();
        const show = 'show';
        const give = 'give';
        const mark = 'mark';
        const help = 'help';
        const greeting = 'greeting';
        const uncheck = 'uncheck';
        const remindUnchecked = 'remind_unchecked';
        const errMsg = 'Error, I think developers screwed a bit. ha ha.';
        const notClearMsg = 'I do not understand you. Repeat again please.';
        const helpMsg = 'Ok. First of all - calm down. Go and choose checklist to take necessary stuff with you.' +
          'And in case of urgent emergency please call nine one one'

        // TODO: remove this mock ***************************************************
        //************************************************************************************
        let checklist = [
          {
            "title": "Wildfires",
            "type": "fire",
            "items": [
              "Clothing",
              "Medication"
            ]
          },
          {
            "title": "Earthquakes",
            "type": "earthquake",
            "items": [
              "Tools and supplies",
              "Water"
            ]
          },
          {
            "title": "Floods",
            "type": "flood",
            "items": [
              "Medication",
              "First aid kit"
            ]
          },
          {
            "title": "Tsunami",
            "type": "flood",
            "items": [
              "Water",
              "Food"
            ]
          }
        ];
        let activeDump = {
          "title": "Tsunami",
          "type": "flood",
          "items": [
            "Water",
            "Food"
          ]
        };

        let takenItemsDump = ['Food'];
        localStorage.setItem(`checklists`, JSON.stringify(checklist));
        localStorage.setItem(`active`, JSON.stringify(activeDump));
        localStorage.setItem(`taken_items`, JSON.stringify(takenItemsDump));
        //*************************************************************************
        //*********************************************************************

        function generateSpeech(text) {
          responsiveVoice.speak(text);
        }

        function getCheckLists() {
          let list = JSON.parse(localStorage.getItem('checklists'));
          let msg = '';

          if (list && list.length) {
            list.forEach((ls, index) => {
              msg += `Number ${index + 1}.List name: ${ls.title}.`;
              let items = ls.items.join(',');
              msg += `Stuff to take with you: ${items}.`;
            });

            return msg;
          }

          return 'you do not have checklists';
        }

        function unCheckItems(utterance) {
          let takenItems = JSON.parse(localStorage.getItem('taken_items'));
          let msg = '';

          if (!takenItems) {
            takenItems = [];
          }

          // add items to taken list
          takenItems.forEach((item, idx) => {
            item = item.toLowerCase();
            if (utterance.includes(item)) {
              takenItems.slice(idx, 1);
              msg += `${item}, `;
            }
          });

          console.log(takenItems);
          localStorage.setItem(`taken_items`, JSON.stringify(takenItems));

          return msg += `. Unchecked. Don't forget to stay calm my friend`;
        }

        function markItem(utterance) {
          let active = JSON.parse(localStorage.getItem('active'));
          let takenItems = JSON.parse(localStorage.getItem('taken_items'));
          let items = [];
          let msg = '';

          if (active) {
            items = active.items;
          }

          if (!takenItems) {
            takenItems = [];
          }

          takenItems = takenItems.map((item) => {
            return item.toLowerCase();
          });

          // add items to taken list
          items.forEach((item) => {
            item = item.toLowerCase();
            if (utterance.includes(item)) {
              if (takenItems.indexOf(item) < 0) {
                takenItems.push(item);
                msg += `${item}, `;
              }
            }
          });

          localStorage.setItem(`taken_items`, JSON.stringify(takenItems));

          return msg += `. Marked my friend`;
        }

        function remindUncheckedItems() {
          let active = JSON.parse(localStorage.getItem('active'));
          let takenItems = JSON.parse(localStorage.getItem('taken_items'));
          console.log(takenItems);
          let items = [];
          let msg = '';

          if (active) {
            items = active.items;
          }

          if (!takenItems) {
            takenItems = [];
          }

          takenItems = takenItems.map((item) => {
            return item.toLowerCase();
          });

          console.log(takenItems);

          // add items to taken list
          items.forEach((item) => {
            item = item.toLowerCase();
            if (takenItems.indexOf(item) < 0) {
              msg += `${item}, `;
            }
          });

          return `${msg} are not taken! Don't forget about it.`;
        }

        function getHelpMessage() {
          let msg = helpMsg;

          return msg;
        }


        function processIntent(data){
          let msg = '';
          let intent = data.topScoringIntent.intent;

          switch (intent) {
            case greeting:
              msg = 'Hello how can I help you?';
              break;
            case mark:
              msg = markItem(finalTranscript);
              break;
            case show:
              msg = getCheckLists();
              break;
            case uncheck:
              msg = unCheckItems(finalTranscript);
              break;
            case remindUnchecked:
              msg = remindUncheckedItems();
              break;
            case help:
              msg = getHelpMessage();
              break;

            default:
              generateSpeech(notClearMsg);
          }

          generateSpeech(msg);
        }

        recognition.onstart = function () {
          console.log('start');
        };

        // process speech to text
        recognition.onresult = function (event) {
          let interim_transcript = '';

          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interim_transcript += event.results[i][0].transcript;
            }
          }

          finalTranscript = finalTranscript.toLowerCase();
          console.log('recognized: ', finalTranscript);

          // get intent from LUIS
          axios.get(`${luisUrl}${finalTranscript}`)
            .then(response => {
              console.log(response.data);
              processIntent(response.data);
            })
            .catch(e => {
              console.error(e);
              generateSpeech(errMsg);
            });
        };

        recognition.onerror = function (event) {
          console.log('error');
          generateSpeech(errMsg);
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
  #speak {
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }
</style>
