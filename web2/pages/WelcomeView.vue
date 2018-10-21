<template>
  <v-layout column justify-center align-center class="main-layout">
    <v-flex xs12 sm8 md6 class="center">
      <v-card flat color="transparent">
        <v-layout row wrap justify-space-between class="buttons">
          <v-flex xs12>
            <div class="content create">
              <v-btn color="rgba(225,225,225, .7)" large block router to="/disasters">
                <div class="background bg-black">
                  <img src="/static/fire.png" alt="">
                </div>
                <div class="icon-caption">
                  fire
                </div>
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="content">
              <v-btn color="rgba(225,225,225, .7)" large block router to="/checklist">
                <div class="background bg-blue">
                  <svg version="1.1" id="water" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 170 70" style="enable-background:new 0 0 170 70;" xml:space="preserve">
                    <g>
                    <path fill="#04ACFF" id="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
        c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
        c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"/>
                    </g>
                  </svg>
                </div>
                <div class="icon-caption">
                  flood
                </div>
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="content">
              <v-btn color="rgba(225,225,225, .7)" large block router to="/checklist">
                <div class="background bg-cyan">
                  <img id="hurricane" src="/static/hurricane.svg" alt="">
                </div>
                <div class="icon-caption">
                  Hurricane
                </div>
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="content">
              <v-btn color="rgba(225,225,225, .7)" large block router to="/checklist">
                <div class="background bg-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="volcano" x="0px" y="0px" viewBox="0 0 511.985 511.985" style="enable-background:new 0 0 511.985 511.985;" xml:space="preserve">
                    <path style="fill:#9B5C5C;" d="M445.201,492.047c4.172,10.969-2.03,19.938-13.764,19.938H80.542  c-11.734,0-17.921-8.969-13.765-19.938l110.778-292.053c4.156-10.968,17.031-18.374,28.608-16.437l28.78,4.796  c11.578,1.922,30.515,1.922,42.093,0l28.78-4.796c11.578-1.938,24.452,5.468,28.608,16.437L445.201,492.047z"/>
                    <g>
                      <path id="volcano-lava-1" style="fill:#E8563F;" d="M255.99,362.66c-5.891,0-10.672-4.765-10.672-10.671V245.336c0-5.891,4.781-10.671,10.672-10.671   c5.89,0,10.671,4.781,10.671,10.671v106.653C266.661,357.895,261.88,362.66,255.99,362.66z"/>
                      <path id="volcano-lava-2" style="fill:#E8563F;" d="M202.663,298.663c-5.89,0-10.671-4.766-10.671-10.672v-53.327c0-5.891,4.781-10.671,10.671-10.671   c5.891,0,10.656,4.781,10.656,10.671v53.327C213.319,293.897,208.554,298.663,202.663,298.663z"/>
                      <path id="volcano-lava-3" style="fill:#E8563F;" d="M309.316,277.335c-5.891,0-10.656-4.78-10.656-10.671v-35.203c0-5.89,4.766-10.655,10.656-10.655   s10.672,4.765,10.672,10.655v35.203C319.988,272.555,315.207,277.335,309.316,277.335z"/>
                    </g>
                    <path id="volcano-smoke-1" style="fill:#CBD0D8;" d="M317.629,131.98c-0.344-0.422-8.281-10.469-0.75-18.031c16.749-16.812,7.796-37.436,0.688-46.045  c0,0-0.016-0.016-0.031-0.031l0,0l0,0c-1.953-2.359-4.906-3.875-8.219-3.875c-5.891,0-10.656,4.781-10.656,10.671  c0,2.594,0.922,4.968,2.453,6.812l0,0c0.016,0.016,2.266,2.938,3.359,6.656c1.281,4.359,0.469,7.578-2.703,10.765  c-16.703,16.765-7.797,37.718-0.75,46.468v-0.016c1.953,2.421,4.953,3.984,8.297,3.984c5.891,0,10.672-4.781,10.672-10.671  C319.988,136.137,319.097,133.808,317.629,131.98L317.629,131.98z"/>
                    <path id="volcano-smoke-2" style="fill:#A9B1BC;" d="M273.911,36.921C271.114,21,265.739,8.156,265.067,6.563c-0.016-0.031-0.031-0.063-0.047-0.094  c0-0.016-0.016-0.047-0.031-0.063l0,0C263.348,2.64,259.599,0,255.224,0c-5.891,0-10.672,4.781-10.672,10.672  c0,1.516,0.328,2.953,0.891,4.266l0,0c0.047,0.109,4.969,11.5,7.453,25.655c2.078,11.906,2.781,28.125-5.672,37.687  c-11.171,12.641-14.734,31.858-10.281,55.608c2.921,15.609,8.343,28.264,9.218,30.249c0,0.016,0,0.031,0.016,0.047  c0.047,0.109,0.078,0.188,0.094,0.203l0,0c1.672,3.703,5.391,6.281,9.719,6.281c5.89,0,10.671-4.766,10.671-10.671  c0-1.547-0.344-3.031-0.953-4.375h0.016c-5.469-12.187-16.578-47.296-2.516-63.217C274.348,79.81,278.052,60.623,273.911,36.921z"/>
                    <path id="volcano-smoke-3" style="fill:#CBD0D8;" d="M210.897,67.904c0-0.016-0.016-0.016-0.016-0.016c0-0.016,0-0.016,0-0.016h-0.016  c-1.953-2.359-4.906-3.875-8.203-3.875c-5.89,0-10.671,4.781-10.671,10.671c0,2.594,0.922,4.968,2.453,6.812l0,0  c0.031,0.016,2.281,2.938,3.359,6.656c1.281,4.359,0.469,7.578-2.703,10.765c-16.703,16.765-7.797,37.718-0.75,46.468v-0.016  c1.969,2.421,4.953,3.984,8.312,3.984c5.891,0,10.656-4.781,10.656-10.671c0-2.531-0.875-4.859-2.359-6.688l0,0  c-0.344-0.422-8.281-10.469-0.75-18.031C226.974,97.138,218.007,76.498,210.897,67.904z"/>
                    <path style="fill:#FB6D51;" d="M255.99,245.336c63.999,0,88.684-18.327,88.684-18.327l-10.249-27.015  c-4.156-10.968-17.03-18.374-28.608-16.437l-28.78,4.796c-11.578,1.922-30.515,1.922-42.093,0l-28.78-4.796  c-11.578-1.938-24.453,5.468-28.608,16.437l-11.766,31.015C165.789,231.008,191.992,245.336,255.99,245.336z"/>
                  </svg>
                </div>
                <div class="icon-caption">
                  Volcano eruption
                </div>
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <div class="content">
              <v-btn color="rgba(225,225,225, .7)" large block router to="/disasters">
                <div>
                  <v-icon large>warning</v-icon>
                  Report another disaster
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
  .background {
    border-radius: 50%;
    overflow: hidden;
    width: 85px;
    height: 85px;
    max-width: 85px;
    position: absolute;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background {
    background: rgba(225,225,225, 1);
  }

  .icon-caption {
    color: #444;
    text-align: left;
    width: 100%;
    padding-left: 30%;
  }


  .background img {
    max-width: 100%;
    max-height: 100%;
    animation: grow linear infinite 3s;
  }

  .main-layout {
  }

  .center {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .buttons {
    text-align: center;
  }

  .content {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }


  .buttons .xs12 .v-btn i {
    margin-bottom: 5px;
    display: inline-block;
    vertical-align: middle;
  }


  .buttons .xs6 {
    max-width: 49%;
  }

  .buttons .v-btn {
    border-radius: 30px 0 0 30px;
    height: 85px;
    font-size: 15px;
    color: #333;
    padding: 0;
    text-align: left;
  }

  .buttons .v-btn i {
    display: block;
  }

  .background #water {
    width: 170px;
    height: 124px;
  }

  .background #volcano {
    width: 80px;
    height: 75px;
  }

  #hurricane {
    max-width: 70px;
    max-height: 100px;
    animation: shakeAction linear infinite 5s;
  }
  #volcano-smoke-1 {
    animation: shake linear infinite 5s;
  }
  #volcano-smoke-2 {
    animation: shake linear infinite 5s;
  }
  #volcano-smoke-3 {
    animation: shake linear infinite 5s;
  }

  #water g {
    animation: shake linear infinite 8s;
  }

  #waveShape {
    animation: waveAction linear infinite .5s;
    width: 100%;
    height: 100%;
    fill: #04ACFF;
  }

  @keyframes grow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }


  @keyframes waveAction {
    0% {
      transform: translate(-120px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes shakeAction {
    0% {
      transform: translate(0, -5px);
    }
    25% {
      transform: translate(-20px, 0);
    }
    50% {
      transform: translate(0, 5px);
    }
    75% {
      transform: translate(20px, 0);
    }
    100% {
      transform: translate(0, -5px);
    }
  }

  @keyframes shake {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, -15px);
    }
    50% {
      transform: translate(0, 0);
    }
    75% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>

<script>
  import Speak from "../components/Speak";

  export default {
    components: {Speak}
  }
</script>
