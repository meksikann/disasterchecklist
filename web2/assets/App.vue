<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="main">
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-toolbar dark fixed app :clipped-left="clipped" class="main">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <speak></speak>
    <v-content :class="{ 'disasters': $route.path == '/disasters' }">
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'
  import Speak from "../components/Speak";
  export default {
    mixins: [Meta],
    components: {Speak},
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Welcome', to: '/' },
          { icon: 'list', title: 'My checklists', to: '/checklist' },
          { icon: 'flash_on', title: 'Disasters', to: '/disasters' },
          { icon: 'search', title: 'View map', to: '/map' },
        ],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: this.$route.name
      }
    },

    watch: {
      '$route' (to, from) {
        this.title = to.name;
      }
    }
  }
</script>

<style scoped>
  .application {
    background: #9bd0fa;
  }
</style>
