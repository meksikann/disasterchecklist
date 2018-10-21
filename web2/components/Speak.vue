<template>
  <div id="speak">
    <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
    <v-btn flat fab large dark @click="startButton()">
      <v-icon>mic</v-icon>
    </v-btn>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Speak",
    methods: {
      startButton(event) {
        responsiveVoice.setDefaultVoice("US English Female");

        const luisUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/180cb4ca-9c66-42d9-b922-cec6b59a1934?subscription-key=029d627f757d4d8494495c92dc3c5742&timezoneOffset=-360&q=';
        let finalTranscript = '';
        let recognition = new webkitSpeechRecognition();

        const show = 'show';
        const resetList = 'reset_list';
        const mark = 'mark';
        const help = 'help';
        const greeting = 'greeting';
        const uncheck = 'uncheck';
        const notify = 'notify';
        const remindUnchecked = 'remind_unchecked';
        const addItem = 'add_item';
        const goodBye = 'good_bye';
        const tsunami = 'tsunami';

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

        let takenItemsDump = ['Food'];;
        // localStorage.setItem(`checklists`, JSON.stringify(checklist));
        // localStorage.setItem(`active`, JSON.stringify(activeDump));
        // localStorage.setItem(`taken_items`, JSON.stringify(takenItemsDump))
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
              msg += `Number ${index + 1}. ${ls.title}.`;
              let items = ls.items.join('.');
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
          document.dispatchEvent(new CustomEvent("shouldUpdateTaken"));
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
          document.dispatchEvent(new CustomEvent("shouldUpdateTaken"));
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

          if(msg == ''){
            return `Everything in you need - is in you'r bag`;
          }

          return `${msg} are not taken! Don't forget about it.`;
        }

        function getHelpMessage() {
          let msg = helpMsg;

          return msg;
        }

        function getResetList() {
          let msg = 'Done! All taken list is empty now.';

          localStorage.setItem(`taken_items`, JSON.stringify([]));
          document.dispatchEvent(new CustomEvent("shouldUpdateTaken"));
          return msg;
        }

        function notifyAll() {
          let msg = 'Notification has been sent';

          console.log('notification-------------------->');

          axios({
            method: 'post',
            url: 'https://fcm.googleapis.com/fcm/send',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': 'key=AAAAkoF9zZo:APA91bFmkKymStheENpbGXD5qkitpd6XKkPcFdjqp1D8DIKjxKJY9QE0E_dGFsceb_Euj37BUi1tRILZkImea5MBONurvChtUYD4pCog7MnQR5aV2Iv1SoJZXIcM22qWL1-8TrGi08Ci'
            },
            data: {
              "notification": {
                "title": "Wow, disaster alert!",
                "body": "Wildfires is reported in your area"
              },
              "data": {
                "link": "https://habr.com/post/427109/"
              },
              "to": "/topics/disasters"
            }
          }).then((res)=>{
            return msg;
          }).catch(err=>{
            return 'Something went wrong with notifications'
          })
          return msg;
        }

        function addItemToList(data) {
          let msg = '';
          let entities = data.entities;
          let takenItems = JSON.parse(localStorage.getItem('taken_items'));
          let active = JSON.parse(localStorage.getItem('active'));

          if (!takenItems) {
            takenItems = [];
          }

          entities.forEach(ent => {
            takenItems.push(ent.entity);
            console.log('here');
            if(active.items.indexOf(ent.entity) < 0){
              active.items.push(ent.entity);
            }
            msg += ` ${ent.entity},`;
          });
          msg += ' added to list';

          console.log(active);
          if(active){
            localStorage.setItem(`active`, JSON.stringify(active));
            document.dispatchEvent(new CustomEvent("shouldUpdateActive"));
          }
          localStorage.setItem(`taken_items`, JSON.stringify(takenItems));
          document.dispatchEvent(new CustomEvent("shouldUpdateTaken"));
          return msg;
        }

        function getGoodByeMsg() {
          return 'Bye! Take care';
        }

        function getTsunamiMsg() {
          let msg = 'Calm down - according to data from NASA  - there is no tsunami in your region';

          return msg;
        }

        async function processIntent(data) {
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
            case resetList:
              msg = getResetList();
              break;
            case notify:
              msg = await notifyAll();
              break;
            case addItem:
              msg = addItemToList(data);

              break;
            case goodBye:
              msg = getGoodByeMsg();
              break;
            case tsunami:
              msg  = getTsunamiMsg();
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
    position: relative;
    width: 100vw;
    height: 72vh;
    top: 0;
    left: 0;
    background-image: linear-gradient(to top, #2196f3 20%, #43435D 80%);
    z-index: 1;
    overflow: hidden;
  }
  #speak button {
    display: block;
    position: absolute;
    top: calc(15% - 40px);
    left: 0;
    right: 0;
    margin: 60px auto 0;
    border: 2px solid #9bd0fa;
    width: 250px;
    height: 250px;
  }
  #speak button i {
    font-size: 150px;
  }

  .bgTop {
    z-index: 15;
    opacity: 0.3;
  }
  .bgMiddle {
    z-index: 10;
    opacity: 0.15;
  }
  .bgBottom {
    opacity: 0.25;
    z-index: 5;
  }
  .waveWrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .wave {
    position: absolute;
    left: 0;
    width: 2000px;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
  }
  .waveTop {
    background-size: 50% 100px;
  }
  .waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  .waveMiddle {
    background-size: 50% 120px;
  }
  .waveAnimation .waveMiddle {
    animation: move_wave 5s linear infinite;
  }
  .waveBottom {
    background-size: 50% 100px;
  }
  .waveAnimation .waveBottom {
    animation: move_wave 5s linear infinite;
  }
  @keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1)
    }
  }
</style>
