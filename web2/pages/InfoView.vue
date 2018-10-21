<template>
  <div>
    <v-layout row style="min-height: 100vh">
      <v-flex xs1>
        use
      </v-flex>
      <v-flex xs10>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="item.title"
              avatar
              ripple
              @click="cardOnClickHandler(index)"
            >

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-flex>
      <v-flex xs1>
        edit
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { getAllChecklist } from "../localStorage/localStorage";
  import draggable from 'vuedraggable';
  import VListTileAction from "vuetify/lib/components/VList/VListTileAction";
  export default {
    name: "InfoView",
    components: {VListTileAction, draggable },
    data () {
      return {
        items: [
          {
            action: '15 min',
            headline: 'Brunch this weekend?',
            title: 'Ali Connors',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            action: '15 min',
            headline: 'Brunch this weekend?',
            title: 'Ali Connors',
            subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          }
        ],
        deleteZone: [],
        editZone: [],
        useZone: [],
        options: {

        }
      }
    },
    methods: {
      cardOnClickHandler(index) {
        console.log(index);
      }
    }
  }
</script>

<style scoped>

</style>
